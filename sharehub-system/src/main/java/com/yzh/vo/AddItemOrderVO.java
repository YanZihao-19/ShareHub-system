package com.yzh.vo;

import com.yzh.pojo.Item;
import com.yzh.pojo.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/20 22:14
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddItemOrderVO {
    //物品详情数据
    private Order order;
    //物品详情图
    private Item item;
}
