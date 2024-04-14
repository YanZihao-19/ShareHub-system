package com.yzh.mapper;

import com.yzh.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import java.util.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/13 23:17
 */
@Mapper
public interface ManageUserMapper {
    /**
     * 新增
     */
    int insert(User user);

    /**
     * 删除
     */
    int deleteById(Integer id);

    /**
     * 修改
     */
    int updateById(User user);

    /**
     * 根据ID查询
     */
    User selectById(Integer id);

    /**
     * 查询所有
     */
    List<User> selectAll(User user);

}
