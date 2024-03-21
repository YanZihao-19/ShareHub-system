package com.yzh.controller;


import com.yzh.pojo.Item;

import java.util.*;

import com.yzh.pojo.Order;
import com.yzh.pojo.Result;
import com.yzh.service.ItemService;
import com.yzh.vo.AddItemOrderVO;
import com.yzh.vo.ItemVO;
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
    @PostMapping("/recommendItems")
    public Result itemList(@RequestHeader("token") String token, @RequestBody List<Item> itemList, @RequestParam Integer mode, @RequestParam Integer tap) throws IllegalAccessException {
        List<Item> itemListResult = itemService.getItemList(token, itemList, mode, tap);
        return Result.success(itemListResult);
    }

    @PostMapping("/presentItemList")
    public Result addItemList(@RequestHeader("token") String token, @RequestBody List<Item> itemList) {
        // 在这里处理接收到的物品列表 itemList
        System.out.println("前端发来的List" + itemList);
        System.out.println("-----------------------------------");
        return Result.success("Items added successfully");
    }

    //展示物品详情
    @GetMapping("/{itemId}")
    public Result itemDetail(@RequestHeader("token") String token, @PathVariable Integer itemId) {
        //mode是表示物品的发行方式
        ItemVO itemDetail = itemService.getItemDetail(token, itemId);
        return Result.success(itemDetail);
    }

    //展示用户发布的物品
    @GetMapping("/userItems")
    public Result userItems(@RequestHeader("token") String token, @RequestParam Integer mode) throws IllegalAccessException {
        List<Item> itemListResult = itemService.getUserItems(token, mode);
        return Result.success(itemListResult);
    }
}
