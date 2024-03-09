<template>
	<view>
		<form @submit="formSubmit" @reset="">
			<!-- 标题 -->
			<view class="cu-form-group margin-top">
				<view class="title">标题</view>
				<input v-model="formMsg.itemTitle" name="title" placeholder="品类品牌型号都是买家喜欢搜索的"></input>
			</view>
			<!-- end -->

			<!-- 内容 -->
			<view class="cu-form-group margin-top">
				<textarea v-model="formMsg.itemDesc" name="content" maxlength="1000"
					placeholder="描述宝贝新旧程度,注意事项和使用感受,以及意向共享人群"></textarea>
			</view>
			<!-- end -->

			<!-- 图片 -->
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{formMsg.imgList.length}}/3
				</view>
			</view>

			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in formMsg.imgList" :key="index" @tap="ViewImage"
						:data-url="formMsg.imgList[index]">

						<image :src="formMsg.imgList[index]" mode='aspectFill'></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class="cuIcon-close"></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="formMsg.imgList.length < 3">
						<text class="cuIcon-cameraadd"></text>
					</view>

				</view>
			</view>
			<!-- end -->

			<!-- 地址选择 -->
			<view class="cu-form-group">
				<view class="title">地址选择</view>
				<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex"
					:range="multiArray">
					<view class="picker">
						{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}

					</view>
				</picker>
			</view>
			<!-- end -->

			<!-- 价钱 -->
			<view class="cu-form-group margin-top">
				<view class="title">出售价:</view>
				<input type="digit" :value="formMsg.sellPrice" disabled="true" @click="preventClick"
					maxlength="7"></input>

				<view class="title">原价:</view>
				<input type="digit" @input="newInput" :value="formMsg.originalPrice" placeholder="请输入原价" maxlength='7'
					name="oriPrice"></input>
			</view>
			<!-- end -->

			<!-- 选择分类  -->
			<view class="cu-form-group">
				<view class="title">分类:</view>
				<input disabled="true" name="classify" :value='classify'></input>
				<button class="cu-btn  bg-green" role="button" aria-disabled="false" @tap="showModal"
					data-target="DrawerModalL">选择</button>
			</view>
			<!-- end -->

			<!-- 新旧 -->
			<view class="cu-form-group">
				<view class="title">新旧:</view>
				<input disabled="true" name="itemLists" :value='itemLists[formMsg.usageLevel]'></input>
				<button class="cu-btn  bg-green" role="button" aria-disabled="false" @tap="newState">选择</button>
			</view>
			<!-- end -->
			<view class="cu-form-group">
				<view class="title">适合人群： </view>
				<!-- <radio-group name="means" @change="radioChange">
					<radio value="0">任意</radio>
					<radio value="1">儿童</radio>
					<radio value="2">成年人</radio>
					<radio value="3">老年人</radio>
				</radio-group> -->
				<uv-radio-group v-model="formMsg.suit">
					<uv-radio :customStyle="{marginRight: '10px'}" v-for="(item, index) in radioSuit" :key="index"
						:label="item.name" :name="item.value">
					</uv-radio>
				</uv-radio-group>
			</view>

			<view class="cu-form-group">
				<view class="title">交易方式：</view>
				<!-- <radio-group name="means" @change="radioChange">
					<radio value="0">自提</radio>
					<radio value="1">同城面交</radio>
					<radio value="2">邮寄</radio>
				</radio-group> -->
				<uv-radio-group v-model="formMsg.deliveryStyle">
					<uv-radio :customStyle="{marginRight: '10rpx'}" v-for="(item, index) in radioTrade" :key="index"
						:label="item.name" :name="item.value">
					</uv-radio>
				</uv-radio-group>
			</view>
			<!-- end -->


			<!-- 确定发布 -->
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green margin-tb-sm lg" form-type="submit">确定发布</button>
			</view>
			<!-- end -->
		</form>

		<!-- 模态框 -->
		<view @touchmove.stop="modeMove" class=" cu-modal drawer-modal justify-start "
			:class=" modalName == 'DrawerModalL'?'show':'' " @tap="hideModal">
			<scroll-view scroll-with-animation='true' scroll-y='true' class="cu-dialog basis-lg">
				<view class="cu-list menu text-left">
					<view class="cu-item " v-for=" (item,index) in  picker" :key="index" @tap="getClassify"
						:data-name="item.classify_name" :data-value="item.tag">
						<view class="content">
							<view>{{item.classify_name}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import allSchool from "../../../common/allSchool.js";
	export default {
		data() {
			return {
				formMsg: {
					ownerUid: 'opwm66yu9D_BIoZcSaF4Pjdv8VuA', //暂时还未设置新增用户，故先默认设置
					itemTitle: '', //物品标题
					itemDesc: '', //物品描述
					imgList: [], //图片列表
					address: '', //地址选择下标拼接的字符串
					sellPrice: '0', //出售价
					originalPrice: '', //原价
					tag: '', //物品种类
					usageLevel: '0', //新旧程度（默认全新），对应itemList数组的标
					deliveryStyle: '', //交送方式（）
					tradeMode: '0', //交易模式我免费共享
					status: '0' //物品状态（0待交易，1以交易，2已下架）
				},

				multiIndex: [0, 0, 0], //地址选择下标

				itemLists: ['全新', '99新', '95新', '85新', '8新'], //几次新
				modalName: '', //模态框开关
				radioTrade: [{
						name: "任意",
						value: 0,
						disabled: false
					},
					{
						name: "自提",
						value: 1,
						disabled: false
					},
					{
						name: "面交",
						value: 2,
						disabled: false
					},
					{
						name: "邮寄",
						value: 3,
						disabled: false
					}
				],
				radioSuit: [{
						name: '任意',
						value: 0,
						disabled: false
					},
					{
						name: '儿童',
						value: 1,
						disabled: false
					},
					{
						name: '成人',
						value: 2,
						disabled: false
					},
					{
						name: '老人',
						value: 3,
						disabled: false
					}
				],
				classify: '其他闲置', //分类选择默认
				picker: [{
					tag: 1,
					classify_name: '电子产品'
				}, {
					tag: 2,
					classify_name: '美妆用品'
				}, {
					tag: 3,
					classify_name: '图书'
				}, {
					tag: 4,
					classify_name: '数码影音'
				}, {
					tag: 5,
					classify_name: '家居日用'
				}, {
					tag: 6,
					classify_name: '儿童玩具'
				}, {
					tag: 7,
					classify_name: '宠物用品'
				}, {
					tag: 8,
					classify_name: '男装'
				}, {
					tag: 9,
					classify_name: '女装'
				}, {
					tag: 10,
					classify_name: '母婴用品'
				}, {
					tag: 11,
					classify_name: '运动户外'
				}, {
					tag: 12,
					classify_name: '家用电器'
				}, {
					tag: 13,
					classify_name: '家纺家具'
				}, {
					tag: 14,
					classify_name: '其他'
				}],
				multiArray: [
					['北京市', '重庆市', '福建省', '江苏省', '广东省', '辽宁省', '内蒙古', '山西省', '青海省', '四川省', '贵州省', '云南省', '陕西省', '西藏',
						'宁夏', '新疆', '广西', '海南省', '湖南省', '湖北省', '河南省', '山东省', '江西省', '安徽省', '浙江省', '上海', '黑龙江省', '吉林省',
						'甘肃省', '天津市', '河北省'
					],
					['北京市'],
					['北京大学', '中国人民大学', '清华大学', '北京交通大学', '北京工业大学', '北京航空航天大学', '北京理工大学', '北京科技大学', '北方工业大学', '北京化工大学',
						'北京工商大学', '北京服装学院', '北京邮电大学', '北京印刷学院', '北京建筑大学', '北京石油化工学院', '北京电子科技学院', '中国农业大学', '北京农学院',
						'北京林业大学', '北京协和医学院', '首都医科大学', '北京中医药大学', '北京师范大学', '首都师范大学', '首都体育学院', '北京外国语大学', '北京第二外国语学院',
						'北京语言大学', '中国传媒大学', '中央财经大学', '对外经济贸易大学', '北京物资学院', '首都经济贸易大学', '外交学院', '中国人民公安大学', '国际关系学院',
						'北京体育大学', '中央音乐学院', '中国音乐学院', '中央美术学院', '中央戏剧学院', '中国戏曲学院', '北京电影学院', '北京舞蹈学院', '中央民族大学',
						'中国政法大学', '华北电力大学', '中华女子学院', '北京信息科技大学', '中国矿业大学（北京）', '中国石油大学（北京）', '中国地质大学（北京）', '北京联合大学',
						'北京城市学院', '中国青年政治学院', '首钢工学院', '中国劳动关系学院', '北京吉利学院', '首都师范大学科德学院', '北京工商大学嘉华学院', '北京邮电大学世纪学院',
						'北京工业大学耿丹学院', '北京警察学院', '北京第二外国语学院中瑞酒店管理学院', '北京工业职业技术学院', '北京信息职业技术学院', '北京电子科技职业学院',
						'北京京北职业技术学院', '北京交通职业技术学院', '北京青年政治学院', '北京农业职业学院', '北京政法职业学院', '北京财贸职业学院', '北京北大方正软件职业技术学院',
						'北京经贸职业学院', '北京经济技术职业学院', '北京戏曲艺术职业学院', '北京汇佳职业学院', '北京科技经营管理学院', '北京科技职业学院', '北京培黎职业学院',
						'北京经济管理职业学院', '北京劳动保障职业学院', '北京社会管理职业学院', '北京艺术传媒职业学院', '北京体育职业学院', '北京交通运输职业学院', '北京卫生职业学院',
						'北京网络职业学院', '其他'
					]
				], //默认选择地址
				region: ['四川省', '成都市', '成都大学'], //选择地址
			}
		},
		methods: {

			// 选择地址
			MultiChange(e) {
				this.multiIndex = e.detail.value
				const coordinateString = this.coordinateToString(this.multiIndex);
				this.formMsg.address = coordinateString;
				// console.log('转换后的坐标字符串:', coordinateString);
			},

			//滑动地址列表，其他列改变对应值
			MultiColumnChange(e) {
				var that = this;
				allSchool.all(e, that);
			},

			// 定义坐标转换函数
			coordinateToString(coordinate) {
				return coordinate.join(',');
			},
			// end
			// 图片上传
			ChooseImage() {
				if (this.formMsg.imgList.length >= 3) {
					uni.showToast({
						title: '最多只能上传3张图片',
						icon: 'none'
					});
					return; // 如果已经上传了3张图片，则直接返回，不再执行上传操作
				}
				uni.chooseImage({
					count: 3 - this.formMsg.imgList.length, // 计算还能上传的图片数量
					sizeType: ['compressed'], //采用图片压缩
					sourceType: ['album'],
					success: (chooseImageRes) => {
						//上传到oss服务器的代码：
						//本地图片临时路径
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							// 生成 UUID
							url: 'http://localhost:8080/upload?flag=items',
							filePath: tempFilePaths[0],
							name: 'image',
							formData: {
								'token': 'test'
							},
							success: (uploadFileRes) => {
								//接收后端返回的数据并转为json格式
								let imgData = JSON.parse(uploadFileRes.data);
								//将后端返回的url，追加到formMsg.imgList中
								this.formMsg.imgList = this.formMsg.imgList.concat(imgData.data);
								console.log(this.formMsg.imgList);
							}
						});
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.formMsg.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			// 删除照片
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除这个照片吗？',
					cancelText: '再看看',
					confirmText: '删除',
					success: res => {
						if (res.confirm) {
							this.formMsg.imgList.splice(e.currentTarget.dataset.index, 1);
							this.formMsg.imgList = this.formMsg.imgList
						}
					}
				})
			},

			//提醒用户不可设置售价
			preventClick() {
				// 点击事件处理程序，防止输入框被点击
				uni.showToast({
					title: '共享物品售价为0',
					icon: 'none'
				});
			},

			//原价验证
			newInput: function(e) {
				var money;
				if (/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)) { //正则验证，提现金额小数点后不能大于两位数字
					money = e.detail.value;
				} else {
					money = e.detail.value.substring(0, e.detail.value.length - 1);
				}
				this.formMsg.originalPrice = money;
			},


			// 选择交送方式
			radioChange(e) {
				this.formMsg.deliveryStyle = e.mp.detail.value;
				console.log(this.formMsg.deliveryStyle)
			},


			// 新旧程度
			newState: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.itemLists,
					success(e) {
						that.formMsg.usageLevel = e.tapIndex
					}
				})
			},
			// 拦截模态框滚动事件
			modeMove: function() {

			},

			// 显示分类模态框
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			// 隐藏分类模态框
			hideModal(e) {
				this.modalName = null
			},
			// 得到分类的值
			getClassify: function(e) {
				//input框中回显类名
				this.classify = e.currentTarget.dataset.name
				//传给表达
				this.formMsg.tag = e.currentTarget.dataset.value
				this.hideModal();
			},
			formSubmit() {
				console.log(this.formMsg)
				//最后处理form数据
				this.formMsg.ownerUid = this.$store.state.user.openid
				this.formMsg.status = '0'

				// 发送异步请求
				uni.request({
					url: 'http://localhost:8080/items',
					method: 'POST',
					data: JSON.stringify(this.formMsg),
					header: {
						'token': 'usertoken', // 根据实际情况设置 token
						'content-type': 'application/json' // 请求头部设置为 JSON 格式
					},
					success: (res) => {
						console.log(res);
						console.log(res.data);
						console.log(res.data.code);
						// 处理响应结果，根据实际情况进行操作
						if (res.data.code == 1) {
							// 请求成功toast
							uni.showToast({
								title: '上传成功！',
								icon: 'success',
								duration: 1500
							});
							//跳转到物品选择页
							setTimeout(function() {
								uni.switchTab({
									url: '/pages/issue/issue_select/issue_select'
								})
							}, 1000);
						} else {
							uni.showToast({
								title: '上传失败！',
								icon: 'fail',
								duration: 1500
							});
							console.log('失败！');
						}
					},
					fail: (err) => {
						uni.showToast({
							title: '上传失败！',
							icon: 'success',
							duration: 1500
						});
						console.error(err);
					}
				});
			}
		},
		onLoad(options) {

		},
		onShow() {

		},
		onHide() {

		},
		// 出发下拉刷新
		onPullDownRefresh() {
			// 模拟刷新完成
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		},

	}
</script>

<style>
	.rule {
		display: flex;
		justify-content: space-between;
	}

	.margin-top-xl-170 {
		margin-top: 170rpx;
	}
</style>