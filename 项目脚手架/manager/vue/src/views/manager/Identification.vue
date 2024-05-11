<template>
  <div>
    <div style="display: flex; justify-content: center; margin-top: 10px;">
      <div style="width: 90%;">
        <div class="card">
          <div style="margin-bottom: 30px; font-size: 20px; font-weight: bold">资历验证</div>

          <div class="table">
            <el-table :data="tableData" stripe>
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column prop="id" label="序号" width="80" align="center" sortable></el-table-column>

              <el-table-column prop="openid" label="申请人ID" show-overflow-tooltip></el-table-column>

              <el-table-column prop="corporateName" label="主体名称"></el-table-column>

              <el-table-column prop="belong" label="归属地"></el-table-column>

              <el-table-column prop="code" label="社会信用代码"></el-table-column>

              <el-table-column prop="image" label="营业执照" align="center">
                <template slot-scope="{ row }">
                  <el-image style="width: auto; height: 100px; border: none; cursor: pointer" :src="row.image"
                    @click="showImageDialog(row.image)">
                  </el-image>
                </template>
              </el-table-column>

              <el-table-column prop="createTime" label="申请时间">
                <template slot-scope="{ row }">
                  {{ formatUpdateTime(row.createTime) }}
                </template>
              </el-table-column>

              <el-table-column label="操作" width="180" align="center">
                <template v-slot="scope">
                  <el-button v-if="scope.row.status == 0" plain type="primary" @click="handleIdentification(scope.row)"
                    size="mini">处理</el-button>

                  <el-button v-if="scope.row.status == 1" plain type="primary" size="mini">已通过</el-button>
                  <el-button v-if="scope.row.status == 2" plain type="primary" size="mini">已拒绝</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 放大图片的dialog -->
            <el-dialog :visible.sync="imageDialogVisible" width="40%">
              <el-image :src="selectedImage" style="width: 100%"></el-image>
            </el-dialog>

            <!-- 处理的dialog -->
            <el-dialog :visible.sync="handleDialogVisible" width="30%">
              <div class="title1" style="font-weight: bold; font-size: 1.2em; margin-top: 1px; ">处理结果</div>
              <div class="wenjv1">
                是否通过该用户的资历申请？
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button @click="submitResult(2)">拒绝</el-button>
                <el-button @click="submitResult(1)" type="primary">通过</el-button>
              </div>
            </el-dialog>

            <!-- 分页栏 -->
            <div class="pagination">
              <el-pagination background @current-change="handleCurrentChange" :current-page="pageNum"
                :page-sizes="[5, 10, 20]" :page-size="pageSize" layout="total, prev, pager, next" :total="total">
              </el-pagination>
            </div>
          </div>

        </div>
      </div>
    </div>




  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      result: '',
      identificationId: '',
      openid: '',
      handleDialogVisible: false, // 控制对话框的显示状态
      imageDialogVisible: false, // 控制对话框的显示状态
      selectedImage: '', // 存储被点击的图片的 URL
      identificationList: '',
      user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
      tableData: [],  // 所有的数据
      pageNum: 1,   // 当前的页码
      pageSize: 10,  // 每页显示的个数
      total: 0, //总数
      title: null,
      fromVisible: false,
      form: {},
    }
  },
  created() {
    this.load(1);
  },
  computed: {

  },
  methods: {
    //格式化时间格式
    formatUpdateTime(updateTime) {
      if (!updateTime) return '';
      return updateTime.replace('T', ' '); // 使用 'T' 进行分割，取前半部分
    },
    // 申诉处理
    handleIdentification(row) {
      this.handleDialogVisible = true;
      this.openid = row.openid
      this.identificationId = row.id;
    },
    showImageDialog(imageUrl) {
      // 点击图片时触发，设置对话框的显示状态为 true，并存储被点击的图片的 URL
      this.imageDialogVisible = true;
      this.selectedImage = imageUrl;
    },
    submitResult(status) {
      this.$request.get('/complaint/submitResult', {
        params: {
          id: this.identificationId,
          openid: this.openid,
          status: status
        }
      }).then(res => {
        this.handleDialogVisible = false;
        //展示处理成功
        this.load(1)
      })
    },
    // 分页查询
    load(pageNum) {
      if (pageNum) this.pageNum = pageNum
      this.$request.get('/complaint/selectIdenPage', {
        params: {
          status: this.status,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          title: this.title,
        }
      }).then(res => {
        this.tableData = res.data?.list
        console.log("打印这个数据：" + this.tableData)
        this.total = res.data?.total
        // this.complaintList = res.data.list;
      })
    },
    // 重新加载
    reset() {
      this.title = null
      this.load(1)
    },
    handleCurrentChange(pageNum) {
      this.load(pageNum)
    },
    // 选项卡切换
    handleClick(tab, event) {
      this.load(1)
    },
  }
}
</script>
<style>
.title1 {
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 1px;
  margin-left: 10px;
  /* 调整左边距 */
}

.wenjv1 {
  text-align: center;
  /* 文本居中 */
}
</style>