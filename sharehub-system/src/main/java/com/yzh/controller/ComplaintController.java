package com.yzh.controller;

import com.github.pagehelper.PageInfo;
import com.yzh.pojo.*;
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

    //添加物品举报
    @PostMapping("/itemComplaint")
    public Result addItemComplaint(@RequestHeader("token") String token, @RequestBody Complaint complaint) {
        complaintService.addItemComplaint(token, complaint);
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

    //获取指定用户所有申诉
    @GetMapping("/getComplaints")
    public Result getComplaints(@RequestHeader("token") String token) {
        List<Complaint> complaints = complaintService.getComplaints(token);
        return Result.success(complaints);
    }

    //资历审核审核
    @PostMapping("/identificationHandle")
    public Result identificationHandle(@RequestHeader("token") String token, @RequestBody Identification identification) {
        complaintService.identificationHandle(token, identification);
        return Result.success();
    }

    //展示所以资历验证
    @GetMapping("/selectIdenPage")
    public Result selectIdenPage(@RequestParam(defaultValue = "1") Integer pageNum,
                                 @RequestParam(defaultValue = "10") Integer pageSize) {
        PageInfo<Identification> list = complaintService.selectIdenPage(pageNum, pageSize);
        return Result.success(list);
    }

    //处理资历验证
    @GetMapping("/submitResult")
    public Result submitResult(@RequestParam Integer id, @RequestParam Integer status, @RequestParam String openid) {
        complaintService.submitResult(id, openid, status);
        return Result.success();
    }

    //    getIdentification
    //获取指定用户资历认证结果
    @GetMapping("/getIdentification")
    public Result getIdentification(@RequestHeader("token") String token) {
        List<Identification> identifications = complaintService.getIdentification(token);
        return Result.success(identifications);
    }
}
