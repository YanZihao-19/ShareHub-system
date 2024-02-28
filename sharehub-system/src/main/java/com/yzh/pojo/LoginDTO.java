package com.yzh.pojo;

import lombok.Data;

import java.io.Serializable;


/**
 * @Author: 燕子豪
 * @Date: 2024/2/28 11:19
 */
@Data
public class LoginDTO implements Serializable {
    //微信登录接口的临时凭证参数
    private String code;

}
