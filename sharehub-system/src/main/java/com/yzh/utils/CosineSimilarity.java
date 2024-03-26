package com.yzh.utils;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/4 21:02
 */
public class CosineSimilarity {
    // 计算两个向量之间的余弦相似度
    public static Double cosineSimilarity(Integer[] vectorA, Integer[] vectorB) {
        // 计算向量的点积
        Double dotProduct = dotProduct(vectorA, vectorB);
        // 计算向量A的模
        Double magnitudeA = magnitude(vectorA);
        // 计算向量B的模
        Double magnitudeB = magnitude(vectorB);
        // 计算余弦相似度
        return dotProduct / (magnitudeA * magnitudeB);
    }

    // 计算向量的点积
    private static Double dotProduct(Integer[] vectorA, Integer[] vectorB) {
        double dotProduct = 0;
        for (int i = 0; i < vectorA.length; i++) {
            // 对应维度上的元素相乘并累加
            dotProduct += vectorA[i] * vectorB[i];
        }
        return dotProduct;
    }

    // 计算向量的模
    private static Double magnitude(Integer[] vector) {
        double sumSquared = 0;
        for (double v : vector) {
            // 对向量的每个元素求平方并累加
            sumSquared += v * v;
        }
        // 对平方和取平方根，即得到模
        return Math.sqrt(sumSquared);
    }
}
