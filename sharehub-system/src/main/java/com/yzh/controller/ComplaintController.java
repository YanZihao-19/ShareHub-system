package com.yzh.controller;

import com.github.pagehelper.PageInfo;
import com.yzh.pojo.Comment;
import com.yzh.pojo.Complaint;
import com.yzh.pojo.Notice;
import com.yzh.pojo.Result;
import com.yzh.service.CommentService;
import com.yzh.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/5/8 16:56
 */
@RestController
@RequestMapping("/complaint")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    //添加订单申诉
    @PostMapping("/orderComplaint")
    public Result addOrderComplaint(@RequestHeader("token") String token, @RequestBody Complaint complaint) {
        complaintService.addOrderComplaint(token, complaint);
        return Result.success();
    }

    //展示所以订单申诉
    @GetMapping("/selectPage")
    public Result selectAll(@RequestParam Integer status,
                            @RequestParam(defaultValue = "1") Integer pageNum,
                            @RequestParam(defaultValue = "10") Integer pageSize) {
        PageInfo<Complaint> list = complaintService.selectAll(status, pageNum, pageSize);
        return Result.success(list);
    }

    //处理订单申诉
    @GetMapping("/handleComplaint")
    public Result handleComplaint(@RequestParam Integer id, @RequestParam String result) {
        complaintService.handleComplaint(id, result);
        return Result.success();
    }

}
