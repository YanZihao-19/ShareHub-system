<template>
	<view>

		<!-- 用户信息 -->
		<view :style="{ 'background-image': 'url(' + userInfo.bgImage + ')' }" catchtap='toMy_detail'>
			<!-- 头部消息 -->
			<!-- <view class='bc '> -->
			<view class='kuai'>
				<view class='interactive'>
					<image class='imgs'
						src='http://web-showhub.oss-cn-beijing.aliyuncs.com/common/%E4%BA%92%E5%8A%A8%E6%B6%88%E6%81%AF.png'>
					</image>
					<text>互动消息</text>
				</view>
				<view class='notice' @tap='notice'>
					<image class='imgs'
						src='http://web-showhub.oss-cn-beijing.aliyuncs.com/common/%E8%AE%A2%E5%8D%95%E6%B6%88%E6%81%AF.png'>
					</image>
					<text>订单消息</text>
				</view>
				<view class='logistics' @tap='toLogistics'>
					<image class='imgs'
						src='http://web-showhub.oss-cn-beijing.aliyuncs.com/common/%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF.png'>
					</image>
					<text>通知消息</text>
				</view>
			</view>

			<!-- </view> -->
			<!-- 头部消息end -->
			<view class="UCenter-bg">
				<image :src="userInfo.image"></image>
				<!-- 用户名 -->
				<view class="margin-top-sm">
					<text>{{userInfo.username}}</text>
				</view>
				<!-- 背景波浪图 -->
				<image src="https://raw.githubusercontent.com/weilanwl/ColorUI/master/demo/images/wave.gif"
					mode="scaleToFill" class="gif-wave"></image>
			</view>
			<view class="padding flex text-center text-grey bg-white shadow-warp">
				<view class="flex flex-sub flex-direction solid-right" bindtap='toPraise'>
					<view class="text-xxl"
						:class="{'text-green': userInfo.credibility >= 6, 'text-blue': userInfo.credibility >= 1 && userInfo.credibility <= 5, 'text-red': userInfo.credibility == 0}">
						{{ credibilityText }}
					</view>

					<view class="margin-top-sm">
						<text class="cuIcon-attentionfill"></text> 信誉等级
					</view>
				</view>
				<view class="flex flex-sub flex-direction solid-right" bindtap='toAttention'>
					<view class="text-xxl text-blue">{{userInfo.shareNum}}</view>
					<view class="margin-top-sm">
						<text class="cuIcon-favorfill">可共享数</text>
					</view>
				</view>
				<!-- <view class="flex flex-sub flex-direction" bindtap='toFans'>
				<view class="text-xxl text-green">0</view>
				<view class="margin-top-sm">
					<text class="cuIcon-fork"></text>粉丝数
				</view>
			</view> -->
			</view>
		</view>
		<!-- 用户信息end -->


		<!-- 设置详细 -->
		<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
			<view class="cu-item arrow">
				<view class="content" @tap="toIssue_page">
					<text class="cuIcon-moneybagfill text-red"></text>
					<text class="text-grey">我的发布</text>
				</view>
			</view>

			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" url='/pages/my/my_sale/my_sale'>
					<text class="cuIcon-titles text-green"></text>
					<text class="text-grey">我的卖出</text>
				</navigator>
			</view>
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" url="/pages/my/my_buy/my_buy">
					<text class="cuIcon-formfill text-green"></text>
					<text class="text-grey">我买到的</text>
				</navigator>
			</view>
			<view class="cu-item arrow">
				<view class="content" bindtap="CopyLink" data-link="https://github.com/weilanwl/ColorUI">
					<text class="cuIcon-locationfill text-grey"></text>
					<text class="text-grey">收货地址</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content" bindtap="toCollect">
					<text class="cuIcon-appreciatefill text-red"></text>
					<text class="text-grey">我的收藏</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<button class="cu-btn content" open-type="feedback">
					<text class="cuIcon-writefill text-cyan"></text>
					<text class="text-grey">意见反馈</text>
				</button>
			</view>
			<view class="cu-item arrow content">
				<button class='cu-btn content' @click="clearAllStore">
					<text class="cuIcon-creativefill text-orange"></text>
					<text class="text-grey">清除缓存</text>
				</button>
			</view>
			<view class="cu-item arrow">
				<navigator class="content" url='/pages/message/message_chat/message_chat' hover-class="none">
					<text class="cuIcon-evaluate_fill text-orange"></text>
					<text class="text-grey">客服中心</text>
				</navigator>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
		<!-- 设置详细end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '',
				userInfo: {
					openId: '',
					createTime: '',
					updateTime: '',
					username: '', //用户姓名
					gender: '', //用户性别
					credibility: '', //信誉分
					phone: '', //手机号
					role: '', //用户角色
					image: '', //用户头像
					shareNum: '', //用户的可共享数量
					identifyId: '', //实名认证编号
					bgImage: '', //用户背景图
				},
				order: '',
			}
		},
		computed: {
			credibilityText() {
				if (this.userInfo.credibility >= 6) {
					return '优秀';
				} else if (this.userInfo.credibility >= 1 && this.userInfo.credibility <= 5) {
					return '中等';
				} else {
					return '极差';
				}
			}
		},
		mounted() {
			//获取本地存储的token
			this.token = uni.getStorageSync('token')
			uni.request({
				url: 'http://localhost:8080/users/token',
				method: 'GET',
				header: {
					'content-type': 'application/json', // 设置请求头为 JSON 类型
					'token': this.token
				},
				success: (res) => {
					if (res.data.code === 1) {
						// 如果接口返回的数据正常，将数据存储到 userInfo 中
						this.userInfo = res.data.data;
						console.log('返回的用户信息：', this.userInfo)
					} else {
						console.error('接口返回错误：', res.data.msg);
					}
				},
				fail: (err) => {
					console.error('请求失败：', err);
				}
			});
		},
		methods: {
			// 清除全部缓存
			clearAllStore: function(res) {
				uni.showModal({
					title: '清除缓存',
					content: '是否要清除全部缓存!',
					success: function(res) {
						if (res.confirm) {
							uni.clearStorage({
								success: function(res) {
									uni.showToast({
										title: '清除成功',
										duration: 1000
									})
								},
								fail: function(res) {
									uni.showToast({
										title: '清除失败',
										icon: 'none',
										duration: 1000
									})
								}
							});
						}

					}

				})

			},

			// 我的发布跳转
			toIssue_page: function() {
				uni.navigateTo({
					url: '/pages/my/my_issue/my_issue?pageFlag=' + '' + '&mode=3&order=' + encodeURIComponent(
						JSON
						.stringify(
							this.order))
				})
			}

		}
	}
