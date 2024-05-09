package com.yzh.service.impl;

import com.yzh.mapper.ItemMapper;
import com.yzh.mapper.OrderMapper;
import com.yzh.mapper.UserMapper;
import com.yzh.pojo.Item;
import com.yzh.pojo.User;
import com.yzh.pojo.UserTagsScore;
import com.yzh.service.ItemService;
import com.yzh.common.utils.*;

import java.util.*;

import com.yzh.vo.ItemUserVO;
import com.yzh.vo.ItemVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/23 23:47
 */
@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemMapper itemMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private OrderMapper orderMapper;

    //添加事务，保证操作的整体性
    @Transactional
    @Override
    public void addItem(Item item) {
        //物品上传时间与更新时间处理
        item.setCreateTime(LocalDateTime.now());
        item.setUpdateTime(LocalDateTime.now());
        item.setPageFlag(0);
        //物品首页存储到item中
        item.setImage(item.getImgList()[0]);

        itemMapper.insertItem(item);

        //插入物品对应的多张图片,除去第一张
        for (int i = 1; i < item.getImgList().length; i++) {
            itemMapper.insertImage(item.getImgList()[i], item.getId());
        }
    }


    @Override
    public List<Item> getItemList(String token, List<Item> itemList, Integer mode, Integer tag, Integer itemId) {
        //获取到前端已有物品的id的list
        Set<Integer> idSet = null;
        if (itemList != null && itemList.size() != 0) {
            idSet = itemList.stream()
                    .map(Item::getId)
                    .collect(Collectors.toSet());
            System.out.println("Set集合中的id属性值：" + idSet);
        }

        List<Item> itemListResult = new ArrayList<>();
        //用户登陆了就使用推荐
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");

            //根据用户的openid在user_tags_score表中数据
            UserTagsScore userTagsScore = itemMapper.getUserTagsScore(openId);

            if (userTagsScore != null) {
                //获取到当前用户的偏好向量
                Integer[] userTagsArray = new Integer[0];
                try {
                    userTagsArray = UserTagsArray.getUserTagsArray(userTagsScore);
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
//                System.out.println("用户的喜好向量：" + Arrays.toString(userTagsArray));

                if (itemId != 0) {
                    tag = itemMapper.getItemDetail(itemId).getTag();
                }
                //数据库中随机获取itemRandomList
                List<Item> itemRandomList = itemMapper.getItemList(mode, tag, idSet, itemId);
                System.out.println("打印算法过滤前获取到的items" + itemRandomList);

                //每个物品与当前用户的相似度，key是当前物品的index,value是相似度
                Map<Integer, Double> userItemSimilarity = new HashMap<>();

                for (int i = 0; i < itemRandomList.size(); i++) {
                    //将itemRandomList中的每一个item转化为物品标签向量
                    Integer[] itemTagsArray = ItemTagsArray.getItemTagsArray(itemRandomList.get(i));
//                System.out.println("物品" + i + "的tags标签向量：" + Arrays.toString(itemTagsArray));

                    // item标签向量与用户的偏好向量计算相似性，存到map中
                    userItemSimilarity.put(i, CosineSimilarity.cosineSimilarity(userTagsArray, itemTagsArray));
                }
                System.out.println("tags——similar中map对象的相似度" + userItemSimilarity);

                //根Map中key获取map中相似度最高的物品
                // 按照 Map 的 value 值从大到小排序并返回前5个最大的 value对应的key(index)
                List<Integer> top3Index = userItemSimilarity.entrySet().stream()
                        .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                        .limit(5)
                        .map(Map.Entry::getKey)
                        .collect(Collectors.toList());
                System.out.println("相似度最近的物品index" + top3Index);

                //取相似度最高的5个产品，返回给后端
                for (Integer i : top3Index) {
                    itemListResult.add(itemRandomList.get(i));
                }
                System.out.println("打印经推荐算法过滤后返回给后端的items" + itemListResult);
                return itemListResult;
            }
        }

        // 下面是默认token为null,即用户未登录时，随机获取6条物品数据
        itemListResult = itemMapper.getItemList(mode, tag, idSet, itemId);
        return itemListResult;
    }

    @Override
    public ItemVO getItemDetail(String token, Integer itemId) {
        //获取物品信息和图片
        Item itemDetail = itemMapper.getItemDetail(itemId);
        List<String> itemImages = itemMapper.getItemImages(itemId);

        if (token != null && !token.equals("")) {
            //根据该物品信息获取用户增加的偏好值
            UserTagsScore userTagsScores = UpdatePreference.updatePreference(token, itemDetail, 1);
            //增加偏好值
            userMapper.updateTagsScore(userTagsScores);
            System.out.println("查看物品增加了用户偏好值");
        }
        return new ItemVO(itemDetail, itemImages);
    }

    @Override
    public List<Item> getUserItems(String token, Integer mode) {
        List<Item> userItemList = new ArrayList<>();
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");

            //获取物品列表
            userItemList = itemMapper.getUserItemList(openId, mode);
        }
        return userItemList;
    }

    @Override
    public List<Item> searchItems(String token, Integer mode, String keywords) {
        //list按照搜索相似度排列从大到小排列
        List<Item> itemList = itemMapper.searchItems(mode, keywords);

        //根据用户搜索的的物品list中最相近的物品(第一个)，为用户增加偏好度
        if (token != null && !token.equals("") && itemList != null && itemList.size() != 0) {
            UpdatePreference.updatePreference(token, itemList.get(0), 2);
        }
        return itemList;
    }

    @Override
    public void collectItem(String token, Integer itemId) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");

            itemMapper.insertCollectItem(openId, itemId);
        }
    }

    @Override
    public Integer getCollect(String token, Integer itemId) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");

            return itemMapper.selectCollectItem(openId, itemId);
        }
        return 0;
    }

    @Override
    public void delCollectItem(String token, Integer itemId) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");

            itemMapper.deleteCollectItem(openId, itemId);
        }
    }

    @Override
    public List<ItemUserVO> getCollectItemList(String token) {
        List<ItemUserVO> collectItemList = new ArrayList<>();
        ItemVO itemVO = null;
        User user = null;
        Integer itemStatus = 0;
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");

            List<Integer> itemIdList = itemMapper.selectAllCollectItem(openId);
            for (Integer itemId : itemIdList) {
                //new一个ItemUserVO容器，并将每一个都放入list中
                ItemUserVO itemUserVO = new ItemUserVO();
                //获取物品信息和图片
                Item itemDetail = itemMapper.getItemDetail(itemId);
                List<String> itemImages = itemMapper.getItemImages(itemId);
                itemVO = new ItemVO(itemDetail, itemImages);
                //获取用户信息
                user = userMapper.selectOpenId(itemVO.getItem().getOwnerUid());
                if (itemMapper.selectCollectItem(openId, itemId) == 1) {
                    itemStatus = 1;
                }
                //填充itemUserVO
                itemUserVO.setItemVO(itemVO);
                itemUserVO.setUser(user);
                itemUserVO.setItemStatus(itemStatus);
                //放进list中
                collectItemList.add(itemUserVO);
            }
        }

        return collectItemList;
    }

    @Override
    public void itemOffShelf(String token, Integer itemId) {
        if (token != null && !token.equals("")) {
            //解析前端token,获取用户openid
            Map<String, Object> itemUser = JwtUtils.parseJWT(token);
            String openId = (String) itemUser.get("openId");
            itemMapper.updateItemStatus(openId,itemId);
        }

    }
}
