package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/5/8 16:59
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Complaint extends AbstractEntity {
    //申诉提交者id
    private String userId1;
    //被申诉者id
    private String userId2;
    //申诉订单orderId
    private Integer orderId;
    //申诉理由
    private String reason;
    //举报物品id
    private Integer itemId;
    //申诉或举报图片证明
    private String image;
    //申诉或举报状态
    private Integer status;
    //申诉或举报结果
    private String result;
}
