package com.yzh.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yzh.pojo.Notice;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/13 20:43
 */
public interface NoticeService {
    void add(Notice notice);

    void deleteById(Integer id);

    void deleteBatch(List<Integer> ids);

    void updateById(Notice notice);


    /**
     * 根据ID查询
     */
    Notice selectById(Integer id);

    /**
     * 查询所有
     */
    List<Notice> selectAll(Notice notice);

    /**
     * 分页查询
     */
    PageInfo<Notice> selectPage(Notice notice, Integer pageNum, Integer pageSize);

    PageInfo<String> selectNotice(Notice notice, Integer pageNum, Integer pageSize);
}