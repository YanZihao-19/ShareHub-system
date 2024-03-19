package com.yzh.service;

import com.yzh.pojo.Order;

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
}
