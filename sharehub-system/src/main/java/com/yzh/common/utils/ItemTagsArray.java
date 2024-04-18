package com.yzh.common.utils;

import com.yzh.pojo.Item;
import org.springframework.stereotype.Component;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/5 23:59
 */
@Component
public class ItemTagsArray {
    public static Integer[] getItemTagsArray(Item item) {
        //初始化默认值
        Integer[] res = new Integer[]{
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        };
        //1~13为类别，14~16为交易模式，17~19物品受众,20~23为物品损耗度，24~26为物品交付方式
        res[item.getTag() - 1] = 500;  //根据物品种类为物品标签赋值（类别中只有一个是100,其余都为0）

        res[13 + item.getTradeMode()] = 500; //根据物品交易方式为物品标签赋值（类别中只有一个是100,其余都为0）

        res[17 + item.getSuit()] = 500;//根据物品受众为物品标签赋值（类别中只有一个是100,其余都为0）

        res[20 + item.getUsageLevel()] = 500;//根据物品使用程度为物品标签赋值（类别中只有一个是100,其余都为0）

        res[24 + item.getDeliveryStyle()] = 500;//根据无交付方式为物品标签赋值（类别中只有一个是100,其余都为0）

        return res;
     }
}
