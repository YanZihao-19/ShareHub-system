package com.yzh.utils;

import com.yzh.pojo.Item;
import com.yzh.pojo.UserTagsScore;

import java.util.Map;

/**
 * @Author: 燕子豪
 * @Date: 2024/3/17 18:02
 */
public class UpdatePreference {
    /**
     * 根据物品增加用户对物品的好感度
     *
     * @param style 指增加方式，如查看物品详情、搜索物品、完成物品订单等等(暂时未使用)
     * @return
     */
    public static UserTagsScore increase(String token, Item item, Integer style) {
        UserTagsScore userTagsScore = new UserTagsScore(null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

        //style=1表示查看物品详情后的偏好调整
        if (style == 1) {
            //解析前端token, 获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");
            userTagsScore.setUid(openId);

            //增加所查看的物品种类好感度默认3 (注意是从case1开始，按照数据库的约定来)
            Integer tag = item.getTag();
            switch (tag) {
                case 1 -> userTagsScore.setElectProduct(3);
                case 2 -> userTagsScore.setBeauty(3);
                case 3 -> userTagsScore.setBook(3);
                case 4 -> userTagsScore.setDigital(3);
                case 5 -> userTagsScore.setHousehold(3);
                case 6 -> userTagsScore.setToy(3);
                case 7 -> userTagsScore.setPetSup(3);
                case 8 -> userTagsScore.setMenSwear(3);
                case 9 -> userTagsScore.setWomenSwear(3);
                case 10 -> userTagsScore.setMotherAndBaby(3);
                case 11 -> userTagsScore.setSport(3);
                case 12 -> userTagsScore.setAppliance(3);
                case 13 -> userTagsScore.setFurniture(3);
                case 14 -> userTagsScore.setOther(3);
                default -> throw new IllegalArgumentException("Invalid value: " + tag);
            }
            //增加所查看的物品交易方式好感度默认3
            Integer mode = item.getTradeMode();
            switch (mode) {
                case 0 -> userTagsScore.setShare(3);
                case 1 -> userTagsScore.setExchange(3);
                case 2 -> userTagsScore.setTrade(3);
                default -> throw new IllegalArgumentException("Invalid value: " + mode);
            }
            //给用户倾向的交付方式赋值2
            Integer delivery = item.getDeliveryStyle();
            switch (delivery) {
                case 0 -> {
                    userTagsScore.setSelfPick(1);
                    userTagsScore.setHandDeliver(1);
                    userTagsScore.setPost(1);
                }
                case 1 -> userTagsScore.setSelfPick(2);
                case 2 -> userTagsScore.setHandDeliver(2);
                case 3 -> userTagsScore.setPost(2);
                default -> throw new IllegalArgumentException("Invalid value: " + delivery);
            }
            //给用户能接受的物品损耗度增加权重2
            Integer usage = item.getUsageLevel();
            switch (usage) {
                case 0 -> userTagsScore.setAnew(3);
                case 1 -> userTagsScore.setNnNew(3);
                case 2 -> userTagsScore.setNfNew(3);
                case 3, 4 -> userTagsScore.setEfNew(3);
                case 5 -> {
                    userTagsScore.setAnew(1);
                    userTagsScore.setNnNew(1);
                    userTagsScore.setNfNew(1);
                    userTagsScore.setEfNew(1);
                }
                default -> throw new IllegalArgumentException("Invalid value: " + usage);
            }
            //给用户的年龄段增加权重2
            Integer suit = item.getSuit();
            switch (suit) {
                case 0 -> userTagsScore.setAllAge(2);
                case 1 -> userTagsScore.setChild(2);
                case 2 -> userTagsScore.setAdult(2);
                case 3 -> userTagsScore.setOld(2);
                default -> throw new IllegalArgumentException("Invalid value: " + suit);
            }

            System.out.println("打印的userTagsScore" + userTagsScore);
        }
        return userTagsScore;
    }

}
