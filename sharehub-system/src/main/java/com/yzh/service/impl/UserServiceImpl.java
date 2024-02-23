package com.yzh.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.yzh.mapper.UserMapper;
import com.yzh.pojo.PageBean;
import com.yzh.pojo.User;
import com.yzh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 16:10
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public PageBean pageBean(Integer page, Integer pageSize, String name, Short gender, Short role, Integer credibility) {
        // 使用PageHelper进行分页，设置当前页数和每页大小
        PageHelper.startPage(page, pageSize);
        // 调用userMapper的getUserList方法查询用户列表
        List<User> list = userMapper.getUserList(name, gender, role, credibility);
        // 将Page对象的总数和结果封装到PageBean对象并返回
        Page<User> p = (Page<User>) list;
        return new PageBean(p.getTotal(), p.getResult());
    }

    @Override
    public void addUser(User user) {
        //给信誉分和认证属性赋默认值
        if (user.getCredibility() == null) {
            user.setCredibility(Short.parseShort("5"));
        }
        if (user.getIdentifyId() == null) {
            user.setCredibility(Short.parseShort("0"));
        }
        //给时间属性赋值
        user.setCreateTime(LocalDateTime.now());
        user.setUpdateTime(LocalDateTime.now());
        userMapper.insertUser(user);
    }

    @Override
    public User selectById(Integer id) {
        return userMapper.selectById(id);
    }

    @Override
    public void updateUser(User user) {
        //给信誉分和认证属性赋默认值
        if (user.getCredibility() == null) {
            user.setCredibility(Short.parseShort("5"));
        }
        if (user.getIdentifyId() == null) {
            user.setCredibility(Short.parseShort("0"));
        }
        user.setUpdateTime(LocalDateTime.now());
        userMapper.updateUser(user);
    }

    @Override
    public void delUser(List<Integer> ids) {
        userMapper.delUser(ids);
    }

    @Override
    public User login(User user) {
        return userMapper.selectUserByUsernameAndPassword(user);
    }

    @Override
    public User loginUser(User user) {
        return userMapper.selectUserByUsernameAndPassword2(user);
    }
}
