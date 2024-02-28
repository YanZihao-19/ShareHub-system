package com.yzh.mapper;

import com.yzh.pojo.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 16:16
 */
@Mapper
public interface UserMapper {

    List<User> getUserList(String name, Short gender, Short role, Integer credibility);

    @Insert("insert into user (username, password, role, image, phone, credibility, gender, create_time, update_time, identifyid) values" +
            " (#{username},#{password},#{role},#{image},#{phone},#{credibility},#{gender},#{createTime},#{updateTime},#{identifyId})")
    void insertUser(User user);

    @Select("select * from user where id = #{id}")
    User selectById(Integer id);

    void updateUser(User user);

    void delUser(List<Integer> ids);

    @Select("select * from user where role = 0 and username= #{username} and password = #{password}")
    User selectUserByUsernameAndPassword(User user);

    @Select("select * from user where role in(1,2) and username= #{username} and password = #{password}")
    User selectUserByUsernameAndPassword2(User user);

    @Select("Select * from user where openid = #{openId}")
    User selectOpenId(String openId);

    @Insert("insert into user (openid,username, password, role, image, phone, credibility, gender, create_time, update_time, identifyid) values" +
            " (#{openId},#{username},#{password},#{role},#{image},#{phone},#{credibility},#{gender},#{createTime},#{updateTime},#{identifyId})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insertUserOpenId(User user);
}
