package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/17 16:32
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment extends AbstractEntity {
    //    对应物品的id
    private Integer itemId;
    //    评论者的id
    private String userId;
    //    被评论者的id
    private String userId2;
    //    对应父级评论id
    private Integer parentId;
    //    是否已读
    private Integer status;
    //    内容
    private String content;
    //    是否被删除
    private Integer isDelete;
    //    是否已经点赞
    private Integer hasLike;
    //    点赞数
    private Integer likeNum;
}
