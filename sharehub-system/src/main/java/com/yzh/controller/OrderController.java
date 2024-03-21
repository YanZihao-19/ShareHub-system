package com.yzh.controller;

import java.util.*;

import com.yzh.pojo.Order;
import com.yzh.pojo.Result;
import com.yzh.service.ItemService;
import com.yzh.service.OrderService;
import com.yzh.vo.AddItemOrderVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/08 11:04
 */
@Slf4j
@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private ItemService itemService;

    //新增免费共享订单
    @PostMapping("/newOrder")
    public Result addItem(@RequestHeader("token") String token, @RequestParam Integer mode, @RequestBody Order order) {
        try {
            orderService.addOrder0(token, mode, order);
        } catch (Exception e) {
            // 异常处理
            return Result.error("您已经提交过申领了，请耐心等待！");
        }

        return Result.success();
    }


    //申请易物物品
    @PostMapping("/addOrder")
    public Result addItemOrder(@RequestHeader("token") String token, @RequestBody AddItemOrderVO addItemOrderVO) {
        //flag为0是自主上传的一方,flag为1时，表明是用户是申请易物的一方
        Integer result = itemService.addItemOrder(addItemOrderVO.getItem(), addItemOrderVO.getOrder(), token);
        if (result == 1) {
            return Result.success();
        }
        return Result.error("您已经申请过了~");
    }


    //获取待处理订单列表(包括有类型)
    @GetMapping("/getOrders")
    public Result getAllOrders(@RequestHeader("token") String token, @RequestParam Integer status) {
        List<Order> orderList = orderService.getAllOrders(token, status);
        return Result.success(orderList);
    }


    //获取已完成订单列表
}
