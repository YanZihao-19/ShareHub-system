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
    private String itemName;
    //物品描述
    private String description;
    //物品状态（0可租借，1已租借，2已下架）
    private Short status;
    //租借/出售价格（共享的话默认为0）
    private Integer rentalFee;
    //租借/共享押金
    private Integer deposit;
    //物品所属用户ID（外键对应user表id）
    private Integer ownerUid;
    //物品图片url
    private String image;

}
