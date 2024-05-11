<template>
	<view>
		<!-- 用户信息 -->
		<view class="bg-white ">
			<view class=" cf padding-sm">
				<view class="radius fl padding-sm ">
					<image :src='user.image'></image>
					<view class="fr padding-name">
						<view>{{user.username}}</view>
						<view class="padding-time ">
							<text>{{order.createTime}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 用户信息end -->

		<!-- 订单信息 -->
		<view class='bg-white padding-sm'>
			<!-- 请求信息 -->
			<view v-if="item.pageFlag != 1"  class="">
				<text class="text-xl text-cyan ">请求信息： </text>
				<view class='bg-white top-20 font-size'>
					<text>
						{{order.reason}}
					</text>
				</view>
			</view>

			<!-- 联系方式 -->
			<view v-if="item.pageFlag != 1" class='bg-white top-20'>
				<view class=''>
					<text class="text-xl text-cyan ">联系方式： </text>
					<view class='bg-white font-size'>
						<text>
							{{order.contact}}
						</text>
					</view>
				</view>
			</view>
			<!--物品详情  -->
			<view v-if="item.pageFlag != 1" class='bg-white top-20'>
				<text class="text-xl text-cyan ">物品详情： </text>
			</view>

			<!-- 物品标题(请求信息) -->
			<text v-if="item.pageFlag == 1" class="text-xl text-cyan ">物品详情： </text>
			<view class='bg-white top-20 font-size'>
				<text>
					{{item.itemTitle}}
				</text>
			</view>

			<!-- 物品描述(联系方式) -->
			<text v-if="item.pageFlag == 1" class="text-xl text-cyan ">联系方式： </text>
			<view class='bg-white top-20 font-size'>
				<text>
					{{item.itemDesc}}
				</text>
			</view>
		</view>
		
		<!-- 物品详情 -->
		<view class='bg-white padding-sm'>
			<view style="margin-top: 30rpx;">
				<text v-if="item.pageFlag != null" style="font-weight: bold;" class="text-xl text-black ">原物品详情： </text>
			</view>
			<!-- 物品价格 -->
			<view class='price'>
				<text class='price-symbol'>￥</text>
				<text class='price-size'>{{item.sellPrice}}</text>
				<text class='price-ori'>￥{{item.originalPrice}}</text>
			</view>
			<!-- 交易方式 -->
			<view class='hint'>
				<text>
					该物品支持 <text :style="{ 'font-weight': 'bold' }">
						{{ getDeliveryText(item.deliveryStyle) }}
					</text>交易方式。
				</text>
			</view>

			<!-- 图片位置 -->
			<view>
				<block>
					<image class='img' :src="item.image" @tap="previewImage(item.image)"></image>
				</block>
				<block v-for="(item,index) in itemImages" :key="index">
					<image class='img' :src="item" @tap="previewImage(item)"></image>
				</block>
			</view>
			<!--图片位置end  -->

		</view>
		<!-- 商品内容end -->

		<!-- 操作选项卡 -->
		<view class="cu-bar bg-white tabbar border shop fixation">
			<view class="bg-red submit margin-right-20" @tap="cancelOrder(item)">
				拒绝交易
			</view>
			<view class="bg-blue submit margin-right-20" @tap="confirmOrder(item)">
				完成交易
			</view>


			<!-- 确认订单模态框开始 -->
			<view class="cu-modal" :class="showModal2=='show'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">确认订单</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="text-align: left;">
						&nbsp;&nbsp;请您确定达成交易后，请及时进行发货~
					</view>
					<view class="cu-bar bg-white justify-end">
						<view class="action confirm-botton ">
							<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						</view>
						<view class="action confirm-botton ">
							<button class="cu-btn bg-green " @tap="confirmAcceptOrder">确认</button>
						</view>
					</view>
				</view>
			</view>
			<!-- 确认订单模态框结束 -->


			<!-- 取消订单模态框开始 -->
			<view class="cu-modal" :class="showModal=='show'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">拒绝申请</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="text-align: left;">
						&nbsp;&nbsp;您确实要拒绝该用户的申请吗~
					</view>
					<view class="cu-bar bg-white justify-end">
						<view class="action confirm-botton ">
							<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						</view>
						
						<view class="action confirm-botton ">
							<button class="cu-btn bg-green " @tap="confirmCancelOrder">确认</button>
						</view>
					</view>
				</view>
			</view>
			<!-- 取消订单模态框开始 -->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '',
				showModal: '', // 控制是否展示拒绝模态框
				showModal2: '', //控制是否展示确订单模态框
				order: {
					itemId: '', //当前物品id
					reason: '', // 申请理由
					contact: '', // 联系方式
					mode: '', //订单交易模式
					otherItemId: '', //另一个物品id（仅对以物换物生效）
					image: '', //订单图片
				},
				user: {
					username: '', //用户名
					credibility: '', //信誉
					role: '', //角色
					image: '', //头像
					identifyId: '', //实名认证
				},
				item: {
					id: '',
					createTime: '', //创建时间
					image: '', //物品首页图
					itemTitle: '', //物品名称
					itemDesc: '', //物品描述
					tradeMode: '', //物品交易模式(共享/换物/二手)
					sellPrice: '', //现价
					originalPrice: '', //原价
					usageLevel: '', //物品磨损度
					deliveryStyle: '', //物品交易方式
					ownerUid: '', //用户openID
					pageFlag: '', //以物易物的方式状态
				},
				itemImages: [], //物品详情图

				actions: [{
						flag: '0',
						name: '创建新物品',
					},
					{
						flag: '1',
						name: '选择已有物品',
					}
				],

				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
			}
		},
		async onLoad(options) {
			// 1、根据order数据获取需求用户相关信息
			// 2、根据order渲染用户请求信息，和联系方式
			// 3、根据this.order = JSON.parse(decodeURIComponent(options.order))
			this.order = JSON.parse(decodeURIComponent(options.order))
			//修改日期格式
			this.order.createTime = this.order.createTime.replace('T', ' ');
			console.log('页面的order', this.order)

			// 初始化函数获取数据
			this.getnUserData(this.order.needUid);
			if (this.order.otherItemId != null) {
				this.getOtherItemData(this.order.otherItemId);
			} else {
				this.getOtherItemData(this.order.itemId)
			}
			//向后端发送请求，表示该订单已经查看，去除小红点
			this.removeRedDot(this.order.id);
		},
		methods: {
			// 选择sheet后的逻辑操作
			//关闭模态框
			hideModal() {
				console.log("点击了取消按钮")
				this.showModal = ''
				this.showModal2 = ''
			},
			//确认订单
			confirmAcceptOrder() {
				//关闭模态框
				this.showModal2 = ''
				this.order.createTime = this.order.createTime.replace(' ', 'T');
				//发送请求，设置order的完成以及两个item的状态
				uni.request({
					url: 'http://localhost:8080/orders/finishOrder',
					method: 'POST',
					header: {
						'content-type': 'application/json',
						'token': this.token
					},
					data: JSON.stringify(this.order),
					success: (res) => {
						// 请求成功的回调函数，处理后端返回的数据
						if (res.data.code === 1) {
							// 请求成功toast
							uni.showToast({
								title: '操作成功！',
								icon: 'success',
								duration: 1500
							});

							//跳转到物品选择页
							setTimeout(function() {
								//回到上一页
								uni.navigateBack()
							}, 1000);
						} else {
							// show失败的toast
							uni.showToast({
								title: '操作失败！',
								icon: 'error',
								duration: 1500
							});
						}
					},
					fail: (err) => {
						// show失败的toast
						uni.showToast({
							title: '操作失败！',
							icon: 'error',
							duration: 1500
						});
					},
				})
			},
			// 请求后端接口，拒绝订单
			confirmCancelOrder() {
				//关闭模态框
				this.showModal = ''
				this.order.createTime = this.order.createTime.replace(' ', 'T');
				//发送请求，设置order的完成以及两个item的状态
				uni.request({
					url: 'http://localhost:8080/orders/refuseOrder',
					method: 'POST',
					header: {
						'content-type': 'application/json',
						'token': this.token
					},
					data: JSON.stringify(this.order),
					success: (res) => {
						// 请求成功的回调函数，处理后端返回的数据
						if (res.data.code === 1) {
							// showtoast并且返回上个页面
							// 请求成功toast
							uni.showToast({
								title: '操作成功！',
								icon: 'success',
								duration: 1500
							});

							//跳转到物品选择页
							setTimeout(function() {
								//回到上一页
								uni.navigateBack()
							}, 1000);
						} else {
							// show失败的toast
							uni.showToast({
								title: '操作失败！',
								icon: 'error',
								duration: 1500
							});
						}
					},
					fail: (err) => {
						// show失败的toast
						uni.showToast({
							title: '操作失败！',
							icon: 'error',
							duration: 1500
						});
					},
				})
			},
			// 请求后端，已读订单去除红点
			removeRedDot(id) {
				uni.request({
					url: 'http://localhost:8080/msg/removeRedDot/' + id,
					method: 'PUT',
					header: {
						'content-type': 'application/json',
						'token': this.token
					},
					data: JSON.stringify(this.order),
					success: (res) => {
						console.log(res.data)
					}
				})
			},
			// 打开拒绝订单模态框
			cancelOrder(item) {
				this.showModal = 'show'
			},
			//打开确订单模态框
			confirmOrder(item) {
				this.showModal2 = 'show'
			},
			getDeliveryText(delivery) {
				console.log('调用 getDeliveryText 方法');
				switch (delivery) {
					case 0:
						return '任意';
					case 1:
						return '自提';
					case 2:
						return '面交';
					case 3:
						return '邮寄';
					default:
						return '';
				}
			},
			getnUserData(openId) {
				return new Promise((resolve, reject) => {
					uni.request({
						url: 'http://localhost:8080/users/user?openId=' + openId,
						method: 'GET',
						header: {
							'token': this.token
						},
						success: (res) => {
							// 请求成功的回调函数，处理后端返回的数据
							if (res.data && res.data.code === 1) {
								//赋值给前端的 item 数据
								this.user = res.data.data;
								console.log('this.user的数据：', this.user)
							} else {
								console.error('请求数据失败或返回数据格式不符合预期');
							}
						},
						fail: (err) => {
							// 请求失败的回调函数，处理错误情况
							console.error('请求数据失败', err);
						}

					});
				});
			},
			getOtherItemData(id) {
				return new Promise((resolve, reject) => {
					uni.request({
						url: 'http://localhost:8080/items/' + id,
						method: 'GET',
						header: {
							'token': this.token
						},
						success: (res) => {
							// 请求成功的回调函数，处理后端返回的数据
							if (res.data && res.data.code === 1) {
								//赋值给前端的 item 数据
								this.item = res.data.data.item;
								this.itemImages = res.data.data.itemImages
								console.log('this.item的数据：', this.item)
								console.log('this.item.deliveryStyle的数据：', this.item
									.deliveryStyle)
								//修改日期格式
								this.item.createTime = this.item.createTime.replace('T',
									' ');
							} else {
								console.error('请求数据失败或返回数据格式不符合预期');
							}
						},
						fail: (err) => {
							// 请求失败的回调函数，处理错误情况
							console.error('请求数据失败', err);
						}

					});
				});
			},


			// 点击跳转订单详细页面
			buy: function(e) {
				// console.log(e);
				uni.navigateTo({
					url: '/pages/home/confirm_order/confirm_order'
				});
			},

		}
	}
