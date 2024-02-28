<template>
	<view class="content">
		<image class="logo" :src="headerUrl"></image>
		<view :class="titleClass">
			<text class="title">{{ nickName }}</text>
		</view>
		<view v-if="!loggedIn">
			<button class="cu-btn bg-blue lg" @click="login">登录</button>
		</view>
		<view v-else>
			<!-- 导航按钮 -->
			<navigator class="cu-btn bg-blue lg" url="/other-page">进入主页！</navigator>
		</view>
		<template>
			<uv-loading-page :loading="loading" image="/static/gif/loading.gif" >加载中...</uv-loading-page>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loggedIn: false, //按钮切换
				loading: false, //加载页
				nickName: '未登录', //昵称
				headerUrl: 'http://web-showhub.oss-cn-beijing.aliyuncs.com/users/default.png', //默认头像
			}
		},
		onLoad() {

		},
		computed: {
			titleClass() {
				return this.loggedIn ? 'text-area title text-blue' : 'text-area title text-red';
			}
		},
		methods: {
			login() {
				var that = this
				//显示加载页
				that.loading = true
				uni.showModal({
					mask: true,
					title: '温馨提示',
					content: '授权微信登录后才能正常使用小程序功能',
					success(res) {
						if (res.confirm) {
							uni.getUserProfile({
								desc: '获取你的昵称、头像',
								success: userRes => {
									//打印获取到的信息
									console.log('getUserProfile方法获取到的用户信息：' + userRes.userInfo
										.avatarUrl)
									console.log('getUserProfile方法获取到的用户信息：' + userRes.userInfo
										.nickName)
									if (userRes.errMsg == 'getUserProfile:ok' && userRes.userInfo !=
										undefined) {
										var userInfo = {
											avatarUrl: userRes.userInfo.avatarUrl,
											nickName: userRes.userInfo.nickName
										}
										// //对页面中的变量进行赋值
										// that.nickName = userRes.userInfo.nickName
										// that.headerUrl = userRes.userInfo.avatarUrl

										// 调用接口请求openid
										that.getUserOpenId(userInfo)

									} else {
										uni.showToast({
											icon: "none",
											title: "获取失败，请重试"
										})
									}
								},
								fail: error => {}
							});
						} else if (res.cancel) {


						}
					}
				});
			},


			getUserOpenId(userInfo) {
				var that = this;
				uni.login({
					provider: 'weixin',
					success(loginAuth) {
						var data = {
							'code': loginAuth.code
						};
						console.log('向login函数中传递的code' + data.code)

						// 指定完整的请求路径
						var path = 'http://localhost:8080/user/getOpenId';
						uni.request({
							url: path,
							method: 'POST', // 根据实际情况指定请求方法
							data: data,
							success(response) {
								//关闭加载页
								that.loading = false
								console.log('后端请求完成后获取到的用户信息：', response.data.data);
								userInfo['openid'] = response.data.data.openId;
								//指定默认的用户名和用户头像，使用截取openId并且拼接字符串
								if (response.data != null) {
									that.nickName = response.data.data.username
									that.headerUrl = response.data.data.image
								}
								that.loggedIn = true;
								// 显示登录成功的 toast
								uni.showToast({
									title: '登录成功！',
									icon: 'success',
									duration: 2000
								});
							},
							fail(error) {
								console.error('请求失败', error);
								// 显示登录失败的 toast
								uni.showToast({
									title: '登录失败！',
									icon: 'none',
									duration: 2000
								});
							}
						});
					}
				});
			}



		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 30rpx;
		margin-bottom: 100rpx;
	}

	.button-style {
		width: 150rpx;
		height: 60rpx;
		background-color: #007AFF;
		border-radius: 10rpx;
		margin-top: 60rpx;
	}
</style>