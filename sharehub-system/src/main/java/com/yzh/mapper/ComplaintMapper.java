package com.yzh.mapper;

import com.yzh.pojo.Complaint;
import com.yzh.pojo.Identification;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.time.LocalDateTime;
import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/8 17:12
 */
@Mapper
public interface ComplaintMapper {
    @Insert("INSERT INTO complaint (userId1, userId2, orderId, reason, image, status, update_time, create_time) " +
            "VALUES (#{userId1}, #{userId2}, #{orderId}, #{reason},#{image}, #{status},#{updateTime},#{createTime})")
    void insertOrderComplaint(Complaint complaint);

    @Insert("INSERT INTO complaint (userId1, itemId, reason, image, status, update_time, create_time) " +
            "VALUES (#{userId1}, #{itemId},  #{reason},#{image}, #{status},#{updateTime},#{createTime})")
    void insertItemComplaint(Complaint complaint);

    @Select("SELECT * FROM complaint WHERE status = #{status}")
    List<Complaint> selectAll(Integer status);

    @Update("UPDATE complaint SET result = #{result}, flag = 0 ,update_time = #{updateTime} WHERE id = #{id}")
    void updateResult(Integer id, String result, LocalDateTime updateTime);

    @Select("SELECT count(*) FROM complaint WHERE (userId1 = #{openId} OR userId2 = #{openId}) AND flag = 0 AND result IS NOT NULL")
    Integer selectDotNum(String openId);

    @Select("SELECT count(*) FROM identification WHERE openId = #{openId} AND flag = 0")
    Integer selectIdenDotNum(String openId);

    @Select("SELECT * FROM complaint WHERE userId1 = #{openId} AND result is not null")
    List<Complaint> selectAllComplaints(String openId);

    @Update("UPDATE complaint SET flag = 1 where id = #{complaintId}")
    void changeComplaintFlag(Integer complaintId);

    @Insert("INSERT INTO identification (openid, code, corporateName, belong, image, status, flag, update_time, create_time) values " +
            "(#{openid}, #{code}, #{corporateName}, #{belong},#{image}, #{status},#{flag},#{updateTime},#{createTime}) ")
    void insertIdentification(Identification identification);

    @Select("SELECT * FROM identification")
    List<Identification> selectIdenAll();

    @Update("UPDATE identification SET status = #{status}, flag = 0 ,update_time = #{updateTime} WHERE id = #{id}")
    void updateIdenResult(Integer id, Integer status, LocalDateTime updateTime);

    @Select("SELECT * FROM identification WHERE openid = #{openId} AND status != 0")
    List<Identification> selectIdentification(String openId);

    @Update("UPDATE identification SET flag = 1 where id = #{identificationId}")
    void changeIdenFlag(Integer identificationId);
}
