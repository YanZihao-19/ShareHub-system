package com.yzh.service;

import com.yzh.pojo.Order;

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
     * 获取用户所以类型的订单（包括未达成的）
     * @param token
     * @param status
     * @return
     */
    List<Order> getAllOrders(String token, Integer status);
}
