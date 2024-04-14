package com.yzh.service.impl;

import com.yzh.mapper.ManageUserMapper;
import com.yzh.pojo.User;
import com.yzh.mapper.UserMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import com.yzh.service.ManageUserService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * 用户表业务处理
 **/
@Service
public class ManageUserServiceImpl implements ManageUserService {

    @Resource
    private ManageUserMapper manageUserMapper;

    /**
     * 新增
     */
    public void add(User user) {
        manageUserMapper.insert(user);
    }

    /**
     * 删除
     */
    public void deleteById(Integer id) {
        manageUserMapper.deleteById(id);
    }

    /**
     * 批量删除
     */
    public void deleteBatch(List<Integer> ids) {
        for (Integer id : ids) {
            manageUserMapper.deleteById(id);
        }
    }

    /**
     * 修改
     */
    public void updateById(User user) {
        manageUserMapper.updateById(user);
    }

    /**
     * 根据ID查询
     */
    public User selectById(Integer id) {
        return manageUserMapper.selectById(id);
    }

    /**
     * 查询所有
     */
    public List<User> selectAll(User user) {
        return manageUserMapper.selectAll(user);
    }

    /**
     * 分页查询
     */
    public PageInfo<User> selectPage(User user, Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<User> list = manageUserMapper.selectAll(user);
        return PageInfo.of(list);
    }

}