</script>

<style>
	/* pages/my/my.wxss */
	/* 用户信息 */
	.UCenter-bg {
		background-size: cover;
		height: 380rpx;
		display: flex;
		justify-content: center;
		padding-top: 0rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		color: #fff;
		font-weight: 300;
		text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}

	.UCenter-bg text {
		opacity: 0.8;
	}

	.UCenter-bg image {
		width: 200rpx;
		height: 200rpx;
	}

	.UCenter-bg .gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}

	map,
	.mapBox {
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}

	map,
	.mapBox {
		width: 750rpx;
		height: 300rpx;
	}

	.text-xl image {
		height: 100rpx;
		width: 100rpx;
	}

	.png {

		border-radius: 100%;
	}



	/* <!-- 头部消息 --> */
	/* .bc { */
	/* width: 100%; */
	/* height: 200rpx; */
	/* background: linear-gradient(10deg, #ffe1ff, #1cbbb4); */
	/* } */


	.kuai {
		width: 680rpx;
		height: 130rpx;
		background-color: white;
		margin-top: 10rpx;
		margin-left: 40rpx;
		border-radius: 50rpx;
		box-shadow: 3rpx 3rpx 3rpx 3rpx rgba(128, 128, 128, 0.384);
		display: flex;
		flex-direction: row;
	}

	.imgs {
		margin-left: 20rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.interactive {
		display: flex;
		flex-direction: column;
		font-size: 23rpx;
		color: black;
		width: 130rpx;
		height: 150rpx;
		margin-top: 27rpx;
		margin-left: 90rpx;
	}

	.notice {
		display: flex;
		flex-direction: column;
		font-size: 23rpx;
		color: black;
		width: 130rpx;
		height: 150rpx;
		margin-top: 27rpx;
		margin-left: 90rpx;
	}

	.logistics {
		display: flex;
		flex-direction: column;
		font-size: 23rpx;
		color: black;
		width: 130rpx;
		height: 150rpx;
		margin-top: 27rpx;
		margin-left: 70rpx;
	}

	/* <!-- 头部消息end --> */
</style>