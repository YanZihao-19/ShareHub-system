package com.yzh.service;


import com.yzh.pojo.User;

public interface IMemberLoginService {


    /**
     * 根据code，获取用户的openId
     * @param code
     * @return
     */
    public User getUserOpenId(String code);

}
