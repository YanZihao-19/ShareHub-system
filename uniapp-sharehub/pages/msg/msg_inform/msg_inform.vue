<template>
	<view>
		<!-- 内容 -->
		<view class='pg'>
			<view v-if="identifications[0].status==2" class='container shadow-warp bg-white' @tap="removeIdenDot">
				<!-- 渲染红点 -->
				<view v-if="identifications[0].flag == 0" class="cu-tag badge"></view>
				<view class='container-1'><text>资历验证未通过！</text></view>

				<view class='container-2'><text style="font-weight: bold;">审核结果:</text><text>你的认证内容未通过审核！</text>
				</view>
			</view>

			<view v-if="identifications[0].status==1" class='container shadow-warp bg-white'  @tap="removeIdenDot">
				<!-- 渲染红点 -->
				<view v-if="identifications[0].flag == 0" class="cu-tag badge"></view>
				<view class='container-1'><text>资历验证已通过！</text></view>

				<view class='container-2'><text style="font-weight: bold;">审核结果:</text><text>你已拥有二手回收商身份！</text>
				</view>
			</view>

			<view class='container shadow-warp bg-white' v-for="(complaint,index) in complaints" :key="index"
				@tap="toCheck(complaint)">
				<!-- 渲染红点 -->
				<view v-if="complaint.flag == 0" class="cu-tag badge"></view>
				<view class='container-1'><text>审核结果请查收</text></view>

				<view v-if="complaint.userId2!=null" class='container-2'><text
						style="font-weight: bold;">申诉内容:</text><text>{{complaint.reason}}</text>
				</view>
				<view v-else class='container-2'><text
						style="font-weight: bold;">举报内容:</text><text>{{complaint.reason}}</text>
				</view>

				<view class='container-2'><text style="font-weight: bold;">处理结果:</text><text>{{complaint.result}}</text>
				</view>
				<view class='contaniner-lines'></view>

				<view class='container-4'>
					<view><text class=' text-cyan text-weight'>点我看看</text></view>
					<view><text class="cuIcon-right lg text-gray"></text></view>
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
				complaints: [], //获取的列表
				noticeStatus: '', //订单是否已经被查看(是否有红点标记)
				identifications: '', //资历验证
				status: '', //申诉的类型
			}
		},
		onLoad() {
			// 获取用户token
			this.token = uni.getStorageSync('token')

			// 调用 getData() 函数获取数据并将数据赋值给 list 数组
			const complaints = this.getComplaints();
			const identifications = this.getIdentification();
			this.complaints = complaints;
			this.identifications = identifications;
		
		},
		onShow() {
			// 获取用户token
			this.token = uni.getStorageSync('token')

			// 调用 getData() 函数获取数据并将数据赋值给 list 数组
			const complaints = this.getComplaints();
			const identifications = this.getIdentification();
			this.complaints = complaints;
			this.identifications = identifications;
			
		},
		methods: {
			//获取用户的资历验证
			getIdentification() {
				uni.request({
					url: 'http://localhost:8080/complaint/getIdentification',
					method: 'GET',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						this.identifications = res.data.data;
						console.log(this.identifications);
						this.removeIdenDot();
					},
					fail: (err) => {
						reject(err);
					},
				})
			},
			// 去除红点
			removeIdenDot() {
				uni.request({
					url: 'http://localhost:8080/msg/removeIdenDot/' + this.identifications[0].id,
					method: 'PUT',
					header: {
						'content-type': 'application/json',
						'token': this.token
					},
					// data: JSON.stringify(this.order),
					success: (res) => {
						console.log(res.data)
					}
				})
			},
			//获取用户的投诉结果列表
			getComplaints() {
				uni.request({
					url: 'http://localhost:8080/complaint/getComplaints',
					method: 'GET',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						this.complaints = res.data.data;
						console.log(this.complaints)
					},
					fail: (err) => {
						reject(err);
					},
				})
			},
			// 跳转到查看申诉结果详情
			toCheck(complaint) {
				// console.log('发送给下个页面的订单内容：', complaint)
				// 判断订单是否已处理，若未处理才执行跳转操作
				uni.navigateTo({
					url: '/pages/home/complaint_detail/complaint_detail?complaint=' + encodeURIComponent(JSON
						.stringify(complaint)),

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
		height: auto;
		padding: 20rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
	}

	.container-3 image {
		height: 350rpx;
		width: 100%;
		border-radius: 10rpx;
	}

	.container-1 text {
		font-size: 30rpx;
		font-weight: 800rpx;
		color: black;
	}

	.container-2 text {
		font-size: 22rpx;
		color: gray;
	}

	.container-2 {
		margin-top: 20rpx;
		margin-bottom: 10rpx;
	}

	.container-4 {
		margin-top: 25rpx;
		display: flex;
		justify-content: space-between;
	}

	.text-weight {
		font-weight: 600rpx;
		font-size: 30rpx;
	}

	.contaniner-lines {
		height: 3rpx;
		width: 100%;
		background: gainsboro;
		margin-top: 20rpx;
	}

	/* end */
</style>