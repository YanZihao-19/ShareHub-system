package com.yzh.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yzh.mapper.ManageItemMapper;
import com.yzh.pojo.Item;
import jakarta.annotation.Resource;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/14 10:06
 */
 public interface ManageItemService {

    /**
     * 新增
     */
     void add(Item Item);

    /**
     * 删除
     */
     void deleteById(Integer id);

    /**
     * 批量删除
     */
     void deleteBatch(List<Integer> ids);

    /**
     * 修改
     */
     void updateById(Item Item);

    /**
     * 根据ID查询
     */
     Item selectById(Integer id);

    /**
     * 查询所有
     */
     List<Item> selectAll(Item Item);

    /**
     * 分页查询
     */
     PageInfo<Item> selectPage(Item Item, Integer pageNum, Integer pageSize);
}
