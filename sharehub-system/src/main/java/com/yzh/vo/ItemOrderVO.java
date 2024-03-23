package com.yzh.vo;

import com.yzh.pojo.Item;
import com.yzh.pojo.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/20 22:14
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemOrderVO {
    //订单数据
    private Order order;
    //物品详情
    private Item item;
}
