package com.yzh.service;

import com.yzh.pojo.PageBean;
import com.yzh.pojo.User;
import java.util.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 16:09
 */
public interface UserService {
    /**
     * 返回pageBean,包括查询列表以及查询总数
     */
    PageBean pageBean(Integer page, Integer pageSize, String name, Short gender, Short role, Integer credibility);

    /**
     * 插入用户
     */
    void addUser(User user);

    /**
     * 插入用户
     */
    User selectById(Integer id);

    /**
     * 更新用户
     */
    void updateUser(User user);

    /**
     * 删除用户
     */
    void delUser(List<Integer> ids);

    /**
     * 管理员用户登录
     */
    User login(User user);

    /**
     * 普通员用户登录
     */
    User loginUser(User user);
}
