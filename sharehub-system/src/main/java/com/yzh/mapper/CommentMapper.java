package com.yzh.mapper;

import com.yzh.pojo.Admin;
import com.yzh.pojo.Comment;
import com.yzh.pojo.Item;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/17 17:06
 */
@Mapper
public interface CommentMapper {

    @Select("SELECT * FROM comment WHERE item_id = #{itemId}")
    List<Comment> selectComments(Integer itemId);

    @Insert("INSERT into comment ( item_id, user_id, user_id2, parent_id, content, status, isDelete, hasLike, likeNum, create_time, update_time) " +
            "values (#{itemId},#{userId},#{userId2},#{parentId},#{content},#{status},#{isDelete},#{hasLike},#{likeNum},#{createTime},#{updateTime})")
    void addComment(Comment comment);

    @Select("SELECT * FROM comment WHERE id = #{id}")
    Comment selectComment(Integer id);

    @Delete("DELETE FROM comment WHERE id = #{commentId}")
    void delComment(Integer commentId);

    @Select("SELECT count(*) FROM comment WHERE user_id2 = #{openId} AND status = 0")
    Integer selectDotCount(String openId);

    @Select("SELECT * FROM comment WHERE user_id2 = #{openId}")
    List<Comment> selectUserComments(String openId);
}
