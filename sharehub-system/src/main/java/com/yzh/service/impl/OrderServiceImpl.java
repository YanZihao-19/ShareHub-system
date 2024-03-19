package com.yzh.service.impl;

import com.yzh.mapper.ItemMapper;
import com.yzh.mapper.OrderMapper;
import com.yzh.pojo.Item;
import com.yzh.pojo.Order;
import com.yzh.service.OrderService;
import com.yzh.utils.JwtUtils;
import com.yzh.utils.UpdatePreference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/08 11:06
 */

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private ItemMapper itemMapper;

    @Override
    public Integer addOrder0(String token, Integer mode, Order order) {
        //解析前端token,获取需求用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String openId2 = (String) itemUser.get("openId");
        //查询当前物品所有者的openid
        Item item = itemMapper.getItemDetail(order.getItemId());
        String openId1 = item.getOwnerUid();

        //为订单属性赋有效值
        order.setMode(mode);
        order.setHolderUid(openId1);
        order.setNeedUid(openId1);
        //为订单属性赋默认值
        order.setStatus(0);
        order.setNoticeStatus(0); //0为未读状态
        order.setCreateTime(LocalDateTime.now());
        order.setUpdateTime(LocalDateTime.now());
        //添加到数据库
        Integer result = orderMapper.insertOrder(order);

        //如果添加成功,增加用户对该物品相关标签的好感度
        if (result == 1) {
            UpdatePreference.increase(token, item, 1);
            System.out.println("发起申请交易增加好感度！！！！！！");
        }
        return result;
    }
}
