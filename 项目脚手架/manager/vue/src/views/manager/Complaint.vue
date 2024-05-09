<template>
  <div>
    <!-- <div class="card" style="padding: 15px;width:90%;">
      您好，{{ user.name }}！您有新的事务待处理！
    </div> -->

    <div style="display: flex; justify-content: center; margin-top: 10px;">
      <div style="width: 90%;">
        <div class="card">
          <div style="margin-bottom: 30px; font-size: 20px; font-weight: bold">待处理事务</div>
          <template>
            <el-tabs v-model="status" @tab-click="handleClick">
              <el-tab-pane label="物品举报" name="1"></el-tab-pane>
              <el-tab-pane label="用户举报" name="2"></el-tab-pane>
              <el-tab-pane label="订单申诉" name="3"></el-tab-pane>
            </el-tabs>
          </template>

          <div class="table">
            <el-table :data="tableData" stripe @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column prop="id" label="序号" width="80" align="center" sortable></el-table-column>
              <el-table-column prop="reason" label="理由" show-overflow-tooltip></el-table-column>


              <!-- 其他列 -->
              <el-table-column prop="image" label="证明" align="center">
                <template slot-scope="{ row }">
                  <el-image style="width: auto; height: 100px; border: none; cursor: pointer" :src="row.image"
                    @click="showImageDialog(row.image)">
                  </el-image>
                </template>
              </el-table-column>
              <el-table-column prop="userId1" label="申诉者ID"></el-table-column>
              <el-table-column prop="userId2" label="被申诉者ID"></el-table-column>
              <el-table-column prop="createTime" label="申诉时间"></el-table-column>

              <el-table-column label="操作" width="180" align="center">
                <template v-slot="scope">
                  <el-button v-if="scope.row.result == null || scope.row.result == ''" plain type="primary"
                    @click="handleComplaint(scope.row)" size="mini">处理</el-button>

                  <el-button v-else plain type="primary" size="mini">已处理</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 放大图片的dialog -->
            <el-dialog :visible.sync="imageDialogVisible" width="40%">
              <el-image :src="selectedImage" style="width: 100%"></el-image>
            </el-dialog>

            <!-- 处理的dialog -->
            <el-dialog :visible.sync="handleDialogVisible" width="50%">
              <div style="font-weight: bold; font-size: 1.2em; border-bottom: 15px ">处理结果</div>
              <el-input type="textarea" :rows="8" placeholder="请输入处理结果..." v-model="result">
              </el-input>
              <div slot="footer" class="dialog-footer">
                <el-button @click="handleDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitResult">确 定</el-button>
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
      complaintId:'',
      handleDialogVisible: false, // 控制对话框的显示状态
      imageDialogVisible: false, // 控制对话框的显示状态
      selectedImage: '', // 存储被点击的图片的 URL
      complaintList: '',
      user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
      status: '1', //选项卡标志
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
    this.$request.get('/notice/selectAll').then(res => {
      this.notices = res.data || []
    })
  },
  computed: {

  },
  methods: {
    // 申诉处理
    handleComplaint(row) {
      this.handleDialogVisible = true;
      this.complaintId = row.id;
    },
    showImageDialog(imageUrl) {
      // 点击图片时触发，设置对话框的显示状态为 true，并存储被点击的图片的 URL
      this.imageDialogVisible = true;
      this.selectedImage = imageUrl;
    },
    submitResult() {
      this.$request.get('/complaint/handleComplaint', {
        params: {
          id: this.complaintId,
          result: this.result,
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
      this.$request.get('/complaint/selectPage', {
        params: {
          status: this.status,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          title: this.title,
        }
      }).then(res => {
        this.tableData = res.data?.list
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
