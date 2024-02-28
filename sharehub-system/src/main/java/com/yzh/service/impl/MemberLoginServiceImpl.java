package com.yzh.service.impl;

import cn.hutool.http.HttpUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.yzh.mapper.UserMapper;
import com.yzh.pojo.User;
import com.yzh.service.IMemberLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MemberLoginServiceImpl implements IMemberLoginService {
    @Autowired
    UserMapper userMapper;

    @Value("${wx.appId}")
    private String appId;

    @Value("${wx.secret}")
    private String secret;

    @Override
    public User getUserOpenId(String code) {
        //请求openId的请求路径
        String authUrl = "https://api.weixin.qq.com/sns/jscode2session?grant_type=authorization_code";
        //拼接请求路径参数
        authUrl = authUrl + "&appid=" + appId + "&secret=" + secret + "&js_code=" + code;
        //发起请求并接收openId
        String result = HttpUtil.get(authUrl);
        //转为Json格式
        JSONObject jsonObject = JSONUtil.parseObj(result);
        System.out.println(jsonObject);
        String openId = jsonObject.getStr("openid");
        // 去数据库中查询openID
        User user = userMapper.selectOpenId(openId);
        //若查询不到则进行用户注册，即新增用户user,若查询到了，则返回user
        if (user == null) {
            user = new User();
            //赋值openId
            user.setOpenId(openId);
            //给信誉分和认证属性赋默认值
            if (user.getCredibility() == null) {
                user.setCredibility(Short.parseShort("5"));
            }
            if (user.getIdentifyId() == null) {
                user.setCredibility(Short.parseShort("0"));
            }
            //初始换角色身份
            user.setRole((short) 1);
            //初始化创建、更新时间
            user.setUpdateTime(LocalDateTime.now());
            user.setCreateTime(LocalDateTime.now());
            //初始化默认头像
            user.setImage("http://web-showhub.oss-cn-beijing.aliyuncs.com/users/default.jpg");
            //初始化用户名,"wxUser_"开头并且拼接openId的后7位
            user.setUsername("wxUser_" + openId.substring(openId.length() - 7));
            userMapper.insertUserOpenId(user);
        }
        return user;
    }
}
