package com.yzh.controller;

import com.yzh.anno.Log;
import com.yzh.pojo.Item;
import com.yzh.pojo.Result;
import com.yzh.service.ItemService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/23 19:38
 */
@Slf4j
@RestController
@RequestMapping("/items")
public class ItemController {
    @Autowired
    private ItemService itemService;

    @PostMapping
    public Result addItem(@RequestBody Item item) {
        itemService.addItem(item);
        return Result.success();
    }
}
