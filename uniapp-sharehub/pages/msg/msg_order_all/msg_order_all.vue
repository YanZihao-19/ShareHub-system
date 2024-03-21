<template>
	<view>
		<!-- 内容 -->
		<view class='pg'>
			<!-- 顶部粘贴栏 -->
			<uv-sticky>
				<view style="padding: 10rpx 0;background-color: #eaf6f6;">
					<uv-tabs :list="[{ name: '全部' }, { name: '未处理' }, { name: '已处理' }]" @click="tabChange"></uv-tabs>
				</view>
			</uv-sticky>
			<!-- 顶部粘贴栏end -->

			<view class='container shadow-warp bg-white' v-for="(item,index) in orderList" :key="index">
				<view class='container-1'>
					<image :src='item.image'></image>
				</view>
				<view class='container-2'>
					<view class='container-2_1 text-cut'><text class="reason">{{item.reason}}</text></view>
					<view class='container-2_2 text-cut'><text
							class='text-red container-2_2_price text-price'>12.0</text>
						<text class='text-black text-sm'>{{formattedTime(item)}}</text>
					</view>
				</view>
				<view class='padding cu-tag line-black' @tap='toLogistics'>查看物流</view>
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
			//初始化
			init() {
				// 调用 getData() 函数获取数据并将数据赋值给 list 数组
				const orders = this.getOrders();
				this.orderList = orders;
			},
			// 跳转到查看订单详情！！！！！！！！！！
			toLogistics: function() {
				uni.navigateTo({
					url: '/pages/msg/message_logistics/message_logistics',
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
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
		margin-bottom: 20rpx;
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