package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/5 0:08
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserTagsScore {
    //物品类别
    private Integer id;
    private String uid;
    private Integer electProduct;
    private Integer beauty;
    private Integer book;
    private Integer digital;
    private Integer household;
    private Integer toy;
    private Integer petSup;
    private Integer menSwear;
    private Integer womenSwear;
    private Integer motherAndBaby;
    private Integer sport;
    private Integer appliance;
    private Integer furniture;
    private Integer other;
    //物品交易模式
    private Integer share;
    private Integer exchange;
    private Integer trade;
    //物品受众
    private Integer allAge;
    private Integer child;
    private Integer adult;
    private Integer old;
    //物品损耗度
    private Integer anew;
    private Integer nnNew;
    private Integer nfNew;
    private Integer efNew;
    //物品交付方式
    private Integer selfPick;
    private Integer handDeliver;
    private Integer post;

}



