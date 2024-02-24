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

    //图片上传上传,flag表示用户/图片
    @PostMapping("/upload")
    public Result upload(MultipartFile image, String flag) throws IOException {

        String url = aliOSSUtils.upload(image, flag);
        //将上传的url返回给前端用于回显
        return Result.success(url);
    }


}