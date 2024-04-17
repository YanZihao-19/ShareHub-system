package com.yzh.service.impl;

import com.yzh.common.utils.JwtUtils;
import com.yzh.mapper.CommentMapper;
import com.yzh.mapper.ItemMapper;
import com.yzh.mapper.UserMapper;
import com.yzh.pojo.Comment;
import com.yzh.pojo.Item;
import com.yzh.pojo.User;
import com.yzh.service.CommentService;
import com.yzh.vo.ItemUserVO;
import com.yzh.vo.ItemVO;
import com.yzh.vo.UserCommentVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/17 16:59
 */
@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private ItemMapper itemMapper;

    //获取物品评论列表
    @Override
    public List<UserCommentVO> getComments(String token, Integer itemId) {
        //解析前端token,获取需求用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String openId = (String) itemUser.get("openId");
        //VO容器
        List<UserCommentVO> commentVOList = new ArrayList<>();
        //获取数据库评论列表
        List<Comment> getComments = commentMapper.selectComments(itemId);
        //填充到容器中
        for (Comment comment : getComments) {
            //new一个UserCommentVO容器，并将每一个都放入list中
            UserCommentVO commentVO = new UserCommentVO();
            commentVO.setId(comment.getId());
            commentVO.setOwner(comment.getUserId().equals(openId));
            commentVO.setHasLike(comment.getHasLike());
            commentVO.setLikeNum(comment.getLikeNum());
            commentVO.setContent(comment.getContent());
            commentVO.setParentId(comment.getParentId());
            commentVO.setCreateTime(comment.getCreateTime().toString().replace("T", " "));
            //获取评论者的name和头像
            User commentUser = userMapper.selectOpenId(comment.getUserId());
            commentVO.setAvatarUrl(commentUser.getImage());
            commentVO.setNickName(commentUser.getUsername());
            commentVOList.add(commentVO);
        }
        return commentVOList;
    }

    //给物品评论
    @Override
    public void addComment(String token, Comment comment) {
        //解析前端token,获取需求用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String openId = (String) itemUser.get("openId");
        //填充评论者的openId
        comment.setUserId(openId);
        //填充被评论者的openId
        if (comment.getParentId() == null) {
            //如果pId为null，则填充item对应的ownerId
            comment.setUserId2(itemMapper.getItemDetail(comment.getItemId()).getOwnerUid());
        } else {
            //如果pId为不为null，则填充对应comment对应的Userid1
            comment.setUserId2(commentMapper.selectComment(comment.getParentId()).getUserId());
        }
        comment.setCreateTime(LocalDateTime.now());
        comment.setUpdateTime(LocalDateTime.now());
        comment.setHasLike(0);
        comment.setStatus(0);
        comment.setLikeNum(0);
        commentMapper.addComment(comment);
    }

    //删除物品评论
    @Override
    public void delComment(Integer commentId) {
        commentMapper.delComment(commentId);
    }

    //获取用户未读评论数
    @Override
    public Integer getCommentDot(String token) {
        //解析前端token,获取需求用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String openId = (String) itemUser.get("openId");
        Integer dotCount = commentMapper.selectDotCount(openId);
        return dotCount;
    }

    //获取用户被评论列表
    @Override
    public List<UserCommentVO> getUserComments(String token) {
        //解析前端token,获取需求用户openid
        Map<String, Object> itemUser = JwtUtils.parseJWT(token);
        String openId = (String) itemUser.get("openId");
        //VO容器
        List<UserCommentVO> commentVOList = new ArrayList<>();
        //获取数据库评论列表
        List<Comment> getComments = commentMapper.selectUserComments(openId);
        //填充到容器中
        for (Comment comment : getComments) {
            //new一个UserCommentVO容器，并将每一个都放入list中
            UserCommentVO commentVO = new UserCommentVO();
            commentVO.setId(comment.getId());
            commentVO.setOwner(comment.getUserId().equals(openId));
            commentVO.setHasLike(comment.getHasLike());
            commentVO.setLikeNum(comment.getLikeNum());
            commentVO.setContent(comment.getContent());
            commentVO.setParentId(comment.getParentId());
            commentVO.setCreateTime(comment.getCreateTime().toString().substring(5, 16).replace("T", " "));
            //获取评论者的name和头像
            User commentUser = userMapper.selectOpenId(comment.getUserId());
            commentVO.setAvatarUrl(commentUser.getImage());
            commentVO.setNickName(commentUser.getUsername());
            commentVOList.add(commentVO);
        }
        return commentVOList;
    }
}
