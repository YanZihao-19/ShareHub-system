package com.yzh.config;

import com.yzh.interceptor.LoginCheckInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/15 11:57
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

//    @Autowired
//    private LoginCheckInterceptor loginCheckInterceptor;
//
//    //拦截器
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(loginCheckInterceptor).addPathPatterns("/**").excludePathPatterns("/login");
//    }

    //ORS（跨域资源共享），允许跨域请求
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // 允许任意域名进行跨域访问，这里是你的前端应用地址
                .allowedMethods("GET", "POST", "PUT", "DELETE") // 允许哪些请求方法
                .allowedHeaders("*"); // 允许任意请求头
    }

}