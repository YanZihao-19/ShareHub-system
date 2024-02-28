package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 14:24
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Item extends AbstractEntity {
    //物品名称
    private String itemTitle;
    //物品描述
    private String itemDesc;
    //物品标签(种类)
    private Short tag;
    //物品交易模式(共享/换物/二手)
    private Short tradeMode;
    //物品状态（0可租借，1已租借，2已下架）
    private Short status;
    //物品所属用户ID（外键对应user表openId）
    private String ownerUid;
    //租借/出售价格（共享的话默认为0）
    private Integer sellPrice;
    //物品原价
    private Integer originalPrice;
    //物品上传的图片(使用OSS存储)
    private String[] imgList;
    //物品磨损度
    private Short usageLevel;
    //物品地址
    private String address;
    //交易方式(自提/面交/快递)
    private Short deliveryStyle;
    //租借/共享押金
    private Integer deposit;
}
