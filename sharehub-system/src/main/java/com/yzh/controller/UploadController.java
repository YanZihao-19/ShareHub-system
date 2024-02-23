package com.yzh.controller;

import com.yzh.pojo.Result;
import com.yzh.utils.AliOSSUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/14 11:11
 */
@RestController
public class UploadController {
    @Autowired
    private AliOSSUtils aliOSSUtils;


    @PostMapping("/upload")
    public Result upload(MultipartFile image) throws IOException {
        String url = aliOSSUtils.upload(image);
        //将上传的url返回给前端用于回显
        return Result.success(url);
    }

}