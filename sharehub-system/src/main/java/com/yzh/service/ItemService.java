package com.yzh.service;

import com.yzh.pojo.Item;
import com.yzh.vo.ItemVO;

import java.util.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/23 23:46
 */
public interface ItemService {

    /**
     * 新增物品
     *
     * @param item
     */
    void addItem(Item item);

    /**
     * 获取物品列表
     *
     * @param mode
     */
    List<Item> getItemList(String token, List<Item> itemList, Integer mode, Integer tag) throws IllegalAccessException;

    /**
     * 获取物品详情
     *
     * @param itemId
     */
    ItemVO getItemDetail(String token, Integer itemId);

    /**
     * 获取用户发布的物品
     *
     * @param mode
     */
    List<Item> getUserItems(String token, Integer mode);
}
