package com.yzh.controller;

import com.yzh.pojo.Item;
import com.yzh.pojo.Order;
import com.yzh.pojo.Result;
import com.yzh.service.OrderService;
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
}
