package com.yzh.mapper;

import com.yzh.pojo.Item;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/23 23:48
 */
@Mapper
public interface ItemMapper {

    //插入物品,并将所插入物品的自增主键重新填充到item.id中
    @Options(useGeneratedKeys = true, keyProperty = "id")
    @Insert("insert into item (deposit,delivery_style,address,usage_level,original_price,sell_price,owneruid,status,trade_mode,tag,item_desc,item_title,create_time, update_time) " +
            "values (#{deposit},#{deliveryStyle},#{address},#{usageLevel},#{originalPrice},#{sellPrice},#{ownerUid},#{status},#{tradeMode},#{tag},#{itemDesc},#{itemTitle},#{createTime},#{updateTime})")
    void insertItem(Item item);

    //插入图片
    @Insert("insert into item_images (url, item_id) values (#{url}, #{itemId})")
    void insertImage(String url, Integer itemId);
}
