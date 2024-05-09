package com.yzh.service;

import com.github.pagehelper.PageInfo;
import com.yzh.pojo.Complaint;
import com.yzh.pojo.Notice;
import com.yzh.vo.UserCommentVO;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/5/8 17:07
 */
public interface ComplaintService {

    //新增订单申诉
    void addOrderComplaint(String token, Complaint complaint);

    PageInfo<Complaint> selectAll(Integer status, Integer pageNum, Integer pageSize);

    void handleComplaint(Integer id, String result);

    Integer getComplaintDot(String token);
}
