package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * 公告信息表
*/
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notice extends AbstractEntity {
    /** 内容 */
    private String content;
    /** url */
    private String url;
    /** 标志 */
    private Integer status;

}