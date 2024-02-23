package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 14:12
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AbstractEntity {
    //ID
    private int id;
    //创建时间
    private LocalDateTime createTime;
    //修改时间
    private LocalDateTime updateTime;
}
