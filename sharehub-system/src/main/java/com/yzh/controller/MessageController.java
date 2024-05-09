package com.yzh.controller;

import com.yzh.mapper.ItemMapper;
import com.yzh.mapper.OrderMapper;
import java.util.*;
import com.yzh.pojo.Result;
import com.yzh.service.CommentService;
import com.yzh.service.ComplaintService;
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
    @Autowired
    private CommentService commentService;
    @Autowired
    private ComplaintService complaintService;

    //查询当前用户是否有订单信息、未读评论信息、未读通知信息
    @GetMapping("/getDotNum")
    public Result getOrderDot(@RequestHeader("token") String token) {
        List<Integer> dotNumList = new ArrayList<>();
        //获取评论红点
        Integer commentDot = commentService.getCommentDot(token);
        //获取订单红点
        Integer orderDot = orderService.getRedDot(token);
        //系统通知红点
        Integer informDot = complaintService.getComplaintDot(token);
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
    //用户查看系统通知后去除举报未读小红点
    @PutMapping("/removeComplaintDot/{complaintId}")
    public Result removeComplaintDot(@PathVariable Integer complaintId) {
        complaintService.removeRedDot(complaintId);
        return Result.success();
    }

    //去除资历验证未读小红点
    @PutMapping("/removeIdenDot/{identificationId}")
    public Result removeIdenDot(@PathVariable Integer identificationId) {
        complaintService.removeIdenDot(identificationId);
        return Result.success();
    }
}
