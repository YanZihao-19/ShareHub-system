package com.yzh.controller;

import com.yzh.pojo.Comment;
import com.yzh.pojo.Result;
import com.yzh.service.CommentService;

import java.util.*;

import com.yzh.vo.UserCommentVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/17 16:38
 */
@RestController
@RequestMapping("/comments")

public class CommentController {

    @Autowired
    private CommentService commentService;

    //获取物品评论
    @GetMapping("/{itemId}")
    public Result getComments(@RequestHeader("token") String token, @PathVariable Integer itemId) {
        List<UserCommentVO> commentVOList = commentService.getComments(token, itemId);
        return Result.success(commentVOList);
    }

    //添加评论
    @PostMapping("/addComment")
    public Result getComments(@RequestHeader("token") String token, @RequestParam String itemId, @RequestParam String pId, @RequestParam String content) {
        Comment comment = new Comment();
        comment.setItemId(Integer.valueOf(itemId));
        if ("null".equals(pId)) {
            pId = null;
        }
        if (pId != null) {
            comment.setParentId(Integer.valueOf(pId));
        }
        comment.setContent(content);
        commentService.addComment(token, comment);
        return Result.success();
    }

    //删除评论
    @DeleteMapping("/{commentId}")
    public Result delComment(@RequestHeader("token") String token, @PathVariable Integer commentId) {
        commentService.delComment(commentId);
        return Result.success();
    }

    //获取用户评论列表
    @GetMapping("/getCommentList")
    public Result getComments(@RequestHeader("token") String token) {
        List<UserCommentVO> commentVOList = commentService.getUserComments(token);
        return Result.success(commentVOList);
    }


}
