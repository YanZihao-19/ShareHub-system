package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;
/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 16:08
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageBean {
    //查询总数
    private Long total;
    //数据列表
    private List rows;
}