package com.yzh.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yzh.pojo.User;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/13 23:13
 */
public interface ManageUserService {
    /**
     * 新增
     */
    void add(User user);

    /**
     * 删除
     */
    void deleteById(Integer id);

    /**
     * 批量删除
     */
    void deleteBatch(List<Integer> ids);

    /**
     * 修改
     */
    void updateById(User user);

    /**
     * 根据ID查询
     */
    User selectById(Integer id);

    /**
     * 查询所有
     */
    List<User> selectAll(User user);

    /**
     * 分页查询
     */
    PageInfo<User> selectPage(User user, Integer pageNum, Integer pageSize);
}
