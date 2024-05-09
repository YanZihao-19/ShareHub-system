package com.yzh.mapper;

import com.yzh.pojo.Complaint;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/5/8 17:12
 */
@Mapper
public interface ComplaintMapper {
    @Insert("INSERT INTO complaint (userId1, userId2, orderId, reason, image, status, update_time, create_time) " +
            "VALUES (#{userId1}, #{userId2}, #{orderId}, #{reason},#{image}, #{status},#{updateTime},#{createTime})")
    void insertOrderComplaint(Complaint complaint);

    @Select("SELECT * FROM complaint WHERE status = #{status}")
    List<Complaint> selectAll(Integer status);

    @Update("UPDATE complaint SET result = #{result}, flag = 0 WHERE id = #{id}")
    void updateResult(Integer id, String result);

    @Select("SELECT count(*) FROM complaint WHERE (userId1 = #{openId} OR userId2 = #{openId}) AND flag = 0 AND result IS NOT NULL")
    Integer selectDotNum(String openId);
}
