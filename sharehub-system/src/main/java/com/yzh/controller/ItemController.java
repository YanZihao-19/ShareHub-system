package com.yzh.controller;

import com.yzh.pojo.Item;
import java.util.*;
import com.yzh.pojo.Result;
import com.yzh.service.ItemService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    //新增(免费、易物、二手)物品
    @PostMapping
    public Result addItem(@RequestBody Item item) {
        itemService.addItem(item);
        return Result.success();
    }

    //展示小程序注意(推荐)物品
    @GetMapping
    public Result itemList(@RequestHeader("token") String token) {
        List<Item> itemList = itemService.getItemList(token);
        return Result.success(itemList);
    }
}
