package com.yzh.service;

import com.yzh.pojo.Item;
import com.yzh.pojo.Order;
import com.yzh.vo.ItemUserVO;
import com.yzh.vo.ItemVO;
import org.aspectj.weaver.ast.Or;

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
    List<Item> getItemList(String token, List<Item> itemList, Integer mode, Integer tag, Integer itemId) throws IllegalAccessException;

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

    /**
     * 根据关键词模糊查询所有物品
     *
     * @param token
     * @param mode
     * @param keywords
     * @return
     */
    List<Item> searchItems(String token, Integer mode, String keywords);

    /**
     * 用户收藏物品
     *
     * @param token
     * @param itemId
     */
    void collectItem(String token, Integer itemId);

    /**
     * 判断物品是否已经收藏
     *
     * @param token
     * @param itemId
     */
    Integer getCollect(String token, Integer itemId);

    /**
     * 取消收藏物品
     *
     * @param token
     * @param itemId
     */
    void delCollectItem(String token, Integer itemId);

    /**
     * 获取用户物品收藏列表
     *
     * @param token
     */
    List<ItemUserVO> getCollectItemList(String token);
}
