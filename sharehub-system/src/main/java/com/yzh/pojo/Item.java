package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Arrays;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 14:24
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Item extends AbstractEntity {
    //物品首页图
    private String image;
    //物品名称
    private String itemTitle;
    //物品描述
    private String itemDesc;
    //物品标签(种类)
    private Integer tag;
    //物品交易模式(共享/换物/二手)
    private Integer tradeMode;
    //物品状态（0可租借，1已租借，2已下架）
    private Integer status;
    //适合人群：0任意、1儿童、2成人、3老年人
    private Integer suit;
    //物品所有者id
    private String ownerUid;
    //租借/出售价格（共享的话默认为0）
    private BigDecimal sellPrice;
    //物品原价
    private BigDecimal originalPrice;
    //物品上传的图片(使用OSS存储)
    private String[] imgList;
    //物品磨损度
    private Integer usageLevel;
    //物品地址
    private String address;
    //交易方式(自提/面交/快递)
    private Integer deliveryStyle;
    //以物换物标识，0表示主动上传的一方，1表示申请易物的一方
    private Integer pageFlag;


    @Override
    public String toString() {
        return "Item{" +
                "image='" + image + '\'' +
                ", itemTitle='" + itemTitle + '\'' +
                ", itemDesc='" + itemDesc + '\'' +
                ", tag=" + tag +
                ", tradeMode=" + tradeMode +
                ", status=" + status +
                ", suit=" + suit +
                ", ownerUid='" + ownerUid + '\'' +
                ", sellPrice=" + sellPrice +
                ", originalPrice=" + originalPrice +
                ", imgList=" + Arrays.toString(imgList) +
                ", usageLevel=" + usageLevel +
                ", address='" + address + '\'' +
                ", deliveryStyle=" + deliveryStyle +
                ", pageFlag=" + pageFlag +
                '}';
    }
}
