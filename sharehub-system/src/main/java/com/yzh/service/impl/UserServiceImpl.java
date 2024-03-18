package com.yzh.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.yzh.mapper.UserMapper;
import com.yzh.pojo.PageBean;
import com.yzh.pojo.User;
import com.yzh.pojo.UserTagsScore;
import com.yzh.service.UserService;
import com.yzh.utils.JwtUtils;
import com.yzh.vo.PreferenceVO;
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
        //初始化，用户共享数量
        user.setShareNum(3);
        //给用户头像和背景设置默认图
        user.setImage("http://web-showhub.oss-cn-beijing.aliyuncs.com/users/5a2ca45d-85f3-48a6-86a7-4eb69ba9dce2.jpg");
        user.setBgImage("http://web-showhub.oss-cn-beijing.aliyuncs.com/common/userBackground.png");
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
    public User selectOpenId(String openId) {
        return userMapper.selectOpenId(openId);
    }

    @Override
    public User selectByOpenId(String openId) {
        return userMapper.selectOpenId(openId);
    }

    @Override
    public Integer getTagsPrefer(String openId) {
        return userMapper.selectTagsPreferId(openId);
    }

    @Override
    public Integer initUserPreference(String token, PreferenceVO preferenceVO) {
        UserTagsScore userTagsScore = new UserTagsScore(null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        //解析前端token,获取用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String openId = (String) itemUser.get("openId");
        userTagsScore.setUid(openId);

        if (preferenceVO.getTagList() != null) {
            //给用户所偏好的物品标签赋值(注意是从0开始，按照前端的约定来)
            for (Integer i : preferenceVO.getTagList()) {
                switch (i) {
                    case 0 -> userTagsScore.setElectProduct(30);
                    case 1 -> userTagsScore.setBeauty(30);
                    case 2 -> userTagsScore.setBook(30);
                    case 3 -> userTagsScore.setDigital(30);
                    case 4 -> userTagsScore.setHousehold(30);
                    case 5 -> userTagsScore.setToy(30);
                    case 6 -> userTagsScore.setPetSup(30);
                    case 7 -> userTagsScore.setMenSwear(30);
                    case 8 -> userTagsScore.setWomenSwear(30);
                    case 9 -> userTagsScore.setMotherAndBaby(30);
                    case 10 -> userTagsScore.setSport(30);
                    case 11 -> userTagsScore.setAppliance(30);
                    case 12 -> userTagsScore.setFurniture(30);
                    case 13 -> userTagsScore.setOther(30);
                    default -> throw new IllegalArgumentException("Invalid value: " + i);
                }
            }
        }
        if (preferenceVO.getModeList() != null) {
            //给用户所偏好的物品交易模式赋值
            for (Integer i : preferenceVO.getModeList()) {
                switch (i) {
                    case 0 -> userTagsScore.setShare(50);
                    case 1 -> userTagsScore.setExchange(50);
                    case 2 -> userTagsScore.setTrade(50);
                    default -> throw new IllegalArgumentException("Invalid value: " + i);
                }
            }
        }
        if (preferenceVO.getDeliveryList() != null) {
            //给用户倾向的交付方式赋值
            for (Integer i : preferenceVO.getDeliveryList()) {
                switch (i) {
                    case 0 -> {
                        userTagsScore.setSelfPick(10);
                        userTagsScore.setHandDeliver(10);
                        userTagsScore.setPost(10);
                    }
                    case 1 -> userTagsScore.setSelfPick(20);
                    case 2 -> userTagsScore.setHandDeliver(20);
                    case 3 -> userTagsScore.setPost(20);
                    default -> throw new IllegalArgumentException("Invalid value: " + i);
                }
            }
        }
        if (preferenceVO.getUsageList() != null) {
            //给用户能接受的物品损耗度赋值
            for (Integer i : preferenceVO.getUsageList()) {
                switch (i) {
                    case 0 -> userTagsScore.setAnew(3);
                    case 1 -> userTagsScore.setNnNew(3);
                    case 2 -> userTagsScore.setNfNew(3);
                    case 3, 4 -> userTagsScore.setEfNew(3);
                    case 5 -> {
                        userTagsScore.setAnew(1);
                        userTagsScore.setNnNew(1);
                        userTagsScore.setNfNew(1);
                        userTagsScore.setEfNew(1);
                    }
                    default -> throw new IllegalArgumentException("Invalid value: " + i);
                }
            }
        }
        if (preferenceVO.getSuitList() != null) {
            //给用户的年龄段赋值
            for (Integer i : preferenceVO.getSuitList()) {
                switch (i) {
                    case 0 -> userTagsScore.setAllAge(30);
                    case 1 -> userTagsScore.setChild(30);
                    case 2 -> userTagsScore.setAdult(30);
                    case 3 -> userTagsScore.setOld(30);
                    default -> throw new IllegalArgumentException("Invalid value: " + i);
                }
            }
        }
        System.out.println("用户初始偏好值:" + userTagsScore);
        return userMapper.insertUserPreference(userTagsScore);
    }

    @Override
    public User selectByToken(String token) {
        //解析前端token,获取用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String openId = (String) itemUser.get("openId");

        return userMapper.selectOpenId(openId);
    }
}
