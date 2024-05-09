package com.yzh.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: 燕子豪
 * @Date: 2024/4/19 17:10
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Identification extends AbstractEntity {
    private String openid;
    private String corporateName; //主体名
    private String belong; //归属地
    private String code; //社会信用代码
    private String image; //营业执照
    private Integer status; //审核状态
    private Integer flag; //已读状态
}
