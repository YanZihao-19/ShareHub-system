package com.yzh.mapper;

import com.yzh.pojo.Order;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

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

    @Select("SELECT * FROM `order` WHERE item_id = #{itemId} AND need_uid = #{needOpenId}")
    Integer selectByItemidAndNuid(Integer itemId, String needOpenId);

    //处理status,status=3时查询全部;status=0时,查询status为0的order;status=1时,查询status不为为0的order;
    List<Order> getAllOrderList(String holderUid, Integer status);

    //完成订单，即更改订单状态
    @Update("UPDATE  `order` SET status = #{status}, update_time = #{updateTime} WHERE id = #{id} ")
    void changeOrderStatus(Order order);

    //用户查看订单后去除未读小红点
    @Update("UPDATE  `order` SET notice_status = 1 WHERE id = #{orderId} ")
    void changeNoticeStatus(Integer orderId);

    @Select("SELECT count(*) FROM `order` WHERE holder_uid = #{openId} AND notice_status = 0")
    Integer selectDotNum(String openId);
}
