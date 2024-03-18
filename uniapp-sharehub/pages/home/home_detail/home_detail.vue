<template>
	<view>
		<!-- 商家信息 -->
		<view class="bg-white ">
			<view class=" cf padding-sm">
				<view class="radius fl padding-sm ">
					<image :src='user.image'></image>
					<view class="fr padding-name">
						<view>{{user.username}}</view>
						<view class="padding-time ">
							<text>{{item.createTime}}</text>
						</view>
					</view>
				</view>

				<!-- 举报功能待完善！！！！！！！！！！！！！！！！！！ -->
				<view class=" fr padding-button">
					<text>举报</text>
				</view>
			</view>
		</view>
		<!-- 商家信息end -->

		<!-- 商品内容 -->
		<view class='contanier bg-white padding-sm top-20'>
			<view class='price'>
				<text class='price-symbol'>￥</text>
				<text class='price-size'>{{item.sellPrice}}</text>
				<text class='price-ori'>￥{{item.originalPrice}}</text>
				<!-- <view class="cu-tag">不讲价</view> -->
			</view>
			<!-- 物品标题 -->
			<view class='bg-white top-20 font-size'>
				<text>
					{{item.itemTitle}}
				</text>
			</view>

			<!-- 物品描述 -->
			<view class='bg-white top-20  '>
				<text class="text-xl ">
					{{item.itemDesc}}
				</text>
			</view>

			<!-- 交易方式 -->
			<view class='hint'>
				<text>该物品支持
					<template v-if="item.deliveryStyle === 0"><b>任意</b></template>
					<template v-else-if="item.deliveryStyle === 1"><b>自提</b></template>
					<template v-else-if="item.deliveryStyle === 2"><b>同城面交</b></template>
					<template v-else-if="item.deliveryStyle === 3"><b>邮寄</b></template>
					交易方式。
				</text>

			</view>
			<!-- end -->

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

			<view class='browse'>
				<view>
					<text></text>
					<!-- <text>担保交易</text> -->
				</view>
				<!-- 	<view class="text-gray text-sm text-right padding-browse">
					<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
					<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
					<text class="cuIcon-messagefill margin-lr-xs"></text> 30
				</view> -->

			</view>

		</view>
		<!-- 商品内容end -->

		<!-- 商家信息 -->
		<view class='bg-white top-20 padding-sm '>
			<view class='in_regard_to'>
				<view>
					<!-- <image src='../img/tiao.png'></image> -->
				</view>
				<view>
					<text class='in_regard_to_text'>关于卖家</text>
				</view>
			</view>
			<!-- 
			<navigator url='/pages/my/my_detail/my_detail'>
				<view class="cu-list menu-avatar">
					<view class="cu-item arrow ">
						<view class="cu-avatar round lg"
							style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
						</view>
						<view class="content">
							<view class="text-grey">Amibition</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut">
									<text class="cuIcon-infofill text-red  margin-right-xs"></text>
									我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
								</text>
							</view>
						</view>
						<view class="action arrow">
							<view class="cuIcon-right"></view>
						</view>
					</view>
				</view>
			</navigator>

			<view class='bg-gray top-30 information '>

				<view class='Business_information'>
					<view>5</view>
					<view>
						<text>在售宝贝</text>
					</view>
				</view>

				<view class='Business_information'>
					<view>5</view>
					<view>
						<text>累计交易</text>
					</view>
				</view>


				<view class='Business_information'>
					<view>5</view>
					<view>
						<text>在线宝贝</text>
					</view>
				</view>

			</view> -->






			<scroll-view scroll-x="true" style=" white-space: nowrap; display: flex" class='top-20'>
				<block v-for="(item,index) in 10" :key="index">
					<view class='item-inline'>
						<navigator url='' hover-class='none'>
							<view class="item-inline bg-img padding-top-xl flex align-end"
								:style=" 'background-image: url(' + url + ');' ">
								<view class="bg-shadeBottom  padding-top-xl flex-sub">
									￥200
								</view>
							</view>
						</navigator>
					</view>
				</block>

			</scroll-view>
		</view>

		<!-- end -->

		<!-- 消息 -->
		<view class='bg-white top-20 padding-sm '>
			<view class='in_regard_to'>
				<view>
					<!-- <image src='../img/tiao.png'></image> -->
				</view>
				<view>
					<text class='in_regard_to_text'>消息（10）</text>
				</view>
			</view>

			<view class='msg padding-sm' v-for="(item,index) in 3" wx:key="id">

				<view class="cu-avatar round lg"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
				</view>

				<view class='msg-conetent'>
					<view>Amibition
						<text class="cuIcon-timefill text-green msg-timer  margin-right-xs"></text>
						<text class='msg-timers'>2018-6-11</text>
					</view>
					<view>发射点撒旦点发射点撒旦发生发射点射点</view>

				</view>

			</view>
		</view>

		<!-- end -->

		<!-- 相识商品 -->
		<view class='bg-white top-20 '>
			<view class='in_regard_to'>
				<view>
					<!-- <image src='../img/tiao.png'></image> -->
				</view>
				<view>
					<text class='in_regard_to_text'>相似商品</text>
				</view>
			</view>

			<!-- 内容 -->
			<view class='container-flex '>
				<view class='card-menu container margin-top' v-for="(item,index) in 10" :key="index">
					<navigator url='/pages/home/home_detail/home_detail' hover-class='none'>
						<view class='container_img'>
							<image src='http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg'></image>
						</view>
						<view class='container_text'><text class=''>Huawei/华为Mate 20 Pro运气真好双卡双待全网通</text></view>
						<view class='container_price'>
							<text class='container_price_text_0'>￥980</text>
							<!-- <text class='container_price_text_1'>11人想要</text> -->
							<view class="cu-tag line-orange">全新</view>
						</view>
						<view class='container_line'></view>
						<view class='container_user'>
							<image src='http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg'></image>
							<text>Amibition</text>
						</view>
					</navigator>
				</view>
			</view>
			<!-- 内容end -->

		</view>

		<!-- end -->


		<!-- 操作选项卡 -->
		<view class="cu-bar bg-white tabbar border shop fixation">
			<button class="action" bindtap='toChat'>
				<view class="cuIcon-service text-green">
					<view class="cu-tag badge"></view>
				</view>
				聊一聊
			</button>
			<view class="action">
				<view class=" cuIcon-shop">
					<view class="cu-tag badge">99</view>
				</view>
				店铺
			</view>
			<view class="action">
				<view class="cuIcon-appreciatefill text-orange">
					<!-- <view class="cu-tag badge">99</view> -->
				</view>
				点赞
			</view>
			<view class="bg-blue submit margin-right-20" @tap="handleAction(item)">
				{{ item.tradeMode == 0 ? '立即申领' : (item.tradeMode == 1 ? '立即交换' : '立即购买') }}
			</view>

			<!-- 模态框 -->
			<view v-if="showModal" class="modal">
				<view class="modal-content">
					<view class="uv-demo-block">
						<text class="uv-demo-block__title">申领理由：</text>
						<view class="uv-demo-block__content">
							<uv-textarea v-model="reason" placeholder="诚恳的填写您想要的申领理由，可以大大增加成功几率哦~" :maxlength="200" count></uv-textarea>
						</view>
					</view>

					<view class="uv-demo-block">
						<text class="uv-demo-block__title">联系方式：</text>
						<view class="uv-demo-block__content">
							<uv-textarea v-model="contact" placeholder="请填写您的微信号或手机号等，方便赠送者联系到您哦~"></uv-textarea>
						</view>
					</view>
					<!-- 将按钮放在第二个输入框下面 -->
					<view class="modal-buttons">
						<view class="modal-button cancel" @tap="cancel">取消</view>
						<view class="modal-button confirm" @tap="confirm">提交</view>
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
				showModal: false, // 控制模态框显示隐藏
				reason: '', // 申请理由
				contact: '', // 联系方式
				user: {
					username: '', //用户名
					credibility: '', //信誉
					role: '', //角色
					image: '', //头像
					identifyId: '', //实名认证
				},
				item: {
					createTime: '', //创建时间
					image: '', //物品首页图
					itemTitle: '', //物品名称
					itemDesc: '', //物品描述
					tradeMode: '', //物品交易模式(共享/换物/二手)
					sellPrice: '', //现价
					originalPrice: '', //原价
					usageLevel: '', //物品磨损度
					deliveryStyle: '', //物品交易方式
					ownerUid: '' //用户openID
				},
				itemImages: [], //物品详情图

				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
			}
		},
		async onLoad() {
			try {
				//获取上个页面传来的item.id
				const pages = getCurrentPages();
				const currentPage = pages[pages.length - 1];
				const {
					id
				} = currentPage.options;

				// 初始化函数获取数据
				this.getItemData(id);

			} catch (error) {
				console.error('Failed to load data:', error);
			}
		},
		methods: {
			handleAction(item) {
				if (item.tradeMode == 0) {
					// 点击立即申领按钮显示模态框
					this.showModal = true;

				}
			},
			cancel() {
				this.showModal = false; // 取消按钮关闭模态框
			},
			confirm() {
				// 提交按钮关闭模态框
				// 执行其他操作，例如提交数据
				console.log('申请理由：', this.reason);
				console.log('联系方式：', this.contact);
				this.showModal = false;


			},
			getUser(openId) {
				return new Promise((resolve, reject) => {
					//获取token
					this.token = uni.getStorageSync('token')
					// console.log('发送给后端的token值：', this.token)

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
			getItemData(id) {
				return new Promise((resolve, reject) => {
					//获取token
					this.token = uni.getStorageSync('token')
					// console.log('发送给后端的token值：', this.token)

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
								//修改日期格式
								this.item.createTime = this.item.createTime.replace('T', ' ');
								console.log('this.item.time的数据：', this.item.createTime)

								this.getUser(this.item.ownerUid);
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

			// //放大图片
			// previewImage(url) {
			// 	uni.previewImage({
			// 		current: url, // 当前显示图片的链接
			// 		urls: [url] // 需要预览的图片链接列表
			// 	});
			// },


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
		font-weight: bold;
		font-size: 35rpx;
		color: black;

	}

	.hint {
		margin-top: 60rpx;
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