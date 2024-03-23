package com.yzh.controller;

import com.yzh.mapper.ItemMapper;
import com.yzh.mapper.OrderMapper;
import java.util.*;
import com.yzh.pojo.Result;
import com.yzh.service.ItemService;
import com.yzh.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/23 10:17
 */
@Slf4j
@RestController
@RequestMapping("/msg")
public class MessageController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private ItemService itemService;

    //查询当前用户是否有订单信息、未读评论信息、未读通知信息
    @GetMapping("/getDotNum")
    public Result getOrderDot(@RequestHeader("token") String token) {
        List<Integer> dotNumList = new ArrayList<>();
        //待补充！！！！！！
        Integer commentDot = 0;
        Integer orderDot = orderService.getRedDot(token);
        //待补充！！！！！！
        Integer informDot = 0;
        //给list赋值
        dotNumList.add(commentDot);
        dotNumList.add(orderDot);
        dotNumList.add(informDot);
        //返回list
        return Result.success(dotNumList);
    }


    //用户查看订单后去除未读小红点
    @PutMapping("/removeRedDot/{orderId}")
    public Result removeRedDot(@PathVariable Integer orderId) {
        orderService.removeRedDot(orderId);
        return Result.success();
    }


}
