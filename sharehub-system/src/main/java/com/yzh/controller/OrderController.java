package com.yzh.controller;

import java.util.*;

import com.yzh.pojo.Order;
import com.yzh.pojo.Result;
import com.yzh.service.ItemService;
import com.yzh.service.OrderService;
import com.yzh.vo.ItemOrderVO;
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
    public Result addItemOrder(@RequestHeader("token") String token, @RequestBody ItemOrderVO itemOrderVO) {
        //flag为0是自主上传的一方,flag为1时，表明是用户是申请易物的一方
        Integer result = orderService.addItemOrder(itemOrderVO.getItem(), itemOrderVO.getOrder(), token);
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

    //完成订单
    @PostMapping("/finishOrder")
    public Result finishOrder(@RequestHeader("token") String token, @RequestBody Order order) {
        System.out.println("前端获取到的order" + order);
        try {
            orderService.finishOrder(token, order);
        } catch (Exception e) {
            // 异常处理
            return Result.error("出现异常！");
        }
        return Result.success();
    }

    //拒绝订单
    @PostMapping("/refuseOrder")
    public Result refuseOrder(@RequestHeader("token") String token, @RequestBody Order order) {
        System.out.println("前端获取到的order" + order);
        try {
            orderService.refuseOrder(token, order);
        } catch (Exception e) {
            // 异常处理
            return Result.error("出现异常！");
        }
        return Result.success();
    }

    //获取我的共享(即为order中的h_uid和status为1)
    @GetMapping("/getShareOrders")
    public Result getShareOrders(@RequestHeader("token") String token, @RequestParam Integer hScore) {
        List<ItemOrderVO> ItemOrderVOList = orderService.getShareOrders(token, hScore);
        System.out.println("发送给前端的list" + ItemOrderVOList);
        return Result.success(ItemOrderVOList);
    }

    //获取我的收到(即为order中的n_uid和status为1)
    @GetMapping("/getReceiveOrders")
    public Result getReceiveOrders(@RequestHeader("token") String token, @RequestParam Integer nScore) {
        List<ItemOrderVO> ItemOrderVOList = orderService.getReceiveOrders(token, nScore);
        System.out.println("发送给前端的list" + ItemOrderVOList);
        return Result.success(ItemOrderVOList);
    }

    //分享者给订单打分hScore
    @PutMapping("/sethScore")
    public Result sethScore(@RequestHeader("token") String token, @RequestParam Integer hScore, Integer orderId) {
        orderService.sethScore(token, hScore, orderId);
        return Result.success();
    }

    //享用者给订单打分nScore
    @PutMapping("/setnScore")
    public Result setnScore(@RequestHeader("token") String token, @RequestParam Integer nScore, Integer orderId) {
        orderService.setnScore(token, nScore, orderId);

        return Result.success();
    }

}
