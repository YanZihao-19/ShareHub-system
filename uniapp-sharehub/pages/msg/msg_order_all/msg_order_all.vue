<template>
	<view>
		<!-- 内容 -->
		<view class='pg'>
			<!-- 顶部粘贴栏 -->
			<uv-sticky>
				<view style="padding: 2rpx 0;background-color: #eaf6f6;">
					<uv-tabs :list="[{ name: '全部' }, { name: '未处理' }, { name: '已处理' }]" @click="tabChange"></uv-tabs>
				</view>
			</uv-sticky>

			<!-- 顶部粘贴栏end -->
			<view class="" v-for="(item,index) in orderList" :key="index">
				<view class='container shadow-warp bg-white' @tap='toHandle(item)'>
					<!-- 动态渲染，如果未读则渲染红点 -->
					<view v-if="item.noticeStatus == 0" class="cu-tag badge"></view>
					<view class='container-1'>
						<image :src='item.image'></image>
					</view>
					<view class='container-2'>
						<view class='container-2_1 text-cut'><text class="reason">{{item.reason}}</text></view>
						<text class='text-black text-sm'>{{formattedTime(item)}}</text>
					</view>

					<!-- 订单模式 -->
					<view class='container-price_desc'>
						<view class="cu-capsule round view-width">
							<view v-if="item.status == 0" class="cu-tag bg-red">
								待处理
							</view>
							<view v-else-if="item.status == 1" class="cu-tag bg-green">
								已同意
							</view>
							<view v-else-if="item.status == 2" class="cu-tag bg-green">
								已拒绝
							</view>
							<view :class="['cu-tag', tagColorClass(item.mode)]">
								{{ modeText(item.mode) }}
							</view>


						</view>
					</view>
					<!-- 订单模式end -->
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
				status: '3', //订单的状态：3查询全部，0查询未处理，1查询已处理（包括拒绝和达成）
				orderList: [], //获取的订单列表
				noticeStatus: '', //订单是否已经被查看(是否有红点标记)
			}
		},
		computed: {

		},
		onLoad() {
			// 获取用户token
			this.token = uni.getStorageSync('token')

			// 调用 getData() 函数获取数据并将数据赋值给 list 数组
			const orders = this.getOrders();
			this.orderList = orders;
		},
		onShow() {
			// 获取用户token
			this.token = uni.getStorageSync('token')
			
			// 调用 getData() 函数获取数据并将数据赋值给 list 数组
			const orders = this.getOrders();
			this.orderList = orders;
		},
		methods: {
			//处理时间字符串
			formattedTime(e) {
				if (e.createTime != null) {
					let time = e.createTime;
					// 使用split方法分割字符串，并取第一个元素
					return time.replace('T', ' ');
				}
			},
			//获取用户的订单列表
			getOrders() {
				uni.request({
					url: 'http://localhost:8080/orders/getOrders?status=' + this.status,
					method: 'GET',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						this.orderList = res.data.data;
						console.log(this.orderList)
					},
					fail: (err) => {
						reject(err);
					},
				})
			},
			tabChange(obj) {
				console.log(obj.index)
				this.orderList = [];
				// 根据不同的选项卡索引设置 status 的值
				switch (obj.index) {
					case 0:
						this.status = '3'; // 点击全部时 status=3
						break;
					case 1:
						this.status = '0'; // 点击未处理时 status=0
						break;
					case 2:
						this.status = '1'; // 点击已处理时 status=1
						break;
					default:
						break;
				}
				this.init();
			},
			//修改样式
			tagColorClass(mode) {
				switch (mode) {
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
			//修改文字
			modeText(mode) {
				switch (mode) {
					case 0:
						return '共享申请';
					case 1:
						return '易物申请';
					case 2:
						return '交易申请';
					default:
						return ''; // 或者其他默认值
				}
			},
			//初始化
			init() {
				// 调用 getData() 函数获取数据并将数据赋值给 list 数组
				const orders = this.getOrders();
				this.orderList = orders;
			},
			// 跳转到查看订单详情！！！！！！！！！！
			toHandle(order) {
				// 判断订单是否已处理，若未处理才执行跳转操作
				if (order.status == 0) {
				uni.navigateTo({
					url: '/pages/msg/msg_handleOrder/msg_handleOrder?order=' + encodeURIComponent(JSON
						.stringify(order)),
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
				}
			},
		}
	}
</script>

<style>
	.pg {
		padding: 20rpx;
	}

	/* 内容 */
	.container {
		width: 100%;
		height: 200rpx;
		padding: 20rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 10rpx;
		margin-bottom: 20rpx;
	}

	.container-price_desc {

		display: flex;
		margin-top: 10rpx;
		align-items: center;
	}

	.view-width {
		width: 70%;
	}

	.container-1 image {
		width: 120rpx;
		height: 120rpx;
	}

	.reason {
		width: 70rpx;
	}

	.container-2_2_price {
		padding-right: 25%;
	}

	.container-2_1 {
		margin-bottom: 30rpx;
		font-weight: 600;
		font-size: 30rpx;
		width: 95%;
	}

	.container-2_2 {
		font-size: 28rpx;
		font-weight: 500rpx;
	}

	.container-2 {
		width: 45%;
		margin-left: 20rpx;
	}

	/* end */
</style>