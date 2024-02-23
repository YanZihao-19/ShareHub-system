package com.yzh.controller;

import com.yzh.anno.Log;
import com.yzh.pojo.PageBean;
import com.yzh.pojo.Result;
import com.yzh.pojo.User;
import com.yzh.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 16:02
 */
@Slf4j
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    /**
     * 条件查询用户列表
     */
    @GetMapping
    public Result empList(@RequestParam(defaultValue = "1") Integer page,
                          @RequestParam(defaultValue = "10") Integer pageSize,
                          String name, Short gender, Short role, Integer credibility
    ) {
        PageBean pageBean = userService.pageBean(page, pageSize, name, gender, role, credibility);
//        log.info("条件查询");
        return Result.success(pageBean);
    }


    /**
     * 新增用户
     */
    @Log
    @PostMapping
    public Result addUser(@RequestBody User user) {
        userService.addUser(user);
        return Result.success();
    }

    /**
     * 根据id查用户
     */
    @GetMapping("/{id}")
    public Result findUser(@PathVariable Integer id) {
        User user = userService.selectById(id);
        return Result.success(user);
    }

    /**
     * 更新用户
     */
    @Log
    @PutMapping
    public Result updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return Result.success();
    }

    /**
     * 批量删除用户
     */
    @Log
    @DeleteMapping("/{ids}")
    public Result updateUser(@PathVariable List<Integer> ids) {
        userService.delUser(ids);
        return Result.success();
    }

    @GetMapping("/test")
    public Result test() {

        return Result.success("成功！！！");
    }

}
