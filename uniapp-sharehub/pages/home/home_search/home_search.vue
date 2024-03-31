<template>
	<view>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" v-model="keywords" placeholder="搜索物品关键词" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round" @tap="search">搜索</button>
			</view>
		</view>
		<!-- 瀑布流内容 -->
		<view class="waterfall">
			<uv-sticky>
				<view style="padding: 10rpx 0;background-color: #fff;">
					<!-- 这里待修改 -->
					<uv-tabs :list="[{ name: '全部' }, { name: '免费共享' }, { name: '以物换物' }, { name: '二手交易' }]"
						@click="tabChange"></uv-tabs>
				</view>
			</uv-sticky>
			<view>
				<uv-waterfall ref="waterfall" v-model="list" :add-time="10" :left-gap="leftGap" :right-gap="rightGap"
					:column-gap="columnGap" @changeList="changeList" @remove="remove">
					<!-- 第一列数据 -->
					<template v-slot:list1>
						<!-- 为了磨平部分平台的BUG，必须套一层view -->
						<view>
							<!-- 使用 v-for 遍历 list1 数组中的数据 -->
							<view v-for="(item, index) in list1" :key="index" class="waterfall-item"
								@longpress="longHandle(item)">
								<view class="waterfall-item-wrapper" @tap="goToDetail(item)">
									<!-- 每个瀑布流项的图片部分 -->
									<view class="waterfall-item__image" :style="[imageStyle(item)]">
										<!-- 图片展示，根据 item.image 设置 src -->
										<image :src="item.image" mode="widthFix" :style="{width:item.width+'px'}">
										</image>
									</view>

									<!-- 每个瀑布流项的内容部分 -->
									<view class="waterfall-item__ft">
										<!-- 交易方式和交易途径标签 -->
										<view>
											<uv-row justify="space-between" gutter="4">
												<uv-col span="6">
													<view class="uv-page__tag-item">
														<uv-tags :text="getModeText(item.mode)"
															:type="getModeType(item.mode)"></uv-tags>
													</view>
												</uv-col>
												<uv-col span="4">
													<view class="uv-page__tag-item">
														<uv-tags class="experss" :text="getDeliveryText(item.delivery)"
															plain type="error" shape="circle"></uv-tags>
													</view>
												</uv-col>
											</uv-row>
										</view>
										<!-- 标题部分 -->
										<view class="waterfall-item__ft__title uv-line-2">
											<text class="value">{{item.itemTitle}}</text>
										</view>

										<!-- 描述部分，最多显示两行 -->
										<view class="waterfall-item__ft__desc uv-line-1">
											<text class="value">{{item.itemDesc}}</text>
										</view>
										<!-- 物品所在地标签，暂未实现！！！！ -->
										<uv-row justify="space-between" gutter="4">
											<uv-col span="4">
												<view>
													<view class='cu-tag light bg-cyan radius'>成都</view>
												</view>
											</uv-col>
										</uv-row>
									</view>
								</view>
							</view>
						</view>

					</template>
					<!-- 第二列数据 -->
					<template v-slot:list2>
						<!-- 为了磨平部分平台的BUG，必须套一层view -->
						<view>
							<view v-for="(item, index) in list2" :key="index" class="waterfall-item"
								@longpress="longHandle(item)">
								<view class="waterfall-item-wrapper" @tap="goToDetail(item)">
									<view class="waterfall-item__image" :style="[imageStyle(item)]">
										<image :src="item.image" mode="widthFix" :style="{width:item.width+'px'}">
										</image>
									</view>
									<view class="waterfall-item__ft">
										<!-- 交易方式和交易途径标签 -->
										<view>
											<uv-row justify="space-between" gutter="4">
												<uv-col span="6">
													<view class="uv-page__tag-item">
														<uv-tags :text="getModeText(item.mode)"
															:type="getModeType(item.mode)"></uv-tags>
													</view>
												</uv-col>
												<uv-col span="4">
													<view class="uv-page__tag-item">
														<uv-tags class="experss" :text="getDeliveryText(item.delivery)"
															plain type="error" shape="circle"></uv-tags>
													</view>
												</uv-col>
											</uv-row>
										</view>
										<!-- 标题部分 -->
										<view class="waterfall-item__ft__title uv-line-2">
											<text class="value">{{item.itemTitle}}</text>
										</view>

										<!-- 描述部分，最多显示两行 -->
										<view class="waterfall-item__ft__desc uv-line-1">
											<text class="value">{{item.itemDesc}}</text>
										</view>
										<!-- 物品所在地标签，暂未实现！！！！ -->
										<uv-row justify="space-between" gutter="4">
											<uv-col span="4">
												<view>
													<view class='cu-tag light bg-cyan radius'>成都</view>
												</view>
											</uv-col>
										</uv-row>
									</view>
								</view>
							</view>
						</view>
					</template>
					<!-- 第二列数据 -->


				</uv-waterfall>
				<!-- <uv-load-more :status="loadStatus"></uv-load-more> -->
			</view>
		</view>

	</view>
