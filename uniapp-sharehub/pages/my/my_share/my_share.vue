<template>
	<view>
		<!-- 内容 -->
		<view class='pa'>
			<uv-sticky>
				<view style="padding: 10rpx 0;background-color: #fff;">
					<uv-tabs :list="[{ name: '全部' }, { name: '未评价' }, { name: '已评价' }]" @click="tabChange"></uv-tabs>
				</view>
			</uv-sticky>
			<view class='container bg-white shadow-warp' v-for="(orderItem, index) in orderItemList" :key="index">
				<view class='container-top'>
					<view class='container-top-1'>
						<image :src='orderItem.order.image'></image>
					</view>
					<view class='container-top-2'>
						<view class='container-top-2_1 truncate-text'>
							<text>{{orderItem.item.itemDesc}}</text>
						</view>

						<view class='container-top-2_2'>
							<view class="cu-capsule round view-width">
								<view class="cu-tag bg-blue  ">
									模式
								</view>
								<view :class="['cu-tag', tagColorClass(orderItem.item.tradeMode)]">
									{{ tradeModeText(orderItem.item.tradeMode) }}
								</view>
							</view>
						</view>

						<view><text class='cuIcon-time lg text-gray'></text><text
								class='text-xxm'>{{handleStr(orderItem.order.updateTime)}}</text>
						</view>
					</view>
				</view>

				<view class='container-line'></view>

				<view class='container-under'>
					<view class='container-under-1'><text v-if="orderItem.order.hscore == 0"
							class='cuIcon-remind font-size-lg text-black '></text>
						<text v-if="orderItem.order.hscore == 0" class='text-sm text-black'>1天3小时后订单自动好评</text>
					</view>
					<view class='container-under-2' v-if=" orderItem.order.isComplaint== 1">
						<view class="cu-tag light bg-red line-black padding" @tap="">已申诉</view>
					</view>
					<view class='container-under-2' v-else>
						<view class="cu-tag light bg-red line-black padding" @tap="toComplain(orderItem)">申诉</view>
					</view>

					<view v-if=" orderItem.order.hscore==0">
						<view class="cu-tag light bg-blue line-black padding" @tap="showModal(orderItem.order)">去打分
						</view>
					</view>
					<view v-if="orderItem.order.hscore != 0">
						<view class="cu-tag light bg-olive  line-black padding" bindtap="send_out">已评价</view>
					</view>
				</view>

			</view>

		</view>
		<!-- end -->

		<!-- 申诉模态框 -->
		<view class="cu-modal" :class="complainName=='true'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">订单申诉</view>
					<view class="action" @tap="hideModal2">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>

				<uv-form ref="form" @submit="complaintSubmit">
					<!-- 申诉理由 -->
					<!-- <uv-form-item label="姓名" prop="complaint.reason"> -->
					<view class="cu-form-group margin-top">
						<view class="title">申诉理由</view>
						<textarea style="text-align: left;" v-model="complaint.reason" name="content" maxlength="1000"
							placeholder=" "></textarea>
					</view>
					<!-- </uv-form-item> -->
					<!-- 申诉证明图片 -->
					<view class="cu-bar bg-white margin-top">
						<view class="action">
							图片上传
						</view>
						<view class="action">
							<view v-if="complaint.image == ''">0/1</view>
							<view v-else>1/1</view>
							<!-- {{complaint.image.length}}/1 -->

						</view>
					</view>
					<view class="cu-form-group">
						<view class="grid col-4 grid-square flex-sub">
							<view class="bg-img" @tap="ViewImage" :data-url="complaint.image">
								<image :src="complaint.image" mode='aspectFill'></image>
								<!-- <view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
								<text class="cuIcon-close"></text>
							</view> -->
							</view>
							<view class="solids" @tap="ChooseImage" v-if="complaint.image =='' ">
								<text class="cuIcon-cameraadd"></text>
							</view>

						</view>
					</view>
				</uv-form>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal2">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="complaintSubmit">提交</button>
					</view>
				</view>
			</view>
		</view>

		<!-- 打分模态框 -->
		<view class="cu-modal" :class="modalName=='true'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">订单评分：</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="uv-demo-block">
					<text class="uv-demo-block__title">高分可以增加享用者的信誉等级哦~</text>
					<view class="uv-demo-block__content">
						<view class="uv-page__tag-item">
							<uv-rate size="30" count="5" v-model="rateValue"></uv-rate>
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="confirm">确定</button>
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '', //用户token
				hScore: 6, //表示订单评价状态
				orderItemList: '', //订单列表
				orderId: '', //选中的订单id
				complainName: '', //申诉模态框控制是否显示
				modalName: '', //打分模态框控制是否显示
				rateValue: 0, //评分初始值
				isComplaint: '', //是否已申诉
				complaint: {
					userId1: '',
					userId2: '',
					orderId: '',
					reason: '',
					image: '',
				},
				// 点击的orderItem
				orderItem: '',
				//表单验证规则
				// rules: {
				// 	'complaint.reason': {
				// 		type: 'string',
				// 		required: true,
				// 		message: '请填写申诉理由',
				// 		trigger: ['blur', 'change']
				// 	},
				// }
			}
		},
		onLoad() {
			//获取本地存储的token
			this.token = uni.getStorageSync('token')
			console.log('调用了onload')
			// 初始化数据
			this.init();
		},
		methods: {
			//处理时间字符串
			handleStr(time) {
				time = time.replace('T', ' ')
				return time
			},

			//展示申诉模态框
			toComplain(orderItem) {
				this.complainName = 'true'
				this.orderItem = orderItem
			},

			//订单申诉理由
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			//展示打分模态框
			showModal(order) {
				this.modalName = 'true'
				this.orderId = order.id
			},

			// 隐藏模态框
			hideModal2() {
				this.complainName = ''
			},
			// 隐藏模态框
			hideModal() {
				this.modalName = ''
			},
			//提交申诉
			complaintSubmit() {
				// 填充数据
				let str = this.orderItem.order.needUid
				this.complaint.userId2 = str;
				this.complaint.orderId = this.orderItem.order.id;
				// 表示订单申诉
				this.complaint.status = '3';

				// 发送异步请求
				uni.request({
					url: 'http://localhost:8080/complaint/orderComplaint',
					method: 'POST',
					data: JSON.stringify(this.complaint),
					header: {
						'token': this.token, // 根据实际情况设置 token
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
								title: '提交成功！',
								icon: 'success',
								duration: 1500
							});
							//修改申诉按钮的状态展示
							this.complainName = '';
							// 刷新页面
							this.init();
						} else {
							uni.showToast({
								title: '提交失败！',
								icon: 'fail',
								duration: 1500
							});
							console.log('失败！');
						}
					},
				});

			},
			// 确认打分
			confirm() {
				console.log('发送打分请求', this.rateValue)
				uni.request({
					url: 'http://localhost:8080/orders/sethScore?&hScore=' + this.rateValue + '&orderId=' +
						this
						.orderId,
					method: 'PUT',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						//显示toast
						uni.showToast({
							title: '操作成功！',
							icon: 'success',
							duration: 1500
						});
						//关闭模态框
						this.rateValue = 0
						this.modalName = ''
						// 刷新页面
						this.init();
					},
					fail: (err) => {
						reject(err);
					},
				})
			},
			// 图片上传
			ChooseImage() {
				if (this.complaint.image != '') {
					uni.showToast({
						title: '最多只能上传1张图片',
						icon: 'none'
					});
					return; // 如果已经上传了1张图片，则直接返回，不再执行上传操作
				}
				let imageLength = 0;
				if (this.complaint.image != '') {
					imageLength = 1
				}
				uni.chooseImage({
					count: 1 - imageLength, // 计算还能上传的图片数量
					sizeType: ['compressed'], //采用图片压缩
					sourceType: ['album'],
					success: (chooseImageRes) => {
						//上传到oss服务器的代码：
						//本地图片临时路径
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							// 生成 UUID
							url: 'http://localhost:8080/upload?flag=complaint',
							filePath: tempFilePaths[0],
							name: 'image',
							formData: {
								'token': 'test'
							},
							success: (uploadFileRes) => {
								//接收后端返回的数据并转为json格式
								let imgData = JSON.parse(uploadFileRes.data);
								//将后端返回的url，追加到imge中
								this.complaint.image = imgData.data;
								console.log(this.complaint.image);
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
			//修改文字
			tradeModeText(tradeMode) {
				switch (tradeMode) {
					case 0:
						return '免费共享';
					case 1:
						return '以物换物';
					case 2:
						return '二手出售';
					default:
						return ''; // 或者其他默认值
				}
			},
			//修改样式
			tagColorClass(tradeMode) {
				switch (tradeMode) {
					case 0:
						return 'line-green';
					case 1:
						return 'line-blue';
					case 2:
						return 'line-red';
					default:
						return ''; // 或者其他默认样式
				}
			},
			// 选项卡切换
			tabChange(obj) {
				console.log(obj.index)
				this.itemList = [];
				// 根据不同的选项卡索引设置 mode 的值
				switch (obj.index) {
					case 0:
						this.hScore = 6; // 点击全部时，查询hScore为任意值
						break;
					case 1:
						this.hScore = 0; // 点击未评价时 hScore=0 
						break;
					case 2:
						this.hScore = 1; // 点击已评价时,表示hScore为1~5(已评价)
						break;
					default:
						break;
				}
				this.init();
			},
			//初始化数据
			async init() {

				this.orderItemList = '';
				await this.getData();
			},
			//获取orderItemList数据
			getData() {
				console.log('调用了getData')
				uni.request({
					url: 'http://localhost:8080/orders/getShareOrders?&hScore=' + this.hScore,
					method: 'GET',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						this.orderItemList = res.data.data;
						// console.log('获得到的订单列表', this.orderItemList[0].order)
						// console.log('获得到的物品列表', this.orderItemList[0].item)
					},
					fail: (err) => {
						reject(err);
					},
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.pa {
		padding: 20rpx;
	}

	// 模态框
	.uv-page__tag-item {
		display: flex;
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
	}

	/* 内容 */
	.container {
		padding: 20rpx;
		height: 300rpx;
		width: 100%;
		margin-bottom: 20rpx;
	}

	.container-top-2 {
		margin-left: 20rpx;
		width: 120%;

	}

	.container-top-1 image {
		width: 150rpx;
		height: 150rpx;
	}

	.container-top {
		display: flex;
		align-items: center;

	}

	.container-top-2_1 {
		margin-bottom: 20rpx;
		width: 50%;
	}

	//文字截断
	.truncate-text {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.container-top-2_1 text {
		font-weight: 600;
	}

	.container-top-2_2 {
		margin-bottom: 25rpx;
	}

	.container-top-2_2 text {
		font-size: 25rpx;
		font-weight: 750;
	}

	.view-width {
		width: 70%;
	}

	.text-xxm {
		font-size: 22rpx;
		color: gray;
		padding-left: 10rpx;
	}

	.container-line {
		width: 95%;
		height: 3rpx;
		background: gainsboro;
		margin-top: 25rpx;
	}

	.container-under {
		display: flex;
		margin-top: 15rpx;
		align-items: center;
	}

	.font-size-lg {
		font-size: 35rpx;
		padding-right: 10rpx;

	}

	.container-under-1 {
		width: 65%;
	}

	.container-under-2 {
		margin-right: 20rpx;
	}

	/* end */
</style>