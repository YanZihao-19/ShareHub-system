package com.yzh.service;

import com.yzh.pojo.Item;
import com.yzh.pojo.Order;
import com.yzh.vo.ItemOrderVO;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/08 11:06
 */
public interface OrderService {
    /**
     * 新增免费共享模式订单
     *
     * @param token
     * @param mode
     * @param order
     */
    Integer addOrder0(String token, Integer mode, Order order);

    /**
     * 申请易物订单
     * @param item
     * @param order
     * @param token
     * @return
     */
    Integer addItemOrder(Item item, Order order, String token);

    /**
     * 获取用户所以类型的订单（包括未达成的）
     *
     * @param token
     * @param status
     * @return
     */
    List<Order> getAllOrders(String token, Integer status);

    /**
     * 用户完成订单
     *
     * @param token
     * @param order
     * @return
     */
    Integer finishOrder(String token, Order order);

    /**
     * 用户拒绝订单
     *
     * @return
     */
    void refuseOrder(String token, Order order);

    /**
     * 用户查看订单后去除红点
     *
     * @return
     */
    void removeRedDot(Integer orderId);

    /**
     * 获取用户未查看的订单数
     *
     * @return
     */
    Integer getRedDot(String token);

    /**
     * 获取我的共享物品订单
     *
     * @param token
     * @param hScore
     * @return
     */
    List<ItemOrderVO> getShareOrders(String token, Integer hScore);

    /**
     * 获取我收到的物品订单
     *
     * @param token
     * @param nScore
     * @return
     */
    List<ItemOrderVO> getReceiveOrders(String token, Integer nScore);

    /**
     * 分享者给订单打分hScore
     *
     * @param token
     * @param hScore
     * @return
     */
    void sethScore(String token, Integer hScore,Integer orderId);
}
