package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 14:15
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User extends AbstractEntity {
    //用户名
    private String username;
    //密码
    private String password;
    //性别
    private Short gender;
    //信誉
    private Short credibility;
    //手机号码
    private String phone;
    //用户类型
    private Short role;
    //图像url
    private String image;
    //实名认证编号
    private Integer identifyId;
}
