//package com.yzh.common.exception;
//
//import com.yzh.pojo.Result;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.bind.annotation.RestControllerAdvice;
//
///**
// * @Author: 燕子豪
// * @Date: 2024/2/15 13:04
// */
//@RestControllerAdvice
//public class GlobalExceptionHandler {
//    @ExceptionHandler(Exception.class)
//    public Result ex(Exception ex) {
//        ex.printStackTrace();
//        return Result.error("对不起，操作失败，请联系管理员重试");
//    }
//}