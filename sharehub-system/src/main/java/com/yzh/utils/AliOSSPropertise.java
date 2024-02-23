package com.yzh.utils;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/14 14:10
 */

@Data
@Component
@ConfigurationProperties(prefix = "aliyun.oss")
public class AliOSSPropertise {
    private String endpoint;
    private String accessKeyId;
    private String accessKeySecret;
    private String bucketName;
}