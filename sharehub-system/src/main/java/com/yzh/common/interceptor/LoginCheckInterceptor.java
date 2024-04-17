package com.yzh.common.interceptor;

import com.alibaba.fastjson.JSONObject;
import com.yzh.pojo.Result;
import com.yzh.common.utils.JwtUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/15 11:56
 */
@Slf4j
@Component
public class LoginCheckInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object handler) throws Exception {
        //1.获取请求url
        String url = req.getRequestURI().toString();

        //2.判断url中是否包含login,若包含则放行
        if (url.contains("login")) {
            return true;
        }

        //3.获取请求头中的临牌token
        String jwt = req.getHeader("token");

        //4.判断令牌是否存在，若不存在返回错误结果
        if (!StringUtils.hasLength(jwt)) {
            Result err = Result.error("NOT_LOGIN");
            //将Result装换为JSON
            String notLogin = JSONObject.toJSONString(err);
            res.getWriter().write(notLogin);
            log.info("拦截成功");
            return false;
        }

        //5.解析token是否合法
        try {
            JwtUtils.parseJWT(jwt);
        } catch (Exception e) { //解析失败(token不合法)
            e.printStackTrace();
            Result err = Result.error("NOT_LOGIN");
            //将Result装换为JSON
            String notLogin = JSONObject.toJSONString(err);
            res.getWriter().write(notLogin);
            log.info("拦截成功");
            return false;
        }
        log.info("放行成功");

        //6.解析成功，token合法，放行请求
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        log.info("没有拦截");
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}