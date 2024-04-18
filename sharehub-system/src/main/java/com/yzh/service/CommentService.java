package com.yzh.service;

import com.yzh.pojo.Comment;
import com.yzh.vo.UserCommentVO;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/17 16:56
 */
public interface CommentService {

    //获取物品评论列表
    List<UserCommentVO> getComments(String token, Integer itemId);

    //给物品评论
    void addComment(String token, Comment comment);

    //删除物品评论
    void delComment(Integer commentId);

    //获取用户未读评论数
    Integer getCommentDot(String token);

    //获取用户被评论列表
    List<UserCommentVO> getUserComments(String token);

    //已读评论
    void readComment(Integer id);
}
