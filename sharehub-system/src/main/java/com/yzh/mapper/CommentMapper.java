package com.yzh.mapper;

import com.yzh.pojo.Admin;
import com.yzh.pojo.Comment;
import com.yzh.pojo.Item;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/17 17:06
 */
@Mapper
public interface CommentMapper {

//    查询某物品所以的评论
    @Select("SELECT * FROM comment WHERE item_id = #{itemId}")
    List<Comment> selectComments(Integer itemId);

//    新增评论
    @Insert("INSERT into comment ( item_id, user_id, user_id2, parent_id, content, status, isDelete, hasLike, likeNum, create_time, update_time) " +
            "values (#{itemId},#{userId},#{userId2},#{parentId},#{content},#{status},#{isDelete},#{hasLike},#{likeNum},#{createTime},#{updateTime})")
    void addComment(Comment comment);

//    查询指定ID的评论
    @Select("SELECT * FROM comment WHERE id = #{id}")
    Comment selectComment(Integer id);

//    删除指定id的评论
    @Delete("DELETE FROM comment WHERE id = #{commentId}")
    void delComment(Integer commentId);

//    查询用户未读评论数
    @Select("SELECT count(*) FROM comment WHERE user_id2 = #{openId} AND status = 0 ORDER BY create_time DESC")
    Integer selectDotCount(String openId);

//    查询用户所有被评价的评论
    @Select("SELECT * FROM comment WHERE user_id2 = #{openId}  AND status != 2 ORDER BY create_time DESC ")
    List<Comment> selectUserComments(String openId);

//    修改评论状态
    @Update("UPDATE comment SET status = 1 WHERE id = #{id}")
    void readComment(Integer id);
}
