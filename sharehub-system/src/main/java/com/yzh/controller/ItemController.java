package com.yzh.controller;

import com.yzh.pojo.Item;

import java.util.*;

import com.yzh.pojo.Result;
import com.yzh.service.ItemService;
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
        System.out.println("获取item的suit" + item.getSuit());
        itemService.addItem(item);
        return Result.success();
    }

    //展示小程序注意(推荐)物品
    @GetMapping
    public Result itemList(@RequestHeader("token") String token, @RequestParam Integer mode, @RequestParam Integer tap) throws IllegalAccessException {
//        System.out.println(tap);
        List<Item> itemList = itemService.getItemList(token, mode, tap);
        return Result.success(itemList);
    }

    //展示小程序注意(推荐)物品
    @GetMapping("/{itemId}")
    public Result itemDetail(@RequestHeader("token") String token, @PathVariable Integer itemId) {
        //mode是表示物品的发行方式
//        System.out.println(itemId);
        ItemVO itemDetail = itemService.getItemDetail(token, itemId);
        return Result.success(itemDetail);
    }


}
