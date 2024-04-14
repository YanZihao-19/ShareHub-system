package com.yzh.mapper;

import com.yzh.pojo.Item;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 操作manage_item相关数据接口
*/
@Mapper
public interface ManageItemMapper {

    /**
      * 新增
    */
    int insert(Item manageItem);

    /**
      * 删除
    */
    int deleteById(Integer id);

    /**
      * 修改
    */
    int updateById(Item manageItem);

    /**
      * 根据ID查询
    */
    Item selectById(Integer id);

    /**
      * 查询所有
    */
    List<Item> selectAll(Item manageItem);

}