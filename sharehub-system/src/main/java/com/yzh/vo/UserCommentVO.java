package com.yzh.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/17 16:39
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCommentVO {
//             "id": 2,
//            "owner": false,
//            "hasLike": false,
//            "likeNum": 2,
//            "avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797761970/0",
//            "nickName": "寂寞无敌",
//            "content": "我是评论的评论",
//            "parentId": 1,
//            "createTime": "2021-07-02 17:05:50"
    private Integer id;
    private Boolean owner;
    private String userId;
    private Integer hasLike;
    private Integer likeNum;
    private String avatarUrl;
    private String nickName;
    private String content;
    private Integer parentId;
    private String createTime;
}
