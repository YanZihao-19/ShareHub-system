package com.yzh.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yzh.common.utils.JwtUtils;
import com.yzh.mapper.ComplaintMapper;
import com.yzh.mapper.OrderMapper;
import com.yzh.mapper.UserMapper;
import com.yzh.pojo.Complaint;
import com.yzh.pojo.Identification;
import com.yzh.pojo.Notice;
import com.yzh.pojo.Order;
import com.yzh.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

/**
 * @Author: 燕子豪
 * @Date: 2024/5/8 17:08
 */
@Service
public class ComplaintServiceImpl implements ComplaintService {
    @Autowired
    private ComplaintMapper complaintMapper;
    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private UserMapper userMapper;

    @Override
    public void addOrderComplaint(String token, Complaint complaint) {
        //解析前端token,获取用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String userId1 = (String) itemUser.get("openId");
        //填充数据
        complaint.setUserId1(userId1);
        complaint.setCreateTime(LocalDateTime.now());
        complaint.setUpdateTime(LocalDateTime.now());
        //插入数据
        complaintMapper.insertOrderComplaint(complaint);
        //修改订单申诉状态
        orderMapper.changeIsComplaintStatus(complaint.getOrderId());
    }

    @Override
    public void addItemComplaint(String token, Complaint complaint) {
        //解析前端token,获取用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String userId1 = (String) itemUser.get("openId");
        //填充数据
        complaint.setUserId1(userId1);
        complaint.setCreateTime(LocalDateTime.now());
        complaint.setUpdateTime(LocalDateTime.now());
        //插入数据
        complaintMapper.insertItemComplaint(complaint);
        //修改物品举报处理状态（待处理）
        orderMapper.changeIsComplaintStatus(complaint.getOrderId());
    }

    @Override
    public PageInfo<Complaint> selectAll(Integer status, Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<Complaint> list = complaintMapper.selectAll(status);
        return PageInfo.of(list);
    }

    @Override
    public void handleComplaint(Integer id, String result) {
        LocalDateTime updateTime = LocalDateTime.now();
        complaintMapper.updateResult(id, result, updateTime);
    }

    @Override
    public Integer getComplaintDot(String token) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取需求用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");
            Integer count1 = complaintMapper.selectDotNum(openId);
            Integer count2 = complaintMapper.selectIdenDotNum(openId);
            return count1 + count2;
        }
        return 0;
    }

    @Override
    public List<Complaint> getComplaints(String token) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取需求用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");
            return complaintMapper.selectAllComplaints(openId);
        }
        return null;
    }

    @Override
    public void removeRedDot(Integer complaintId) {
        complaintMapper.changeComplaintFlag(complaintId);
    }

    @Override
    public void identificationHandle(String token, Identification identification) {
        //解析前端token,获取用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String openId = (String) itemUser.get("openId");
        //填充数据
        identification.setOpenid(openId);
        identification.setCreateTime(LocalDateTime.now());
        identification.setUpdateTime(LocalDateTime.now());
        identification.setStatus(0);
//        identification.setFlag(0);
        //插入数据
        complaintMapper.insertIdentification(identification);

    }

    @Override
    public PageInfo<Identification> selectIdenPage(Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<Identification> list = complaintMapper.selectIdenAll();
        return PageInfo.of(list);
    }

    @Override
    public void submitResult(Integer id, String openid, Integer status) {
        if (status == 1) {
            //申请通过则将用户的身份设置为二手回收商；
            userMapper.updateUserRole(openid);
        }
        LocalDateTime updateTime = LocalDateTime.now();
        complaintMapper.updateIdenResult(id, status, updateTime);
    }

    @Override
    public List<Identification> getIdentification(String token) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取需求用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");
            return complaintMapper.selectIdentification(openId);
        }
        return null;
    }

    @Override
    public void removeIdenDot(Integer identificationId) {
        complaintMapper.changeIdenFlag(identificationId);
    }
}
