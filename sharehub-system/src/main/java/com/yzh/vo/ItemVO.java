package com.yzh.vo;

import java.util.*;
import com.yzh.pojo.Item;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/9 0:10
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemVO {
    //物品详情数据
    private Item item;
    //物品详情图
    private List<String> itemImages;
}