</script>

<style lang="scss">
	/* 模态框样式 */
	.modal {
		position: fixed;
		// height: 380rpx;
		// width: 300rpx;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;

		.modal-content {
			background-color: #fff;
			padding: 20px;
			border-radius: 10px;
		}

		.modal-buttons {
			display: flex;
			justify-content: center;
			/* 将按钮水平居中显示 */
		}

		.modal-content {
			background-color: #fff;
			padding: 20px;
			border-radius: 10px;
			width: 80%;
			/* 设置模态框内容宽度为父容器的80% */
		}

		.uv-demo-block {
			margin-bottom: 20px;
			/* 设置每个 demo-block 之间的间距 */
		}

		.uv-demo-block__title {
			font-size: 16px;
			/* 设置标题字体大小 */
			margin-bottom: 15px;
			/* 设置标题和内容之间的间距 */
		}

		.uv-demo-block__content {
			width: 100%;
			/* 设置内容区域宽度为100% */
		}

		.uv-textarea {
			width: calc(100% - 20px);
			/* 设置文本框宽度为父容器宽度减去一定的间距，例如这里减去20px */
			height: 120px;
			/* 设置文本框高度为120px */
			font-size: 12px;
			/* 设置文本框字体大小 */
		}

		.modal-button {
			flex: 1;
			margin: 20rpx;
			padding: 10px 0;
			text-align: center;
			font-size: 16px;
			cursor: pointer;
		}

		.modal-button.confirm {
			color: #fff;
			background-color: #007bff;
		}

		.modal-button.cancel {
			color: #fff;
			background-color: #b0bbb9;
		}
	}

	// 二手交易模态框开
	.confirm-botton {
		display: inline-block;
		/* 或者 display: inline; */
	}

	/* 商家信息 */
	.padding-name {
		padding-top: 7rpx;
		padding-left: 20rpx;
		font-size: 35rpx;
	}

	.padding-name text {
		color: gray;
		font-size: 25rpx;
	}

	.padding-button {
		padding-top: 75rpx;
		font-size: 25rpx;
	}

	.fl image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 100%;
	}

	.padding-time {
		padding-top: 30rpx;
		font-size: 25rpx;
	}

	text-title-size {
		font-size: 50rpx;
		color: gray;
	}

	/* 商家信息end */

	/* 商品内容 */
	.top-20 {
		margin-top: 20rpx;
	}

	.price-size {
		font-size: 50rpx;
		color: red;
	}

	.price-symbol {
		font-size: 20rpx;
		color: red;
	}

	.price-ori {
		margin-left: 25rpx;
		text-decoration: line-through;
	}

	.font-size text {
		// font-weight: bold;
		font-size: 35rpx;
		color: black;

	}

	.hint {
		margin-top: 30rpx;
		color: black;
		font-size: 35rpx;
	}

	.img {
		margin-top: 10rpx;
		width: 100%;
		height: 800rpx;
	}

	.cu-tag {
		margin-left: 20rpx;
		/* padding: 0rpx; */
		font-size: 22rpx;
	}

	.browse {
		display: flex;
		justify-content: space-between;
	}

	.browse-tiem {
		font-size: 23rpx;
		color: gray;
	}

	.padding-browse {
		padding: 10rpx;
	}

	/* 商品内容end */

	/* 商家信息 */
	.in_regard_to {
		display: flex;
		align-items: center;
	}

	.in_regard_to image {
		width: 50rpx;
		height: 65rpx;
	}

	.in_regard_to_text {
		font-size: 35rpx;
		color: black;
		font-family: inherit;
	}

	.top-30 {
		margin-top: 30rpx;

	}

	.Business_information {
		/* width: 30%; */
		padding: 5rpx;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;

	}

	.information {
		/* border-top-left-radius: 5%;
  border-top-right-radius: 5%; */
		border-radius: 20rpx;
		padding: 10rpx;
		display: flex;
		justify-content: space-around;
	}

	.item-inline {
		display: inline-block;
		margin-right: 10rpx;
		height: 150rpx;
		width: 230rpx;
	}

	/* end */

	/* 消息 */
	.msg {
		display: flex;
	}

	.msg-conetent {
		margin-left: 30rpx;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		margin-top: 10rpx;
		width: 80%;
	}

	.msg-timer {
		padding-left: 20rpx;
	}

	.msg-timers {
		color: gray;
		font-size: 22rpx;
	}

	/* end */



	/* 相似商品 */
	.container {
		margin-left: 29rpx;
		margin-right: 20rpx;
		/* float: left; */
		height: 530rpx;
		width: 43%;
		background: white;
		margin-bottom: 20rpx;

	}

	.container_img image {
		height: 300rpx;
		width: 100%;
	}

	.container_text {
		color: black;
		padding: 10rpx;
		font-size: 23rpx;
	}

	.container_price {
		display: flex;
		justify-content: space-between;
		padding-left: 8rpx;
		padding-right: 8rpx;
	}

	.container_price_text_0 {
		color: red;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}

	.container_price_text_1 {
		font-size: 22rpx;
	}

	.container_line {
		width: 100%;
		background: gainsboro;
		height: 1rpx;
		margin-top: 10rpx;
	}

	.container_user {
		margin-top: 20rpx;
		display: flex;
		line-height: 50rpx;
	}

	.container_user image {
		margin-left: 10rpx;
		margin-right: 50rpx;
		height: 50rpx;
		width: 50rpx;
	}

	.container-flex {
		display: flex;
		flex-wrap: wrap;
	}

	/* end */

	/* 底部操作选项卡 */
	.fixation {
		position: fixed;
		bottom: 0rpx;
		width: 100%;
	}

	.margin-rigth-20 {
		margin-right: 20rpx;
	}

	/* end */
</style>