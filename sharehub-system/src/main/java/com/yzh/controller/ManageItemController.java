package com.yzh.controller;

import com.yzh.pojo.Item;
import com.yzh.pojo.Result;
import com.yzh.service.ManageItemService;
import com.github.pagehelper.PageInfo;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 管理物品前端操作接口
 **/
@RestController
@RequestMapping("/manageItem")
public class ManageItemController {

    @Resource
    private ManageItemService manageItemService;

    /**
     * 新增
     */
    @PostMapping("/add")
    public Result add(@RequestBody Item item) {
        manageItemService.add(item);
        return Result.success();
    }

    /**
     * 删除
     */
    @DeleteMapping("/delete/{id}")
    public Result deleteById(@PathVariable Integer id) {
        manageItemService.deleteById(id);
        return Result.success();
    }

    /**
     * 批量删除
     */
    @DeleteMapping("/delete/batch")
    public Result deleteBatch(@RequestBody List<Integer> ids) {
        manageItemService.deleteBatch(ids);
        return Result.success();
    }

    /**
     * 修改
     */
    @PutMapping("/update")
    public Result updateById(@RequestBody Item item) {
        manageItemService.updateById(item);
        return Result.success();
    }

    /**
     * 根据ID查询
     */
    @GetMapping("/selectById/{id}")
    public Result selectById(@PathVariable Integer id) {
        Item item = manageItemService.selectById(id);
        return Result.success(item);
    }

    /**
     * 查询所有
     */
    @GetMapping("/selectAll")
    public Result selectAll(Item item) {
        List<Item> list = manageItemService.selectAll(item);
        return Result.success(list);
    }

    /**
     * 分页查询
     */
    @GetMapping("/selectPage")
    public Result selectPage(Item item,
                             @RequestParam(defaultValue = "1") Integer pageNum,
                             @RequestParam(defaultValue = "5") Integer pageSize) {
        PageInfo<Item> page = manageItemService.selectPage(item, pageNum, pageSize);
        return Result.success(page);
    }

}