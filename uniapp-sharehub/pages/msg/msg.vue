<template>
	<view>
		<!-- 头部消息 -->
		<view class='bc '>
			<text class='txt_1'></text>
			<view class='kuai'>
				<view class='avatar interactive'>
					<image class='imgs'
						src='http://web-showhub.oss-cn-beijing.aliyuncs.com/common/%E4%BA%92%E5%8A%A8%E6%B6%88%E6%81%AF.png'>
					</image>
					<view v-if="commentNum !=0" class="cu-tag badge"></view>
					<text>互动消息</text>
				</view>

				<view class='avatar order' @tap='toOrder'>
					<image class='imgs'
						src='http://web-showhub.oss-cn-beijing.aliyuncs.com/common/%E8%AE%A2%E5%8D%95%E6%B6%88%E6%81%AF.png'>
					</image>
					<view v-if="orderNum !=0" class="cu-tag badge"></view>
					<text>订单消息</text>
				</view>

				<view class='avatar notice' @tap='notice'>
					<image class='imgs'
						src='http://web-showhub.oss-cn-beijing.aliyuncs.com/common/%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF.png'>
					</image>
					<view v-if="informNum !=0" class="cu-tag badge"></view>
					<text>系统消息</text>
				</view>
			</view>
		</view>
		<!-- 头部消息end -->


		<!-- 留言消息 -->
		<view class="cu-list menu-avatar  card-menu martop">
			<view class="cu-item" v-for="(commnetVO, index) in commentList"
				@tap="toMsgChat(commnetVO.itemId,commnetVO.id)">
				<view class="cu-avatar round lg" :style="{ 'background-image': 'url(' + commnetVO.avatarUrl + ')' }">
				</view>
				<view class="content">
					<view class="text-grey">{{commnetVO.nickName}}</view>
					<view class="text-gray text-sm flex">
						<text class="text-cut">
							<text class="margin-right-xs"></text>
							{{commnetVO.content}}
						</text>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">{{commnetVO.createTime}}</view>
					<view v-if="commnetVO.status == 0" class="cu-tag round bg-red sm">1</view>
				</view>
			</view>
		</view>
		<!-- 聊天消息end -->


	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '', //用户token
				commentNum: 0, //待读评论数
				orderNum: 0, //待读订单数
				informNum: 0, //待读通知数
				commentList: null //评论列表
			}
		},
		async onTabItemTap() {
			uni.switchTab({
				url: '/pages/msg/msg'
			});
			this.commentList = null
			await this.getCommentList(this.token);
			// this.getDotNum(this.token);

		},
		async onLoad() {
			this.token = uni.getStorageSync('token')
			// 请求数据
			await this.getDotNum(this.token);
			await this.getCommentList(this.token);
		},
		onTabItemTap: function(e) {
			//重新获取红点
			this.getDotNum(this.token);
		},
		onShow() {
			//重新获取红点
			this.getDotNum(this.token);
		},
		methods: {
			// 获取当前用户评论列表
			getCommentList(token) {
				if (token != null && token != '') {
					uni.request({
						url: 'http://localhost:8080/comments/getCommentList',
						method: 'GET',
						header: {
							'content-type': 'application/json', // 设置请求头为 JSON 类型
							'token': this.token
						},
						success: (res) => {
							console.log('当前用户未读list：', res.data.data)
							this.commentList = res.data.data
							//更新tabbar的红点
							this.changeTabBarRedDot()
						}
					})
				}
			},
			// 获取当前用户未读订单数目，展示红点(数字),存储到vuex中
			getDotNum(token) {
				// 获取订单红点数
				if (token != null && token != '') {
					uni.request({
						url: 'http://localhost:8080/msg/getDotNum',
						method: 'GET',
						header: {
							'content-type': 'application/json', // 设置请求头为 JSON 类型
							'token': this.token
						},
						success: (res) => {
							console.log('当前用户未读list：', res.data.data)
							// 存储到vuex中
							//用户信息存储到vuex中
							let dotNumList = res.data.data

							this.$store.commit('notice/setCommentNum', dotNumList[0]);
							this.$store.commit('notice/setOrderNum', dotNumList[1]);
							this.$store.commit('notice/setInformNum', dotNumList[2]);
							// 从vuex中取DotNum
							this.getVuexDot()
							//更新tabbar的红点
							this.changeTabBarRedDot()
						}
					})
				}
				// 获取通知红点数!!!!!!!!!!!!!!!!!!!!!!!!!
			},

			//更新tabbar的红点
			changeTabBarRedDot() {
				let totalRedDotNum = this.commentNum + this.orderNum + this.informNum
				console.log('红点总数:', totalRedDotNum)
				if (totalRedDotNum != 0) {
					uni.showTabBarRedDot({ //显示红点 
						index: 2, //tabbar下标
						text: totalRedDotNum
					})
				} else if (totalRedDotNum == 0) {
					uni.hideTabBarRedDot({ //隐藏红点
						index: 2 //tabbar下标
					})
				}
			},
			// 从vuex中取DotNum
			getVuexDot() {
				this.commentNum = this.$store.state.notice.commentNum
				this.orderNum = this.$store.state.notice.orderNum
				this.informNum = this.$store.state.notice.informNum
			},
			// 跳转到用户评论的物品详情界面的评论区位置
			toMsgChat: function(itemId, commentId) {
				//已读，发起请求去除红点
				uni.request({
					url: 'http://localhost:8080/comments/readComment/' + commentId,
					method: 'PUT',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						this.getCommentList(this.token);
						//跳转页面
						uni.navigateTo({
							url: '/pages/home/home_detail/home_detail?id=' + itemId +
								'&scrollTo=comments'
						});
					}
				})
			},
			// 通知消息点击
			notice: function() {
				uni.navigateTo({
					url: "/pages/msg/msg_inform/msg_inform"
				})
			},
			// 跳转交易物流详细页面
			toOrder: function() {
				uni.navigateTo({
					url: "/pages/msg/msg_order_all/msg_order_all"
				})
			}
		}
	}
</script>

<style>
	/* pages/message/message.wxss */
	/* <!-- 头部消息 --> */
	.bc {
		width: 100%;
		height: 200rpx;
		background: linear-gradient(10deg, #ffe1ff, #1cbbb4);
	}

	.txt_1 {
		margin-left: 30rpx;
		color: white;
	}

	.kuai {
		width: 700rpx;
		height: 200rpx;
		background-color: white;
		margin-top: 50rpx;
		margin-left: 25rpx;
		border-radius: 50rpx;
		box-shadow: 3rpx 3rpx 3rpx 3rpx rgba(128, 128, 128, 0.384);
		display: flex;
		flex-direction: row;
	}

	.interactive {
		display: flex;
		flex-direction: column;
		font-size: 30rpx;
		color: black;
		width: 130rpx;
		height: 150rpx;
		margin-top: 45rpx;
		margin-left: 80rpx;
	}

	.avatar {
		position: relative;
	}

	.imgs {
		margin-left: 15rpx;
		width: 80rpx;
		height: 80rpx;
	}

	.order {
		display: flex;
		flex-direction: column;
		font-size: 30rpx;
		color: black;
		width: 130rpx;
		height: 150rpx;
		margin-top: 45rpx;
		margin-left: 80rpx;
	}

	.notice {
		display: flex;
		flex-direction: column;
		font-size: 30rpx;
		color: black;
		width: 130rpx;
		height: 150rpx;
		margin-top: 45rpx;
		margin-left: 75rpx;
	}

	/* <!-- 头部消息end --> */


	/* 聊天消息 */
	.martop {
		margin-top: 115rpx;
	}

	/* 聊天消息end */
</style>