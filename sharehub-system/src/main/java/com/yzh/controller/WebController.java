package com.yzh.controller;

import cn.hutool.core.util.ObjectUtil;


import com.yzh.pojo.Account;
import com.yzh.pojo.User;
import com.yzh.service.AdminService;
import com.yzh.pojo.Result;
import com.yzh.service.MemberLoginService;
import com.yzh.service.UserService;
import com.yzh.common.utils.JwtUtils;
import com.yzh.vo.LoginVO;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


/**
 * 基础前端接口
 */
@RestController
public class WebController {

    @Resource
    private AdminService adminService;

    @GetMapping("/")
    public Result hello() {
        return Result.success("访问成功");
    }


    @Autowired
    private UserService userService;

    @Autowired
    public MemberLoginService memberLoginService;

    //小程序使用账户密码登录
//    @PostMapping("/users")
//    public Result loginUser(@RequestBody User user) {
//        User user1 = userService.loginUser(user);
//        if (user1 != null) { //用户密码正确
//            Map<String, Object> claims = new HashMap<>();
//            claims.put("id", user1.getId());
//            claims.put("username", user1.getUsername());
//            return Result.success(JwtUtils.generateJwt(claims));
//        }
//        return Result.error("用户名或密码错误");
//    }

    //小程序端用户登录/注册
    @PostMapping("/user/login")
    public Result getWxUser(@RequestBody LoginVO loginVO) {
        User user1 = memberLoginService.getUserOpenId(loginVO.getCode());

        if (user1 != null) { //用户不为空
            //查询该user的偏好数据是否已经存在(用于全都是否展示偏好选择的逻辑判断)
            Integer userTagsPreferId = userService.getTagsPrefer(user1.getOpenId());

            Map<String, Object> claims = new HashMap<>();
            claims.put("openId", user1.getOpenId());
            claims.put("username", user1.getUsername());
            claims.put("image", user1.getImage());
            claims.put("userTagsPreferId", userTagsPreferId);

            return Result.success(JwtUtils.generateJwt(claims));
        }
        return Result.success("登录失败！");
    }

    /**
     * 登录
     */
    @PostMapping("/login")
    public Result login(@RequestBody Account account) {
        if (ObjectUtil.isEmpty(account.getUsername()) || ObjectUtil.isEmpty(account.getPassword())
                || ObjectUtil.isEmpty(account.getRole())) {
            return Result.error("出错了~");
        }
        if ("ADMIN".equals(account.getRole())) {
            account = adminService.login(account);
        }
        return Result.success(account);
    }

}
