package com.yzh.mapper;

import com.yzh.pojo.User;
import com.yzh.pojo.UserTagsScore;
import com.yzh.vo.PreferenceVO;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @Author: 燕子豪
 * @Date: 2024/2/16 16:16
 */
@Mapper
public interface UserMapper {

    List<User> getUserList(String name, Short gender, Short role, Integer credibility);

    @Insert("insert into user (username, password, role, image, phone, credibility, gender, bgimage,create_time, update_time, identifyid) values" +
            " (#{username},#{password},#{role},#{image},#{phone},#{credibility},#{gender},#{bgImage},#{createTime},#{updateTime},#{identifyId})")
    void insertUser(User user);

    @Select("select * from user where id = #{id}")
    User selectById(Integer id);

    void updateUser(User user);

    void delUser(List<Integer> ids);

    @Select("select * from user where role = 0 and username= #{username} and password = #{password}")
    User selectUserByUsernameAndPassword(User user);

    @Select("select * from user where role in(1,2) and username= #{username} and password = #{password}")
    User selectUserByUsernameAndPassword2(User user);

    @Select("Select * from user where openid = #{openId}")
    User selectOpenId(String openId);

    @Insert("insert into user (openid,username, password, role, image, phone, credibility, gender, bgimage,create_time, update_time, identifyid) values" +
            " (#{openId},#{username},#{password},#{role},#{image},#{phone},#{credibility},#{gender},#{bgImage},#{createTime},#{updateTime},#{identifyId})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insertUserOpenId(User user);

    @Select("SELECT id FROM user_tags_score WHERE uid = #{openId}")
    Integer selectTagsPreferId(String openId);

    @Insert("insert into user_tags_score (uid,elect_product, beauty, book, digital, household, toy, pet_sup, menswear, womenswear, mother_and_baby, sport, appliance, furniture, other, " +
            "share, exchange,trade," +
            "allage,child,adult,old," +
            "anew,nnnew,nfnew,efnew," +
            "self_pick,hand_deliver,post) values" +
            " (#{uid},#{electProduct},#{beauty},#{book},#{digital},#{household},#{toy},#{petSup},#{menSwear},#{womenSwear},#{motherAndBaby},#{sport},#{appliance},#{furniture},#{other}," +
            "#{share},#{exchange},#{trade}," +
            "#{allAge},#{child},#{adult},#{old}," +
            "#{anew},#{nnNew},#{nfNew},#{efNew}," +
            "#{selfPick},#{handDeliver},#{post})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    Integer insertUserPreference(UserTagsScore userTagsScore);

    @Update("UPDATE user_tags_score " +
            "SET " +
            "elect_product = elect_product + #{electProduct}, " +
            "beauty = beauty + #{beauty}, " +
            "book = book + #{book}, " +
            "digital = digital + #{digital}, " +
            "household = household + #{household}, " +
            "toy = toy + #{toy}, " +
            "pet_sup = pet_sup + #{petSup}, " +
            "menswear = menswear + #{menSwear}, " +
            "womenswear = womenswear + #{womenSwear}, " +
            "mother_and_baby = mother_and_baby + #{motherAndBaby}, " +
            "sport = sport + #{sport}, " +
            "appliance = appliance + #{appliance}, " +
            "furniture = furniture + #{furniture}, " +
            "other = other + #{other}, " +
            "share = share + #{share}, " +
            "exchange = exchange + #{exchange}, " +
            "trade = trade + #{trade}, " +
            "allage = allage + #{allAge}, " +
            "child = child + #{child}, " +
            "adult = adult + #{adult}, " +
            "old = old + #{old}, " +
            "anew = anew + #{anew}, " +
            "nnnew = nnnew + #{nnNew}, " +
            "nfnew = nfnew + #{nfNew}, " +
            "efnew = efnew + #{efNew}, " +
            "self_pick = self_pick + #{selfPick}, " +
            "hand_deliver = hand_deliver + #{handDeliver}, " +
            "post = post + #{post} " +
            "WHERE uid = #{uid}")
    void increaseTagsScore(UserTagsScore userTagsScores);

}
