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
    //微信接口返回的唯一标识
    private String openId;
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
    //用户的可共享数量
    private Integer shareNum;
    //用户资料背景图
    private String bgImage;
    //实名认证编号
    private Integer identifyId;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", openId='" + openId + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", gender=" + gender +
                ", credibility=" + credibility +
                ", phone='" + phone + '\'' +
                ", role=" + role +
                ", image='" + image + '\'' +
                ", shareNum=" + shareNum +
                ", bgImage='" + bgImage + '\'' +
                ", identifyId=" + identifyId +
                '}';
    }

    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Short getGender() {
        return gender;
    }

    public void setGender(Short gender) {
        this.gender = gender;
    }

    public Short getCredibility() {
        return credibility;
    }

    public void setCredibility(Short credibility) {
        this.credibility = credibility;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Short getRole() {
        return role;
    }

    public void setRole(Short role) {
        this.role = role;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getShareNum() {
        return shareNum;
    }

    public void setShareNum(Integer shareNum) {
        this.shareNum = shareNum;
    }

    public String getBgImage() {
        return bgImage;
    }

    public void setBgImage(String bgImage) {
        this.bgImage = bgImage;
    }

    public Integer getIdentifyId() {
        return identifyId;
    }

    public void setIdentifyId(Integer identifyId) {
        this.identifyId = identifyId;
    }
}
