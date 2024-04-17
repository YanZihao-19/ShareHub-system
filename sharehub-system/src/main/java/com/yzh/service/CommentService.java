package com.yzh.service;

import com.yzh.pojo.Comment;
import com.yzh.vo.UserCommentVO;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/17 16:56
 */
public interface CommentService {

    List<UserCommentVO> getComments(String token, Integer itemId);

    void addComment(String token, Comment comment);

    void delComment(Integer commentId);

    Integer getCommentDot(String token);

    List<UserCommentVO> getUserComments(String token);
}
