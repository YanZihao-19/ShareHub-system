package com.yzh.controller;

import com.yzh.vo.LoginVO;
import com.yzh.pojo.Result;
import com.yzh.pojo.User;
import com.yzh.service.IMemberLoginService;
import com.yzh.service.UserService;
import com.yzh.utils.JwtUtils;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/14 19:46
 */
@Log4j2
@RestController
public class LoginController {
    @Autowired
    private UserService userService;

    @Autowired
    public IMemberLoginService iMemberLoginService;

    //web端管理员登录
    @PostMapping("/login")
    public Result login(@RequestBody User user) {
        User user1 = userService.login(user);
        if (user1 != null) { //用户密码正确
            Map<String, Object> claims = new HashMap<>();
            claims.put("id", user1.getId());
            claims.put("username", user1.getUsername());
            return Result.success(JwtUtils.generateJwt(claims));
        }
        return Result.error("用户名或密码错误");
    }

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
        User user1 = iMemberLoginService.getUserOpenId(loginVO.getCode());

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
}