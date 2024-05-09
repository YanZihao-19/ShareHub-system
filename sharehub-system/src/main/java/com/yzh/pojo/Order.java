package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/19 15:47
 */
@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order extends AbstractEntity {
    private Integer itemId; //订单对应物品id
    private String holderUid; //物品所有者id
    private String needUid; //物品所需者id
    private String reason; //申请理由
    private String contact; //联系方式
    private Integer mode; //物品交易模式
    private Integer status; //订单状态
    private Integer isComplaint; //是否已经申诉
    private Integer otherItemId; //另一个物品id(只针对以物换物生效)
    private String image; //订单图片
    private Integer noticeStatus; //订单是否已经被拥有者查看
    private Integer hScore; //所有者订单打分
    private Integer nScore; //需求者订单打分

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", itemId=" + itemId +
                ", holderUid='" + holderUid + '\'' +
                ", needUid='" + needUid + '\'' +
                ", reason='" + reason + '\'' +
                ", contact='" + contact + '\'' +
                ", mode=" + mode +
                ", status=" + status +
                ", isComplaint=" + isComplaint +
                ", otherItemId=" + otherItemId +
                ", image='" + image + '\'' +
                ", noticeStatus=" + noticeStatus +
                ", hScore=" + hScore +
                ", nScore=" + nScore +
                '}';
    }
}