</template>

<script>
	import {
		guid,
		sys,
		getPx
	} from '@/uni_modules/uv-ui-tools/libs/function/index.js'
	export default {
		data() {
			return {
				token: '', //用户token
				mode: '3', //交易模式
				keywords: '', //搜索关键词
				//瀑布流数据
				list: [], // 瀑布流全部数据
				list1: [], // 瀑布流第一列数据
				list2: [], // 瀑布流第二列数据
				loadStatus: 'loadmore',
				leftGap: 10,
				rightGap: 10,
				columnGap: 10,
				// 导航条
				scrollTop: 0, //屏幕位置
				TabCurTab: 0, //吸附置顶的偏差值
				ceil_top: '', //导航条置顶高度
			};
		},
		async onLoad(options) {
			//获取页面发来的数据
			this.keywords = options.keywords

			//获取token
			this.token = uni.getStorageSync('token')
			// 调用 getData() 函数获取数据
			const data = await this.getData();
			this.list = data; // 将返回的数据赋值给 list 数组
			console.log('获取到的data数据：' + this.data)
			console.log('获取到的list数据：' + this.list)
		},

		computed: {
			waterfallHeight() {
				return sys().windowHeight - getPx('120rpx');
			},
			imageStyle(item) {
				return item => {
					const v = uni.upx2px(750) - this.leftGap - this.rightGap - this.columnGap;
					const w = v / 2;
					const rate = w / item.w;
					const h = rate * item.h;
					return {
						width: w + 'px',
						height: h + 'px'
					}
				}
			}
		},
		methods: {
			async search() {
				this.list = [];
				this.list1 = [];
				this.list2 = [];
				// 调用 getData() 函数获取数据
				const data = await this.getData();
				this.list = data; // 将返回的数据赋值给 list 数组

			},
			async init() {
				try {
					//获取token
					this.token = uni.getStorageSync('token');
					//获取数据
					this.loadStatus = 'loading';
					const data = await this.getData();

					this.list.push.apply(this.list, data);
					this.loadStatus = 'loadmore';
				} catch (error) {
					console.error('获取数据出错：', error);
				}
			},
			// 获取数据
			getData() {
				return new Promise((resolve, reject) => {
					console.log('发送给后端的list值：', this.list)
					//发送请求将前端itemList发给后端
					let itemList = this.list
					uni.request({
						url: 'http://localhost:8080/items/searchItems?mode=' + this
							.mode + '&keywords=' + this
							.keywords,
						method: 'GET',
						header: {
							'content-type': 'application/json', // 设置请求头为 JSON 类型
							'token': this.token
						},
						success: (res) => {
							const data = res.data.data.map(item => ({
								id: item.id, //物品id
								allowEdit: false, // 暂时设置为 false，根据实际需求进行修改
								image: item.image, //物品图片卡图像
								itemTitle: item.itemTitle, //物品标题
								itemDesc: item.itemDesc, //物品描述
								address: item.address, //物品地址
								mode: item.tradeMode, //物品交易模式
								delivery: item.deliveryStyle //物品交付方式
							}));
							resolve(data); // 将处理后的数据返回给调用方
						},
						fail: (err) => {
							reject(err);
						}
					});
				});
			},
			//更改交易模式
			tabChange(obj) {
				console.log(obj.index)
				// #ifndef APP-NVUE
				this.$refs.waterfall.clear();
				// #endif
				this.list = [];
				this.list1 = [];
				this.list2 = [];
				// 根据不同的选项卡索引设置 mode 的值
				switch (obj.index) {
					case 0:
						this.mode = '3'; // 点击全部时 mode=3
						break;
					case 1:
						this.mode = '0'; // 点击免费共享时 mode=0
						break;
					case 2:
						this.mode = '1'; // 点击以物换物时 mode=1
						break;
					case 3:
						this.mode = '2'; // 点击二手出售时 mode=2
						break;
					default:
						break;
				}
				this.init();
			},
			// 长按某项执行删除操作
			longHandle(item) {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '你不喜欢该物品吗？',
					success(res) {
						if (res.confirm) {
							that.$refs.waterfall.remove(item.id);
							//推家算法！！！！！向后端发送请求，降低该物品的期望值

						}
					}
				})
			},
			// 删除某项后返回对应id，根据id标识在列数据中手动删除该项数据
			remove(id) {
				this.list1.forEach((item, index) => {
					if (item.id == id) {
						this.list1.splice(index, 1);
					}
				})
				this.list2.forEach((item, index) => {
					if (item.id == id) {
						this.list2.splice(index, 1);
					}
				})
			},

			//点击物品跳转到详情页
			goToDetail(item) {
				// 在这里进行页面跳转，比如跳转到详情页，并传递参数
				console.log('准备执行跳转了！')
				uni.navigateTo({
					url: '/pages/home/home_detail/home_detail?id=' + item.id
				});
			},

			// 瀑布流：这点非常重要：e.name在这里返回是list1或list2，要手动将数据追加到相应列
			changeList(e) {
				this[e.name].push(e.value);

			},
			getDeliveryText(delivery) {
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
			//瀑布流中根据后端数据展示不同文本和样式
			getModeText(mode) {
				switch (mode) {
					case 0:
						return '免费共享';
					case 1:
						return '以物换物';
					case 2:
						return '二手交易';
					default:
						return '';
				}
			},
			getModeType(mode) {
				switch (mode) {
					case 0:
						return 'success';
					case 1:
						return 'warning';
					case 2:
						return 'error';
					default:
						return '';
				}
			},

		}
	}
