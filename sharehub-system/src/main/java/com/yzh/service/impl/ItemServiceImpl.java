package com.yzh.service.impl;

import com.yzh.mapper.ItemMapper;
import com.yzh.pojo.Item;
import com.yzh.service.ItemService;
import com.yzh.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/23 23:47
 */
@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemMapper itemMapper;

    //添加事务，保证操作的整体性
    @Transactional
    @Override
    public void addItem(Item item) {
        //物品上传时间与更新时间处理
        item.setCreateTime(LocalDateTime.now());
        item.setUpdateTime(LocalDateTime.now());
        item.setImage(item.getImgList()[0]);
        //物品首页存储到item中
        itemMapper.insertItem(item);

        //插入物品对应的多张图片,除去第一张
        for (int i = 1; i < item.getImgList().length; i++) {
            itemMapper.insertImage(item.getImgList()[i], item.getId());
        }
    }

    @Override
    public List<Item> getItemList(String token) {
        List<Item> itemList;
        //暂时不写
//        if (token != null) {
//            //解析前端token,获取用户openid,进行具体推荐
//            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
//            String openId = (String) itemUser.get("openId");
//            //推荐算法获取到对于用户的itemList
//        }

        //下面是默认token为null,即用户未登录时，随机获取6条物品数据
        itemList = itemMapper.getItemList();
        System.out.println(itemList);
        return itemList;
    }
}
