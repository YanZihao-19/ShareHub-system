<template>
  <div>
    <div class="search">
      <el-input placeholder="请输入关键字查询" style="width: 200px" v-model="id"></el-input>
      <el-button type="info" plain style="margin-left: 10px" @click="load(1)">查询</el-button>
      <el-button type="warning" plain style="margin-left: 10px" @click="reset">重置</el-button>
    </div>

    <div class="operation">
      <el-button type="primary" plain @click="handleAdd">新增</el-button>
      <el-button type="danger" plain @click="delBatch">批量下架</el-button>
    </div>

    <div class="table">
      <el-table :data="tableData" strip @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="id" label="序号" width="70" align="center" sortable></el-table-column>
        <el-table-column prop="itemTitle" label="物品标题">
          <template slot-scope="{ row }">
            <div class="truncate-text">{{ row.itemTitle }}</div>
          </template>
        </el-table-column>

        <el-table-column prop="itemDesc" label="物品描述">
          <template slot-scope="{ row }">
            <div class="truncate-text">{{ row.itemDesc }}</div>
          </template>
        </el-table-column>

        <el-table-column prop="image" label="图片" align="center">
          <template slot-scope="{ row }">
            <el-image style="width: auto; height: 100px; border: none; cursor: pointer" :src="row.image"
              @click="showImageDialog(row.image)"></el-image>
          </template>
        </el-table-column>

        <el-table-column prop="tag" label="物品种类">
          <template slot-scope="{ row }">
            {{ getTagLabel(row.tag) }}
          </template>
        </el-table-column>

        <el-table-column prop="tradeMode" label="交易模式">
          <template slot-scope="{ row }">
            <span :style="{ color: getTradeModeColor(row.tradeMode) }">{{ getTradeModeLabel(row.tradeMode) }}</span>
          </template>
        </el-table-column>


        <el-table-column prop="deliveryStyle" label="交付方式">
          <template slot-scope="{ row }">
            <span>{{ getDeliveryStyleLabel(row.deliveryStyle) }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="status" label="物品状态">
          <template slot-scope="{ row }">
            <span>{{ getStatusLabel(row.status) }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="updateTime" label="上传时间">
          <template slot-scope="{ row }">
            {{ formatUpdateTime(row.updateTime) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="180">
          <template v-slot="scope">
            <el-button size="mini" type="primary" plain @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" plain @click="del(scope.row.id)">下架</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :visible.sync="imageDialogVisible" width="50%">
        <el-image :src="selectedImage" style="width: 100%"></el-image>
      </el-dialog>

      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" :current-page="pageNum"
          :page-sizes="[5, 10, 20]" :page-size="pageSize" layout="total, prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </div>

    <el-dialog title="管理物品" :visible.sync="fromVisible" width="40%" :close-on-click-modal="false" destroy-on-close>
      <el-form :model="form" label-width="100px" style="padding-right: 50px" :rules="rules" ref="formRef">
        <el-form-item label="物品标题" prop="itemTitle">
          <el-input v-model="form.itemTitle" placeholder="物品标题"></el-input>
        </el-form-item>
        <el-form-item label="物品描述" prop="itemDesc">
          <el-input v-model="form.itemDesc" placeholder="物品描述"></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="image">
          <el-input v-model="form.image" placeholder="图片"></el-input>
        </el-form-item>
        <el-form-item label="物品种类" prop="tag">
          <el-input v-model="form.tag" placeholder="物品种类"></el-input>
        </el-form-item>
        <el-form-item label="交易模式" prop="tradeMode">
          <el-input v-model="form.tradeMode" placeholder="交易模式"></el-input>
        </el-form-item>
        <el-form-item label="交付方式" prop="deliveryStyle">
          <el-input v-model="form.deliveryStyle" placeholder="交付方式"></el-input>
        </el-form-item>
        <el-form-item label="物品状态" prop="status">
          <el-input v-model="form.status" placeholder="物品状态"></el-input>
        </el-form-item>
        <el-form-item label="上传时间" prop="updateTime">
          <el-input v-model="form.updateTime" placeholder="创建时间"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="fromVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>
<script>
export default {
  name: "ManageItem",
  data() {
    return {
      imageDialogVisible: false, // 控制对话框的显示状态
      selectedImage: '', // 存储被点击的图片的 URL
      tableData: [],  // 所有的数据
      pageNum: 1,   // 当前的页码
      pageSize: 5,  // 每页显示的个数
      total: 0,
      id: null,
      fromVisible: false,
      form: {},
      user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
      rules: {
      },
      ids: []
    }
  },
  computed: {
    getTradeModeLabel() {
      return tradeMode => {
        switch (tradeMode) {
          case 0:
            return '免费共享';
          case 1:
            return '以物换物';
          case 2:
            return '二手出售';
          default:
            return '其他';
        }
      };
    },
    getTagLabel() {
      return tag => {
        switch (tag) {
          case 1:
            return '电子产品';
          case 2:
            return '美妆用品';
          case 3:
            return '图书';
          case 4:
            return '数码影音';
          case 5:
            return '家居日用';
          case 6:
            return '儿童玩具';
          case 7:
            return '宠物用品';
          case 8:
            return '男装';
          case 9:
            return '女装';
          case 10:
            return '母婴用品';
          case 11:
            return '运动户外';
          case 12:
            return '家用电器';
          case 13:
            return '家纺家具';
          case 14:
            return '其他';
          default:
            return '其他';
        }
      };
    }
  },
  created() {
    this.load(1)
  },
  methods: {
    formatUpdateTime(updateTime) {
      if (!updateTime) return '';
      return updateTime.split('T')[0]; // 使用 'T' 进行分割，取前半部分
    },
    getStatusLabel(status) {
      switch (status) {
        case 0:
          return '待出售';
        case 1:
          return '已交易';
        case 2:
          return '已下架';
        default:
          return '其他';
      }
    },
    getDeliveryStyleLabel(deliveryStyle) {
      switch (deliveryStyle) {
        case 0:
          return '任意';
        case 1:
          return '自提';
        case 2:
          return '同城面交';
        case 3:
          return '邮寄';
        default:
          return '其他';
      }
    },
    //颜色处理
    getTradeModeColor(tradeMode) {
      switch (tradeMode) {
        case 0:
          return '#67C23A';
        case 1:
          return '#409EFF';
        case 2:
          return '#E6A23C';
        default:
          return 'inherit';
      }
    },
    handleAdd() {   // 新增数据
      this.form = {}  // 新增数据的时候清空数据
      this.fromVisible = true   // 打开弹窗
    },
    handleEdit(row) {   // 编辑数据
      this.form = JSON.parse(JSON.stringify(row))  // 给form对象赋值  注意要深拷贝数据
      this.fromVisible = true   // 打开弹窗
    },
    save() {   // 保存按钮触发的逻辑  它会触发新增或者更新
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.$request({
            url: this.form.id ? '/manageItem/update' : '/manageItem/add',
            method: this.form.id ? 'PUT' : 'POST',
            data: this.form
          }).then(res => {
            if (res.code == '1') {  // 表示成功保存
              this.$message.success('保存成功')
              this.load(1)
              this.fromVisible = false
            } else {
              this.$message.error(res.msg)  // 弹出错误的信息
            }
          })
        }
      })
    },
    del(id) {   // 单个删除
      this.$confirm('您确定下架吗？', '确认下架', { type: "warning" }).then(response => {
        this.$request.delete('/manageItem/delete/' + id).then(res => {
          if (res.code == '1') {   // 表示操作成功
            this.$message.success('操作成功')
            this.load(1)
          } else {
            this.$message.error(res.msg)  // 弹出错误的信息
          }
        })
      }).catch(() => {
      })
    },
    handleSelectionChange(rows) {   // 当前选中的所有的行数据
      this.ids = rows.map(v => v.id)
    },
    showImageDialog(imageUrl) {
      // 点击图片时触发，设置对话框的显示状态为 true，并存储被点击的图片的 URL
      this.imageDialogVisible = true;
      this.selectedImage = imageUrl;
    },
    delBatch() {   // 批量删除
      if (!this.ids.length) {
        this.$message.warning('请选择数据')
        return
      }
      this.$confirm('您确定批量删除这些数据吗？', '确认删除', { type: "warning" }).then(response => {
        this.$request.delete('/manageItem/delete/batch', { data: this.ids }).then(res => {
          if (res.code == '1') {   // 表示操作成功
            this.$message.success('操作成功')
            this.load(1)
          } else {
            this.$message.error(res.msg)  // 弹出错误的信息
          }
        })
      }).catch(() => {
      })
    },
    load(pageNum) {  // 分页查询
      if (pageNum) this.pageNum = pageNum
      this.$request.get('/manageItem/selectPage', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          id: this.id,
        }
      }).then(res => {
        if (res.code == '1') {
          this.tableData = res.data?.list
          this.total = res.data?.total
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    reset() {
      this.id = null
      this.load(1)
    },
    handleCurrentChange(pageNum) {
      this.load(pageNum)
    },
  }
}
</script>

<style scoped>
.truncate-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>