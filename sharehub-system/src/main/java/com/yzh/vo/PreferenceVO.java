package com.yzh.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/16 21:00
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PreferenceVO {
    //用户偏好数组
    private List<Integer> tagList;
    private List<Integer> modeList;
    private List<Integer> suitList;
    private List<Integer> usageList;
    private List<Integer> deliveryList;
}
