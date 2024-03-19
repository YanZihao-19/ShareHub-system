package com.yzh.mapper;

import com.yzh.pojo.Order;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/08 11:07
 */
@Mapper
public interface OrderMapper {

    @Insert("INSERT INTO `order` (item_id, holder_uid, need_uid, reason, contact, mode, status, other_itemid, image, notice_status, hscore, nscore, create_time, update_time) " +
            "VALUES (#{itemId}, #{holderUid}, #{needUid}, #{reason}, #{contact}, #{mode}, #{status}, #{otherItemId}, #{image}, #{noticeStatus}, #{hScore}, #{nScore}, #{createTime}, #{updateTime})")
    Integer insertOrder(Order order);

    @Update("UPDATE `order` SET item_id = #{itemId}, holder_uid = #{holderUid}, need_uid = #{needUid}, " +
            "reason = #{reason}, contact = #{contact}, mode = #{mode}, status = #{status}, " +
            "other_itemid = #{otherItemId}, image = #{image}, notice_status = #{noticeStatus}, " +
            "hscore = #{hScore}, nscore = #{nScore}, update_time = #{updateTime} " +
            "WHERE id = #{id}")
    Integer UpdateOrder(Order order);
}
