package com.yzh.service.impl;

import com.yzh.pojo.Item;
import com.yzh.mapper.ManageItemMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import com.yzh.service.ManageItemService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * 管理物品业务处理
 **/
@Service
public class ManageItemServiceImpl implements ManageItemService {

    @Resource
    private ManageItemMapper manageItemMapper;

    /**
     * 新增
     */
    public void add(Item Item) {
        manageItemMapper.insert(Item);
    }

    /**
     * 删除
     */
    public void deleteById(Integer id) {
        manageItemMapper.deleteById(id);
    }

    /**
     * 批量删除
     */
    public void deleteBatch(List<Integer> ids) {
        for (Integer id : ids) {
            manageItemMapper.deleteById(id);
        }
    }

    /**
     * 修改
     */
    public void updateById(Item Item) {
        manageItemMapper.updateById(Item);
    }

    /**
     * 根据ID查询
     */
    public Item selectById(Integer id) {
        return manageItemMapper.selectById(id);
    }

    /**
     * 查询所有
     */
    public List<Item> selectAll(Item Item) {
        return manageItemMapper.selectAll(Item);
    }

    /**
     * 分页查询
     */
    public PageInfo<Item> selectPage(Item Item, Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<Item> list = manageItemMapper.selectAll(Item);
        return PageInfo.of(list);
    }

}