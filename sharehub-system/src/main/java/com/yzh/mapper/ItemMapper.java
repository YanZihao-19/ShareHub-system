package com.yzh.mapper;

import com.yzh.pojo.Item;

import java.util.*;

import com.yzh.pojo.Order;
import com.yzh.pojo.UserTagsScore;
import org.apache.ibatis.annotations.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/23 23:48
 */
@Mapper
public interface ItemMapper {
    //插入物品,并将所插入物品的自增主键重新填充到item.id中
    @Options(useGeneratedKeys = true, keyProperty = "id")
    @Insert("insert into item (suit,image,delivery_style,address,pageflag,usage_level,original_price,sell_price,owneruid,status,trade_mode,tag,item_desc,item_title,create_time, update_time) " +
            "values (#{suit},#{image},#{deliveryStyle},#{address},#{pageFlag},#{usageLevel},#{originalPrice},#{sellPrice},#{ownerUid},#{status},#{tradeMode},#{tag},#{itemDesc},#{itemTitle},#{createTime},#{updateTime})")
    void insertItem(Item item);

    //插入图片
    @Insert("insert into item_images (url, item_id) values (#{url}, #{itemId})")
    void insertImage(String url, Integer itemId);

    //不同交易模式的物品列表随机获取20条数据
    List<Item> getItemList(Integer mode, Integer tag, Set idSet);

    //根据用户id和mode获取itemList
    List<Item> getUserItemList(String openId, Integer mode);

    @Select("SELECT * FROM user_tags_score WHERE uid = #{openId}")
    UserTagsScore getUserTagsScore(String openId);

    @Select("SELECT * FROM item WHERE id = #{itemId}")
    Item getItemDetail(Integer itemId);

    @Select("SELECT url FROM item_images WHERE item_id = #{itemId}")
    List<String> getItemImages(Integer itemId);

    //更改物品的状态
    @Update("UPDATE item SET status = #{status}, update_time = #{updateTime} WHERE id = #{id}")
    void changeItemStatus(Item item);

    //根据关键词查询物品列表
    List<Item> searchItems(Integer mode, String keywords);

    @Insert("INSERT item_collect (openid, itemid) VALUES (#{openId},#{itemId})")
    void insertCollectItem(String openId, Integer itemId);

    @Select("SELECT count(*) FROM item_collect WHERE openid = #{openId} AND itemid = #{itemId}")
    Integer selectCollectItem(String openId, Integer itemId);

    @Delete("DELETE FROM item_collect WHERE itemid=#{itemId} AND openid=#{openId}")
    void deleteCollectItem(String openId, Integer itemId);

    @Select("SELECT itemid FROM item_collect WHERE openid=#{openId}")
    List<Integer> selectAllCollectItem(String openId);
}
