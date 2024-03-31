package com.yzh.vo;

import com.yzh.pojo.Item;
import com.yzh.pojo.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/31 20:28
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemUserVO {
    //物品详情
    private ItemVO itemVO;
    //用户数据
    private User user;
    //物品是否被收藏(0未收藏，1已收藏)
    private Integer itemStatus;
}
