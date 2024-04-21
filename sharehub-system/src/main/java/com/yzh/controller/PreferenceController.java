package com.yzh.controller;

import com.yzh.pojo.Item;
import com.yzh.pojo.Result;
import com.yzh.service.UserService;
import com.yzh.vo.PreferenceVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/19 0:31
 */
@Slf4j
@RestController
@RequestMapping("/preference")
public class PreferenceController {
    @Autowired
    private UserService userService;

    /**
     * 初始化用户偏好
     */
    @PostMapping("/init")
    public Result initUserPreference(@RequestHeader("token") String token, @RequestBody PreferenceVO preferenceVO) {
        userService.initUserPreference(token, preferenceVO);
        return Result.success("success");
    }

    /**
     *用户长按不喜欢降低 偏好值
     */
    @PutMapping("/decPreference")
    public Result decPreference(@RequestHeader("token") String token, @RequestBody  Item item) {
        userService.decPreference(token, item);
        return Result.success("success");
    }
}
