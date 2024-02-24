package com.yzh.service.impl;

import com.yzh.mapper.ItemMapper;
import com.yzh.pojo.Item;
import com.yzh.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

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
        itemMapper.insertItem(item);

        //插入物品对应的多张图片
        for (String url : item.getImgList()) {
            itemMapper.insertImage(url, item.getId());
        }
    }
}
