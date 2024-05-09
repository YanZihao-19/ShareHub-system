package com.yzh.common.utils;

import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.UUID;

/**
 * 阿里云 OSS 工具类
 */
@Component
public class AliOSSUtils {
    @Autowired
    private AliOSSPropertise aliOSSPropertise;

    /**
     * 实现上传图片到OSS
     */
    public String upload(MultipartFile file, String flag) throws IOException {
        String endpoint = aliOSSPropertise.getEndpoint();
        String accessKeyId = aliOSSPropertise.getAccessKeyId();
        String accessKeySecret = aliOSSPropertise.getAccessKeySecret();
        String bucketName = aliOSSPropertise.getBucketName();

        // 获取上传的文件的输入流
        InputStream inputStream = file.getInputStream();

        // 使用UUID生成文件名，避免文件覆盖
        String originalFilename = file.getOriginalFilename();
        String fileName = UUID.randomUUID().toString() + originalFilename.substring(originalFilename.lastIndexOf("."));
        OSS ossClient = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);

        if (flag.contains("items")) {
            //上传文件到 OSS,物品目录
            fileName = "items/" + fileName;
        } else if (flag.contains("users")) {
            //上传文件到 OSS,物品目录
            fileName = "users/" + fileName;
        }else if (flag.contains("complaint")) {
            //上传文件到 OSS,申诉目录
            fileName = "complaint/" + fileName;
        }else if (flag.contains("identification")) {
            //上传文件到 OSS,申诉目录
            fileName = "identification/" + fileName;
        }

        ossClient.putObject(bucketName, fileName, inputStream);
        //文件访问路径
        String url = endpoint.split("//")[0] + "//" + bucketName + "." + endpoint.split("//")[1] + "/" + fileName;

        // 关闭ossClient
        ossClient.shutdown();
        return url;// 把上传到oss的路径返回
    }
}