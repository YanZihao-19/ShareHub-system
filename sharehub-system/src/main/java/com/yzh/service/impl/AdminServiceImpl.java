package com.yzh.service.impl;

import com.yzh.pojo.Account;
import com.yzh.mapper.AdminMapper;
import com.yzh.service.AdminService;
import com.yzh.utils.JwtUtils;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * 管理员业务处理
 **/
@Service
public class AdminServiceImpl implements AdminService {

    @Resource
    private AdminMapper adminMapper;

    /**
     * 登录
     */
    public Account login(Account account) {
        Account dbAdmin = adminMapper.selectByUsername(account.getUsername());

        // 生成token
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", account.getUsername());
        claims.put("password", account.getPassword());

        String token = JwtUtils.generateJwt(claims);
        dbAdmin.setToken(token);
        return dbAdmin;
    }


}