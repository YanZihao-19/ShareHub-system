package com.yzh.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yzh.common.utils.JwtUtils;
import com.yzh.mapper.ComplaintMapper;
import com.yzh.mapper.OrderMapper;
import com.yzh.pojo.Complaint;
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
    public PageInfo<Complaint> selectAll(Integer status, Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<Complaint> list = complaintMapper.selectAll(status);
        return PageInfo.of(list);
    }

    @Override
    public void handleComplaint(Integer id, String result) {
        complaintMapper.updateResult(id, result);
    }

    @Override
    public Integer getComplaintDot(String token) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取需求用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");

            return complaintMapper.selectDotNum(openId);
        }
        return 0;
    }
}
