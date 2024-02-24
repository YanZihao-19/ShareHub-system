package com.yzh.controller;

import com.yzh.pojo.Result;
import com.yzh.pojo.User;
import com.yzh.service.UserService;
import com.yzh.utils.JwtUtils;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/14 19:46
 */
@Log4j2
@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private UserService userService;

    //web端管理员登录
    @PostMapping
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

    //小程序端用户登录
    @PostMapping("/users")
    public Result loginUser(@RequestBody User user) {
        User user1 = userService.loginUser(user);
        if (user1 != null) { //用户密码正确
            Map<String, Object> claims = new HashMap<>();
            claims.put("id", user1.getId());
            claims.put("username", user1.getUsername());
            return Result.success(JwtUtils.generateJwt(claims));
        }
        return Result.error("用户名或密码错误");
    }
}