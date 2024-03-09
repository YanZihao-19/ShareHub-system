package com.yzh.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


/**
 * @Author: 燕子豪
 * @Date: 2024/2/28 11:19
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginVO implements Serializable {
    //微信登录接口的临时凭证参数
    private String code;

}
