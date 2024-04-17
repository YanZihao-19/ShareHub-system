package com.yzh.service.impl;

import com.yzh.mapper.ItemMapper;
import com.yzh.mapper.OrderMapper;
import com.yzh.pojo.Item;
import com.yzh.pojo.Order;
import com.yzh.service.OrderService;
import com.yzh.common.utils.JwtUtils;
import com.yzh.common.utils.UpdatePreference;
import com.yzh.vo.ItemOrderVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
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
        order.setNeedUid(openId2);
        //为订单属性赋默认值
        order.setStatus(0);
        order.setNoticeStatus(0); //0为未读状态
        //（0是未打分，分值1~5）
        order.setHScore(0);
        order.setNScore(0);
        //订单设置时间
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

    @Transactional
    @Override
    public Integer addItemOrder(Item item, Order order, String token) {
        //判断用户是否已经申请过了，即在order表中需求用户和物品0id是唯一的
        //根据itemId(物品0的id)查用户ID
        String needOpenId = itemMapper.getItemDetail(order.getItemId()).getOwnerUid();
        Integer num = orderMapper.selectByItemidAndNuid(order.getItemId(), needOpenId);
        //如果用户没有申请，则提交申请
        if (num == null) {
            //第一步添加物品
            item.setCreateTime(LocalDateTime.now());
            item.setUpdateTime(LocalDateTime.now());
            //物品首页存储到item中
            item.setImage(item.getImgList()[0]);
            itemMapper.insertItem(item);
            //插入物品对应的多张图片,除去第一张
            for (int i = 1; i < item.getImgList().length; i++) {
                itemMapper.insertImage(item.getImgList()[i], item.getId());
            }
            //将上述值赋值给order
            //将插入item返回的itemId赋值到Order中
            order.setOtherItemId(item.getId());
            order.setHolderUid(item.getOwnerUid());
            order.setNeedUid(needOpenId);
            //设置订单状态，未完成
            order.setStatus(0);
            //设置holder用户未读
            order.setNoticeStatus(0);
            //（0是未打分，分值1~5）
            order.setHScore(0);
            order.setNScore(0);
            //订单设置时间
            order.setCreateTime(LocalDateTime.now());
            order.setUpdateTime(LocalDateTime.now());
            //最后插入order
            orderMapper.insertOrder(order);
            return 1;
        }
        return 0;
    }

    @Override
    public List<Order> getAllOrders(String token, Integer status) {
        //解析前端token,获取需求用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String holderUid = (String) itemUser.get("openId");
        //根据status的不同，动态获取获取orders
        List<Order> orderList = orderMapper.getAllOrderList(holderUid, status);

        return orderList;
    }

    @Transactional
    @Override
    public Integer finishOrder(String token, Order order) {
        //根据mode的不同实现不同的完成订单逻辑
        LocalDateTime finishTime = LocalDateTime.now();
        Item itemTemp = new Item();
        //物品共享订单逻辑
        if (order.getMode() == 0) {
            //更改物品状态
            itemTemp.setId(order.getItemId());
            itemTemp.setStatus(1); //设置该物品为已交易
            itemTemp.setUpdateTime(finishTime);
            itemMapper.changeItemStatus(itemTemp);
            //更改订单状态
            order.setUpdateTime(finishTime);
            order.setStatus(1); //设置该订单为已交易
            orderMapper.changeOrderStatus(order);
            //偏好倾向不用增加(之前已经加过了)
        }
        //以物换物订单逻辑
        else if (order.getMode() == 1) {
            //更改两个物品状态
            itemTemp.setId(order.getItemId());
            itemTemp.setStatus(1); //设置该物品1为已交易
            itemTemp.setUpdateTime(finishTime);
            itemMapper.changeItemStatus(itemTemp);
            Item itemTemp2 = new Item();
            itemTemp2.setId(order.getOtherItemId());
            itemTemp2.setStatus(1); //设置该物品2为已交易
            itemTemp2.setUpdateTime(finishTime);
            itemMapper.changeItemStatus(itemTemp2);
            //更改订单状态
            order.setUpdateTime(finishTime);
            order.setStatus(1); //设置该订单为已交易
            orderMapper.changeOrderStatus(order);
            //增加物品所有者的偏好倾向(根据接收易物的物品标签)！！！！！！！！！！！！！！！！！
        }
        //二手交易订单逻辑
        else {
            //更改物品状态
            itemTemp.setId(order.getItemId());
            itemTemp.setStatus(1); //设置该物品为已交易
            itemTemp.setUpdateTime(finishTime);
            itemMapper.changeItemStatus(itemTemp);
            //更改订单状态
            order.setUpdateTime(finishTime);
            order.setStatus(1); //设置该订单为已交易
            orderMapper.changeOrderStatus(order);
            //增加物品购买者的偏好倾向(根据购买物物的物品标签)！！！！！！！！！！！！！！！！！
        }
        return 1;
    }

    @Transactional
    @Override
    public void refuseOrder(String token, Order order) {
        //统一处理订单
        LocalDateTime refuseTime = LocalDateTime.now();
        Item itemTemp = new Item();
        order.setStatus(2); //更改订单状态为已拒绝
        order.setUpdateTime(refuseTime);
        orderMapper.changeOrderStatus(order);

        //处理mode=1(以物换物)的申请物品状态
        if (order.getMode() == 1) {
            itemTemp.setId(order.getOtherItemId());
            itemTemp.setStatus(2); //设置为已下架
            itemTemp.setUpdateTime(refuseTime);
            itemMapper.changeItemStatus(itemTemp);
        }
    }

    @Override
    public void removeRedDot(Integer orderId) {
        orderMapper.changeNoticeStatus(orderId);
    }

    @Override
    public Integer getRedDot(String token) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取需求用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");

            return orderMapper.selectDotNum(openId);
        }
        return 0;
    }

    @Override
    public List<ItemOrderVO> getShareOrders(String token, Integer hScore) {
        List<ItemOrderVO> itemOrderVOList = new ArrayList<>();
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String holderUid = (String) itemUser.get("openId");
            List<Order> orderList = orderMapper.selectShareOrders(holderUid, hScore);
            //遍历这个订单list，根据每个order中itemId的值查到对应的item，并放入ItemOrderVO中
            for (Order order : orderList) {
                Item item = itemMapper.getItemDetail(order.getItemId());
                ItemOrderVO itemOrderVO = new ItemOrderVO(order, item);
                itemOrderVOList.add(itemOrderVO);
            }
            return itemOrderVOList;
        }
        return null;
    }

    @Override
    public List<ItemOrderVO> getReceiveOrders(String token, Integer nScore) {
        List<ItemOrderVO> itemOrderVOList = new ArrayList<>();
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String needUid = (String) itemUser.get("openId");

            List<Order> orderList = orderMapper.selectReceiveOrders(needUid, nScore);
            //遍历这个订单list，根据每个order中itemId的值查到对应的item，并放入ItemOrderVO中
            for (Order order : orderList) {
                Item item = itemMapper.getItemDetail(order.getItemId());
                ItemOrderVO itemOrderVO = new ItemOrderVO(order, item);
                itemOrderVOList.add(itemOrderVO);
            }
            return itemOrderVOList;
        }

        return null;
    }

    @Override
    public void sethScore(String token, Integer hScore, Integer orderId) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String holderUid = (String) itemUser.get("openId");
            //根据hScore值来影响需求者的信誉分!!!!!!!!!!!!!

            orderMapper.sethScore(holderUid, hScore, orderId);
        }
    }

    @Override
    public void setnScore(String token, Integer nScore, Integer orderId) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String needUid = (String) itemUser.get("openId");
            //根据hScore值来影响需求者的信誉分!!!!!!!!!!!!!!!!

            orderMapper.setnScore(needUid, nScore, orderId);
        }
    }
}
