<template>
	<view>
		<view class="cu-card case no-card">

			<view style="font-weight: bold; margin-bottom: 20rpx;">
				<text v-if="complaint.userId2!=null" class=" text-xl">
					您的申诉已处理...
				</text>
				<text v-else class=" text-xl">
					您的举报已受理...
				</text>
			</view>

			<view class="cu-item shadow">
				<view v-if="complaint.userId2!=null" class="text-df" style="font-weight: bold;margin-bottom: 5rpx;">
					申诉内容：
				</view>
				<view v-else class="text-df" style="font-weight: bold;margin-bottom: 5rpx;">
					举报内容：
				</view>

				<view class="image">
					<image :src="complaint.image">
					</image>
					<view class="cu-tag bg-red">证明</view>
					<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{complaint.reason}}</text></view>
				</view>
			</view>
			<view style="margin-top:50rpx;margin-bottom:20rpx;">
				<view class="text-df" style="font-weight: bold;">
					处理结果：
				</view>
				<view class="content">
					<view class="text-black">{{complaint.result}}</view>
					<view class="text-black text-sm flex justify-end ">
						{{complaint.updateTime}}
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
				complaint: '',
			};
		},
		async onLoad(options) {
			// 1、根据complaint数据获取需求用户相关信息
			// 2、根据complaint渲染用户请求信息，和联系方式
			// 3、根据this.complaint = JSON.parse(decodeURIComponent(options.complaint))
			this.complaint = JSON.parse(decodeURIComponent(options.complaint))
			//修改日期格式
			this.complaint.updateTime = this.complaint.updateTime.replace('T', ' ');
			console.log('页面的complaint', this.complaint)

			// 初始化函数获取数据
			//向后端发送请求，表示该订单已经查看，去除小红点
			this.removeComplaintDot(this.complaint.id);
		},
		methods: {
			removeComplaintDot(id) {
				uni.request({
					url: 'http://localhost:8080/msg/removeComplaintDot/' + id,
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
		}
	}
</script>

<style lang="less">

</style>