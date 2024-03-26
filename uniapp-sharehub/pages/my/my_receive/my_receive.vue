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
						<view class='container-top-2_1 text-cut'>
							<text>{{orderItem.item.itemDesc}}</text>
						</view>


						<!-- <view class="cu-capsule round view-width">
							<view class="cu-tag bg-blue  ">
								模式
							</view>
							<view :class="['cu-tag', tagColorClass(item.tradeMode)]">
								{{ tradeModeText(item.tradeMode) }}
							</view>
						</view> -->

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
					<view class='container-under-1'><text v-if="orderItem.order.nscore == 0"
							class='cuIcon-remind font-size-lg text-black '></text>
						<text v-if="orderItem.order.nscore == 0" class='text-sm text-black'>1天3小时后订单自动好评</text>
					</view>
					<view class='container-under-2'>
						<view class="cu-tag light bg-red line-black padding">申诉</view>
					</view>
					<view v-if="orderItem.order.nscore == 0">
						<view class="cu-tag light bg-blue line-black padding" @tap="showModal(orderItem.order)">去打分
						</view>
					</view>
					<view v-if="orderItem.order.nscore != 0">
						<view class="cu-tag light bg-olive  line-black padding" bindtap="send_out">已评价</view>
					</view>
				</view>

			</view>

		</view>

		<!-- end -->
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
					<text class="uv-demo-block__title">高分可以增加共享者的信誉等级哦~</text>
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
		<!-- end -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '', //用户token
				nScore: 6, //表示订单评价状态
				orderItemList: '', //订单列表
				orderId: '', //选中的订单id

				modalName: '', //模态框控制是否显示
				rateValue: 0, //评分初始值
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


			//展示打分模态框
			showModal(order) {
				this.modalName = 'true'
				this.orderId = order.id
			},

			// 隐藏模态框
			hideModal() {
				this.modalName = ''
			},
			// 确认打分
			confirm() {
				console.log('发送打分请求', this.rateValue)
				uni.request({
					url: 'http://localhost:8080/orders/setnScore?&nScore=' + this.rateValue + '&orderId=' + this
						.orderId,
					method: 'PUT',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						//关闭模态框
						this.rateValue = 0
						this.modalName = ''
						//显示toast
						uni.showToast({
							title: '操作成功！',
							icon: 'success',
							duration: 1500
						});
						// 刷新页面
						this.init();
					},
					fail: (err) => {
						reject(err);
					},
				})
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

			// 选项卡切换
			tabChange(obj) {
				console.log(obj.index)
				this.itemList = [];
				// 根据不同的选项卡索引设置 mode 的值
				switch (obj.index) {
					case 0:
						this.nScore = 6; // 点击全部时，查询nScore为任意值
						break;
					case 1:
						this.nScore = 0; // 点击未评价时 nScore=0 
						break;
					case 2:
						this.nScore = 1; // 点击已评价时,表示nScore为1~5(已评价)
						break;
					default:
						break;
				}
				this.init();
			},
			//初始化数据
			async init() {
				await this.getData();
			},
			//获取orderItemList数据
			getData() {
				console.log('调用了getData')
				uni.request({
					url: 'http://localhost:8080/orders/getReceiveOrders?&nScore=' + this.nScore,
					method: 'GET',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						this.orderItemList = res.data.data;
			
					},
					fail: (err) => {
						reject(err);
					},
				})
			},
		}
	}
</script>

<style scoped>
	/* pages/my/my_sale/my_sale.wxss */

	.pa {
		padding: 20rpx;
	}

	/* 模态框 */
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

	.container-top-2_1 text {
		font-weight: 600;
	}

	.container-top-2_2 {
		margin-bottom: 20rpx;
	}

	.container-top-2_2 text {
		font-size: 25rpx;
		font-weight: 750;
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
		margin-top: 25rpx;
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