package com.yzh.common.utils;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/17 17:12
 */
public class CosineSimilarityTest {
    @Test
    public void cosineSimilarity() {
        Integer[] vectorA = {1, 2, 3};
        Integer[] vectorB = {4, 5, 6};
        Double expected = 0.9746318461970762; // 预期的余弦相似度
        Double result = CosineSimilarity.cosineSimilarity(vectorA, vectorB);
        // 设置一个允许的误差范围，这里取非常小的值
        Double delta = 0.0000001;
        assertEquals(expected, result, delta);
        // 打印测试结果
        System.out.println("预期的余弦相似度：" + expected);
        System.out.println("计算得到的余弦相似度：" + result);
    }
}