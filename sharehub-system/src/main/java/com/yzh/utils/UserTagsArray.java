package com.yzh.utils;

import com.yzh.pojo.UserTagsScore;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;
import java.util.Arrays;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/5 20:57
 */

@Component
public class UserTagsArray {
    public static Integer[] getUserTagsArray(UserTagsScore userTagsScore) throws IllegalAccessException {
        Class<? extends UserTagsScore> aClass = userTagsScore.getClass();

        Field[] fields = aClass.getDeclaredFields();

        Integer[] res = new Integer[fields.length - 2];

        int k = 0;
        for (Field field : fields) {
            field.setAccessible(true);
            if (field.getName().startsWith("i") || field.getName().startsWith("u")) {
                ;
            } else {
                res[k++] = (Integer) field.get(userTagsScore);
            }
        }
        return res;
    }
}
