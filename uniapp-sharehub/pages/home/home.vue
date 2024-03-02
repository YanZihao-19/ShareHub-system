<template>
	<view class="home">
		<!-- 搜索 -->
		<view class="search">
			<uv-row customStyle="margin-bottom: 10px" gutter="10">
				<uv-col span="10">
					<uv-input class="searchInput" placeholder="搜索关键字" prefixIcon="search" shape="circle"
						prefixIconStyle="font-size: 22px;color: #909399"></uv-input>
				</uv-col>
				<uv-col span="1.5">
					<uv-button class="type" type="primary" shape="circle" text="分类" size="normal"
						:plain="true"></uv-button>
				</uv-col>
			</uv-row>
		</view>
		<!-- 搜索end -->


		<!-- 轮播图 -->
		<view>
			<uv-swiper :list="swiperList" indicator indicatorMode="line" circular @click="clickSwiper"></uv-swiper>
		</view>
		<!-- 轮播图end -->


		<!--头条滚动区域-->
		<view>
			<uv-notice-bar :text="text" @click="clickNotice" direction="column"></uv-notice-bar>
		</view>
		<!-- end -->

		<!-- 宫格列表 -->
		<view class="uv-page">
			<view class="uv-demo-block">
				<uv-scroll-list>
					<view class="scroll-list">
						<view class="scroll-list__line" v-for="(item, index) in menuArr" :key="index">
							<view class="scroll-list__line__item" v-for="(item1, index1) in item" :key="index1"
								:class="[(index1 === item.length - 1) && 'scroll-list__line__item--no-margin-right']">

								<image class="scroll-list__line__item__image" :src="item1.icon" mode="heightFix">
								</image>
								<text class="scroll-list__line__item__text">{{ item1.name }}</text>
							</view>
						</view>
					</view>
				</uv-scroll-list>
			</view>
		</view>
		<!-- 宫格列表end -->

		<!-- 点击回到顶部 -->
		<view class='goTop'>
			<image src='../../static/img/top_top.png' v-if="!showTop" @click='goTop'></image>
		</view>
		<!-- end -->



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
							<view v-for="(item, index) in list1" :key="item.id" class="waterfall-item"
								@longpress="longHandle(item)">
								<view class="waterfall-item__image" :style="[imageStyle(item)]">
									<image :src="item.image" mode="widthFix" :style="{width:item.width+'px'}"></image>
								</view>
								<view class="waterfall-item__ft">
									<view class="waterfall-item__ft__title">
										<text class="value">{{item.title}}</text>
									</view>
									<view class="waterfall-item__ft__desc uv-line-2">
										<text class="value">{{item.desc}}</text>
									</view>
									<view class="waterfall-item__ft__btn" v-if="index==0">
										<button type="primary"
											style="height: 60rpx;line-height: 60rpx;font-size: 28rpx;"
											@click="edit(item)">异步修改</button>
									</view>
								</view>
							</view>
						</view>
					</template>
					<!-- 第二列数据 -->
					<template v-slot:list2>
						<!-- 为了磨平部分平台的BUG，必须套一层view -->
						<view>
							<view v-for="(item, index) in list2" :key="item.id" class="waterfall-item" 
							@longpress="longHandle(item)">
								
								<view class="waterfall-item__image" :style="[imageStyle(item)]">
									<image :src="item.image" mode="widthFix" :style="{width:item.width+'px'}"></image>
								</view>
								<view class="waterfall-item__ft">
									<view class="waterfall-item__ft__title">
										<text class="value">{{item.title}}</text>
									</view>
									<view class="waterfall-item__ft__desc uv-line-2">
										<text class="value">{{item.desc}}</text>
									</view>
								</view>
							</view>
						</view>
					</template>
					<!-- 第二列数据 -->
					
					
				</uv-waterfall>
				<uv-load-more :status="loadStatus"></uv-load-more>
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
				// 导航条
				TabCur: '0',
				scrollLeft: 0,
				// 导航条end
				scrollTop: 0, //屏幕位置
				TabCurTab: 0, //吸附置顶的偏差值
				ceil_top: '', //导航条置顶高度
				// 轮播图
				cardCur: 0,
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				// 轮播图end

				// 滚动条
				text: ['uv-ui众多组件覆盖开发过程的各个需求', '组件功能丰富，多端兼容', '让您快速集成，开箱即用'],
				// 宫格列表
				menuBaseUrl: 'https://cdn.uviewui.com/uview/menu/',
				// 1	电子产品1
				// 2	玩具1
				// 3	图书1
				// 4	家用电器1
				// 5	家具1
				// 6	体育用品1
				// 7	宠物用品1
				// 8	服装1
				// 9	母婴用品1
				// 10	健身器材1
				// 11	美妆用品1
				// 12	数码产品
				menuArr: [
					[{
							name: '电子产品',
							icon: require('@/static/itemImages/电子产品.png')
						},
						{
							name: '儿童玩具',
							icon: require('@/static/itemImages/儿童玩具.png')
						}, {
							name: '图书',
							icon: require('@/static/itemImages/图书.png')
						}, {
							name: '数码产品',
							icon: require('@/static/itemImages/数码产品.png')
						}, {
							name: '家具',
							icon: require('@/static/itemImages/家具.png')
						}, {
							name: '体育用品',
							icon: require('@/static/itemImages/体育用品.png')
						}
					],
					[{
						name: '宠物用品',
						icon: require('@/static/itemImages/宠物用品.png')
					}, {
						name: '服装',
						icon: require('@/static/itemImages/服装.png')
					}, {
						name: '母婴用品',
						icon: require('@/static/itemImages/母婴用品.png')
					}, {
						name: '健身器材',
						icon: require('@/static/itemImages/健身器材.png')
					}, {
						name: '美妆用品',
						icon: require('@/static/itemImages/美妆用品.png')
					}, {
						name: '家用电器',
						icon: require('@/static/itemImages/家用电器.png')
					}]
				],

				//瀑布流数据
				list: [], // 瀑布流全部数据
				list1: [], // 瀑布流第一列数据
				list2: [], // 瀑布流第二列数据
				// list3: [], // 瀑布流第三列数据

				loadStatus: 'loadmore',
				leftGap: 10,
				rightGap: 10,
				columnGap: 10,

				//导航条
				tablist: [{
						id: 1,
						name: '导航条888'
					},
					{
						id: 2,
						name: '导航条2'
					},
					{
						id: 3,
						name: '导航条3'
					},
					{
						id: 4,
						name: '导航条4'
					},
					{
						id: 5,
						name: '导航条5'
					},
					{
						id: 6,
						name: '导航条6'
					},
				],
				//end
				//显示异常屏幕回到初始化位置开关
				showTop: false, //异常
			}
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
		
		//在这里初始化的进行后端请求
		async onLoad() {
			const {
				data
			} = await this.getData();
			this.list = data;
		},
		
		onHide() {
			// #ifndef APP-NVUE
			this.$refs.waterfall.clear();
			// #endif
		},

		// 下拉刷新数据
		async onPullDownRefresh() {
			this.list = [];
			// #ifndef APP-NVUE
			this.$refs.waterfall.clear();
			// #endif
			this.list1 = [];
			this.list2 = [];
			this.init();
			uni.showToast({
				icon: 'success',
				title: '刷新成功'
			})
			uni.stopPullDownRefresh();
		},
		
		// 触底加载更多
		async onReachBottom() {
			if (this.loadStatus == 'loadmore') {
				this.init();
			}
		},
		methods: {
			clickImage(image) {
				console.log(image)
			},
			clickSwiper(index) {
				console.log(index)
			},

			clickNotice(index) {
				console.log(index)
			},
			//  导航条点击end
			// 点击回到顶部
			onPageScroll: function(e) {
				// console.log(e)
				// this.setData({
				//   scrollTop: e.scrollTop
				// })
				this.scrollTop = e.scrollTop

				if (e.scrollTop > 500) {
					this.showTop = false;
				} else {
					this.showTop = true;
				}
			},
			goTop: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			//end


			// 吸附自顶的高度
			SelectorQuery: function() {
				var that = this;
				const query = wx.createSelectorQuery()
				query.select('#navTab').boundingClientRect()
				query.selectViewport().scrollOffset()
				query.exec(function(res) {
					console.log(res);
					// ceil_top: res[0].top - res[0].height - res[0].height

				})
			},

			//搜索框的高度
			selectTab: function() {
				var that = this;
				const query = wx.createSelectorQuery()
				query.select('#TabCurTab').boundingClientRect()
				query.selectViewport().scrollOffset()
				query.exec(function(res) {
					console.log(res)
					this.TabCurTab = res[0].bottom - res[0].height - 4;
				})
			},

			//瀑布流

			// 选项卡切换
			tabChange(index) {
				// #ifndef APP-NVUE
				this.$refs.waterfall.clear();
				// #endif
				this.list = [];
				this.list1 = [];
				this.list2 = [];
				this.init();
			},

			// 这点非常重要：e.name在这里返回是list1或list2，要手动将数据追加到相应列
			changeList(e) {
				this[e.name].push(e.value);
			},
			
			async init() {
				this.loadStatus = 'loading';
				const {
					data
				} = await this.getData();
				this.list.push.apply(this.list, data);
				this.loadStatus = 'loadmore';
			},


			// 长按某项执行删除操作
			longHandle(item) {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '你确定删除该项？',
					success(res) {
						if (res.confirm) {
							that.$refs.waterfall.remove(item.id);
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
			// 修改某项数据
			edit(item) {
				uni.showLoading({
					title: '修改中'
				})
				setTimeout(() => {
					item.title = 'uv-ui1.0';
					item.desc = '修改后的文本';
					uni.hideLoading();
				}, 1000)
			},


			// 模拟的后端数据
			getData() {
				return new Promise((resolve) => {
					const imgs = [{
							url: 'https://via.placeholder.com/100x110.png/3c9cff/fff',
							width: 100,
							height: 110
						},
						{
							url: 'https://via.placeholder.com/200x220.png/f9ae3d/fff',
							width: 200,
							height: 220
						},
						{
							url: 'https://via.placeholder.com/300x340.png/5ac725/fff',
							width: 300,
							height: 340
						},
						{
							url: 'https://via.placeholder.com/400x400.png/f56c6c/fff',
							width: 400,
							height: 400
						},
						{
							url: 'https://via.placeholder.com/500x510.png/909399/fff',
							width: 500,
							height: 510
						},
						{
							url: 'https://via.placeholder.com/600x606.png/3c9cff/fff',
							width: 600,
							height: 606
						},
						{
							url: 'https://via.placeholder.com/310x422.png/f1a532/fff',
							width: 310,
							height: 422
						},
						{
							url: 'https://via.placeholder.com/320x430.png/3c9cff/fff',
							width: 320,
							height: 430
						},
						{
							url: 'https://via.placeholder.com/330x424.png/f9ae3d/fff',
							width: 330,
							height: 424
						},
						{
							url: 'https://via.placeholder.com/340x435.png/5ac725/fff',
							width: 340,
							height: 435
						},
						{
							url: 'https://via.placeholder.com/350x440.png/f56c6c/fff',
							width: 350,
							height: 440
						},
						{
							url: 'https://via.placeholder.com/380x470.png/909399/fff',
							width: 380,
							height: 470
						}
					];
					let list = [];
					const doFn = (i) => {
						const randomIndex = Math.floor(Math.random() * 10);
						return {
							id: guid(),
							allowEdit: i == 0,
							image: imgs[randomIndex].url,
							w: imgs[randomIndex].width,
							h: imgs[randomIndex].height,
							title: i % 2 == 0 ? `(${this.list.length + i + 1})体验uv-ui框架` :
								`(${this.list.length + i +1})uv-ui支持多平台`,
							desc: i % 2 == 0 ? `(${this.list.length + i + 1})欢迎使用uv-ui，uni-app生态专用的UI框架` :
								`(${this.list.length + i})开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序`
						}
					};
					// 模拟异步
					setTimeout(() => {
						for (let i = 0; i < 20; i++) {
							list.push(doFn(i));
						}
						resolve({
							data: list
						});
					}, 200)
				})
			}

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