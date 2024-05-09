package com.yzh.service;

import com.github.pagehelper.PageInfo;
import com.yzh.pojo.Complaint;
import com.yzh.pojo.Identification;
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

    /**
     * 新增物品举报
     *
     * @return
     */
    void addItemComplaint(String token, Complaint complaint);

    PageInfo<Complaint> selectAll(Integer status, Integer pageNum, Integer pageSize);

    void handleComplaint(Integer id, String result);

    Integer getComplaintDot(String token);

    List<Complaint> getComplaints(String token);

    /**
     * 用户查看通知后去除红点
     *
     * @return
     */
    void removeRedDot(Integer complaintId);

    /**
     * 提交资历验证
     *
     * @return
     */
    void identificationHandle(String token, Identification identification);

    /**
     * 查询所有资历验证
     *
     * @return
     */
    PageInfo<Identification> selectIdenPage(Integer pageNum, Integer pageSize);

    /**
     * 处理资历验证
     *
     * @return
     */
    void submitResult(Integer id,String openid, Integer status);

    /**
     * 获取指定用户的资历认证信息
     *
     * @return
     */
    List<Identification> getIdentification(String token);

    /**
     * 去除资历验证未读小红点
     *
     * @return
     */
    void removeIdenDot(Integer identificationId);
}