</script>
<style lang="scss" scoped>
	@import '@/common/demo.scss';
	@import '@/uni_modules/uv-ui-tools/libs/css/color.scss';

	//scroll样式
	.scroll-list {
		@include flex(column);

		&__goods-item {
			margin-right: 20px;

			&__image {
				width: 60px;
				height: 60px;
				border-radius: 4px;
			}

			&__text {
				color: #f56c6c;
				text-align: center;
				font-size: 12px;
				margin-top: 5px;
			}
		}

		/* 设置图标高度 宽度*/
		.scroll-list__line__item__image {
			width: 100rpx;
			height: 100rpx;
		}

		/* 添加通用的间距 */
		.scroll-list__line__item {
			margin-right: 50px;
			text-align: center
		}

		/* 设置第一个项目的左间距 */
		.scroll-list__line__item:first-child {
			margin-left: 15px;
		}

		/* 最后一个项目的右侧间距 */
		.scroll-list__line__item--last {
			margin-right: 15px;
		}

		/* 使用更具体的选择器覆盖原有样式 */
		.my-text-cyan {
			color: #fbbd08;
			font-weight: bold;
		}


		// 卡片分栏布局
		.address {
			float: right;
		}

		.demo-layout {
			text-align: center;
			height: 25px;
			border-radius: 4px;
		}

		.bg-purple {
			background: #CED7E1;
		}

		.bg-purple-light {
			background: #e5e9f2;
		}

		.bg-purple-dark {
			background: #99a9bf;
		}


		&__show-more {
			background-color: #fff0f0;
			border-radius: 3px;
			padding: 3px 6px;
			@include flex(column);
			align-items: center;

			&__text {
				font-size: 12px;
				width: 12px;
				color: #f56c6c;
				line-height: 16px;
			}
		}

		&__line {
			@include flex;
			margin-top: 10px;

			&__item {
				margin-right: 15px;

				&__image {
					width: 61px;
					height: 48px;
				}

				&__text {
					margin-top: 5px;
					color: $uv-content-color;
					font-size: 12px;
					text-align: center;
				}

				&--no-margin-right {
					margin-right: 0;
				}
			}
		}
	}

	//瀑布流
	$show-lines: 1;
	@import '@/uni_modules/uv-ui-tools/libs/css/variable.scss';

	.waterfall {
		background-color: #f1f1f1;
	}

	.waterfall-item {
		overflow: hidden;
		margin-top: 10px;
		border-radius: 6px;
	}

	.waterfall-item__ft {
		padding: 20rpx;
		background: #fff;

		&__title {
			margin-bottom: 10rpx;
			line-height: 48rpx;
			font-weight: 700;

			.value {
				font-size: 32rpx;
				color: #303133;
			}
		}

		&__desc .value {
			font-size: 28rpx;
			color: #606266;
		}

		&__btn {
			padding: 10px 0;
		}
	}

	//瀑布流end

	/* 吸附置顶 */
	.navTab {
		position: fixed;
		z-index: 9999;
		top: 0;
	}

	/* end */

	/* 搜索 */

	.search_img {
		margin-right: 30rpx;
	}



	.locaWidth {
		width: 21%;
	}

	/* end */

	/* 内容 */

	.container {
		margin-left: 29rpx;
		margin-right: 20rpx;
		float: left;
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

	/* end */



	/* 滚动的title */

	.swiperitem {
		background: #fff;
		height: 40px;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}

	/* end */

	.cu-list.grid.no-border {
		border-radius: 0rpx;
	}

	/* 3布局 */


	.canui-xzwz {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}


	.canui-duotu {
		padding: 20rpx 30rpx;
		padding-left: 380rpx;
		padding-bottom: 30rpx;
		position: relative;
		display: flex;
	}

	.canui-dtimg-a {
		position: absolute;
		left: 30rpx;
		width: 344rpx;
		height: 348rpx;
	}

	.canui-dtimg-b {
		height: 348rpx;
		width: 100%;
	}

	.canui-dtimg-ba,
	.canui-dtimg-bb {
		height: 172rpx;
	}

	.canui-dtimg-bb {
		margin-top: 5rpx;
	}

	.canui-dtimg-content {
		position: relative;
	}

	.canui-dtimg-content,
	.canui-duotu image {
		width: 100%;
		height: 100%;
	}


	.canui-dtimg-text {
		position: absolute;
		bottom: 0px;
		background: rgba(0, 0, 0, 0.4);
		height: 60rpx;
		line-height: 60rpx;
		padding: 0 15rpx;
	}

	.canui-dtimg-text .text-white {
		float: left;
		width: auto;
		max-width: 210rpx;
		margin-right: 10rpx;
		color: #aaa;
	}

	.canui-dtimg-text .text-price {
		float: right;
	}

	.canui-dtimg-a .canui-dtimg-text {
		border-radius: 0 0 0 10rpx;
	}

	.canui-dtimg-b .canui-dtimg-text .text-white {
		max-width: 150rpx;
	}

	.cu-card>.cu-item {
		margin-top: 0rpx;
	}

	.cu-card>.margin-top {
		margin-top: 30rpx;
	}

	/* end */

	/* 点击回到顶部 */

	.goTop image {
		height: 60rpx;
		width: 60rpx;
		border-radius: 100%;
		position: fixed;
		bottom: 150rpx;
		right: 60rpx;
		z-index: 10000;
	}

	/* end */

	/* 撑高线条 */
	.lines {
		display: flex;
		width: 100%;
		height: 150rpx;
	}

	/* end */

	/* 页脚 */
	.foot {
		display: flex;
		padding: 10rpx;
		align-items: center;
		justify-content: space-between;
	}

	.foot-1 {
		width: 35%;
		height: 1rpx;
		background: gainsboro;
	}

	/* end */

	/* 登陆按钮 */
	.loginButton {
		width: 100%;
	}

	/* end */
</style>