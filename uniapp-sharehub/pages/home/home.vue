<template>
	<view class="home">
		<!-- 搜索 -->
		<view class="search">
			<uv-row customStyle="margin-bottom: 10px" gutter="10">
				<uv-col span="10">
					<uv-input class="searchInput" placeholder="搜索关键字" v-model='keywords' prefixIcon="search"
						shape="circle" prefixIconStyle="font-size: 22px;color: #909399"></uv-input>
				</uv-col>
				<uv-col span="1.5">
					<uv-button class="type" type="primary" shape="circle" text="查询" @click='keywordsSearch'
						size="normal" :plain="true"></uv-button>
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
		<!-- 视图容器，设置背景颜色 -->
		<view class="uv-page" style="background-color: #FEFEFE;">
			<!-- 示例区块容器 -->
			<view class="uv-demo-block">
				<!-- 自定义滚动列表组件 -->
				<uv-scroll-list>
					<!-- 滚动列表容器 -->
					<view class="scroll-list">
						<!-- 遍历 menuArr 数组，渲染每一行 -->
						<view class="scroll-list__line" v-for="(item, index) in menuArr" :key="index">
							<!-- 遍历当前行的每个项目 ,根据条件添加类名，控制样式 -->
							<view class="scroll-list__line__item" v-for="(item1, index1) in item" :key="index1"
								:class="[(index1 === item.length - 1) && 'scroll-list__line__item--last']"
								@tap="itemClick(item1.tag)">

								<!-- 显示项目图标 -->
								<image class="scroll-list__line__item__image" :src="item1.icon" mode="heightFix">
								</image>

								<!-- 显示项目名称 -->
								<text class="text-cyan scroll-list__line__item__text"
									:class="{ 'my-text-cyan': item1.tag === tag }">{{ item1.name }}</text>
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
														<uv-tags :text="getModeText(item.tradeMode)"
															:type="getModeType(item.tradeMode)"></uv-tags>
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
													<view class='address cu-tag light bg-blue radius'>
														{{handleAddress(item.address)}}
													</view>
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
														<uv-tags :text="getModeText(item.tradeMode)"
															:type="getModeType(item.tradeMode)"></uv-tags>
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
										<!-- 物品所在地标签， -->
										<uv-row justify="space-between" gutter="4">
											<uv-col span="4">
												<view>
													<view class='address cu-tag light bg-cyan radius'>
														{{handleAddress(item.address)}}
													</view>
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
				tag: '0', //表示物品种类
				tradeMode: '3', //表示物品的类型，0免费，1易物，2二手
				token: '',
				keywords: '', //搜索关键字
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
				text: ['今天系统正式上线，开始内测', '验证回收商资历，解锁更多特权！', '分享平台给好友，赢共享次数上限！'],
				// 宫格列表
				menuBaseUrl: 'https://cdn.uviewui.com/uview/menu/',
				menuArr: [
					[{
						tag: '1',
						name: '电子产品',
						icon: require('@/static/itemImages/电子产品.jpg')
					}, {
						tag: '8',
						name: '男装',
						icon: require('@/static/itemImages/男装.jpg')
					}, {
						tag: '9',
						name: '女装',
						icon: require('@/static/itemImages/女装.jpg')
					}, {
						tag: '5',
						name: '家居日用',
						icon: require('@/static/itemImages/家居日用.jpg')
					}, {
						tag: '11',
						name: '运动户外',
						icon: require('@/static/itemImages/运动户外.jpg')
					}, {
						tag: '6',
						name: '儿童玩具',
						icon: require('@/static/itemImages/儿童玩具.jpg')
					}, {
						tag: '7',
						name: '宠物用品',
						icon: require('@/static/itemImages/宠物用品.jpg')
					}],
					[{
							tag: '3',
							name: '图书',
							icon: require('@/static/itemImages/图书.jpg')
						},
						{
							tag: '2',
							name: '美妆用品',
							icon: require('@/static/itemImages/美妆用品.jpg')
						}, {
							tag: '10',
							name: '母婴用品',
							icon: require('@/static/itemImages/母婴用品.jpg')
						}, {
							tag: '12',
							name: '家用电器',
							icon: require('@/static/itemImages/家用电器.jpg')
						}, {
							tag: '4',
							name: '数码影音',
							icon: require('@/static/itemImages/数码影音.jpg')
						},
						{
							tag: '13',
							name: '家纺家居',
							icon: require('@/static/itemImages/家纺家居.jpg')
						}, {
							tag: '14',
							name: '其他',
							icon: require('@/static/itemImages/其他.jpg')
						},
					]
				],

				//瀑布流数据
				list: [], // 瀑布流全部数据
				list1: [], // 瀑布流第一列数据
				list2: [], // 瀑布流第二列数据
				loadStatus: 'loadmore',
				leftGap: 10,
				rightGap: 10,
				columnGap: 10,
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
			},
			// handleAddress: function(address) {
			// 	let addressParts = address.split(",");
			// 	return addressParts[1];
			// }
		},

		async onLoad() {
			//获取token
			this.token = uni.getStorageSync('token')
			// 调用 getData() 函数获取数据
			const data = await this.getData();
			this.list = data; // 将返回的数据赋值给 list 数组

			//获取用户未读订单数，存储到vuex中
			let res = await this.getDotNum(this.token)
		},
		onShow() {
			console.log('调用了onShow')
		},
		onTabItemTap: function(e) {
			// #ifndef APP-NVUE
			this.$refs.waterfall.clear();
			// #endif
			this.list = [];
			this.list1 = [];
			this.list2 = [];
			this.tag = '0';
			this.tradeMode = '3'
			// 根据不同的选项卡索引设置 mode 的值
			this.init();
			//重新获取红点
			this.getDotNum(this.token)
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
				console.log('触发加载')
				this.init();
			}
		},

		methods: {
			//修改地址字符串
			handleAddress: function(address) {

				const addressParts = address.split(',');
				if (addressParts.length < 3) {
					return '';
				}

				// 获取城市和区
				const city = addressParts[1];
				const district = addressParts[2];

				// 返回格式化后的地址
				return `${city} ${district}`;
			},
			//选择物品种类
			itemClick(tag) {
				//获取点击的物品种类
				this.tag = tag
				//重新获取对应物品种类和交易方式的物品列表
				this.list = [];
				this.list1 = [];
				this.list2 = [];
				this.init()
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
			clickImage(image) {
				// console.log(image)
			},
			clickSwiper(index) {
				// console.log(index)
			},

			clickNotice(index) {
				// console.log(index)
			},
			onPageScroll: function(e) {
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
					// console.log(res);
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
					// console.log(res)
					this.TabCurTab = res[0].bottom - res[0].height - 4;
				})
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
							console.log('当前用户未读信息数组：', res.data.data)
							// 存储到vuex中
							//用户信息存储到vuex中
							let dotNumList = res.data.data
							console.log('评论dot数', dotNumList[1])
							this.$store.commit('notice/setCommentNum', dotNumList[0]);
							this.$store.commit('notice/setOrderNum', dotNumList[1]);
							this.$store.commit('notice/setInformNum', dotNumList[2]);
							//展示tabbar信息未读数
							this.showTabBarRedDot()
						}
					})
				}
				// 获取评论红点数
				// 获取通知红点数


			},
			// 展示tabBer的未读红点
			showTabBarRedDot() {
				let commentNum = this.$store.state.notice.commentNum
				let orderNum = this.$store.state.notice.orderNum
				let informNum = this.$store.state.notice.informNum

				let totalRedDotNum = commentNum + orderNum + informNum
				console.log('Vuex中存储的用户用户未读总数：', totalRedDotNum);
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
			// 选项卡切换
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
						this.tradeMode = '3'; // 点击全部时 mode=3
						break;
					case 1:
						this.tradeMode = '0'; // 点击免费共享时 mode=0
						break;
					case 2:
						this.tradeMode = '1'; // 点击以物换物时 mode=1
						break;
					case 3:
						this.tradeMode = '2'; // 点击二手出售时 mode=2
						break;
					default:
						break;
				}
				this.init();
			},

			//点击物品跳转到详情页!!!!!!!!!!!!!!（待修改！！！）
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

			//重新获取数据
			async init() {
				this.loadStatus = 'loading';
				const data = await this.getData();

				this.list.push.apply(this.list, data);
				this.loadStatus = 'loadmore';
			},


			// 长按某项执行删除操作
			longHandle(item) {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '你不喜欢该物品吗？',
					success(res) {
						if (res.confirm) {
							console.log("长按的item:",item)
							//向后端发送请求，降低该物品类别的期望值
							if (that.token != null && that.token != '') {
								uni.request({
									url: 'http://localhost:8080/preference/decPreference?',
									method: 'PUT',
									data: JSON.stringify(item),
									header: {
										'content-type': 'application/json', // 设置请求头为 JSON 类型
										'token': that.token
									},
									success: (res) => {

										// 请求成功
										that.$refs.waterfall.remove(item.id);
									}
								})
							}
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
			//搜索关键字
			keywordsSearch() {
				//跳转搜索页面，并跟keywords参数
				uni.navigateTo({
					url: '/pages/home/home_search/home_search?keywords=' + this.keywords
				})
			},

			// 获取数据
			getData() {
				return new Promise((resolve, reject) => {
					// console.log('发送给后端的token值：', this.token)
					console.log('发送给后端的list值：', this.list)
					//发送请求将前端itemList发给后端
					let itemList = this.list
					uni.request({
						url: 'http://localhost:8080/items/recommendItems?tag=' + this
							.tag + '&mode=' + this
							.tradeMode + '&id=0',
						method: 'POST',
						header: {
							'content-type': 'application/json', // 设置请求头为 JSON 类型
							'token': this.token
						},
						data: JSON.stringify(itemList),
						success: (res) => {
							const data = res.data.data.map(item => ({
								id: item.id, //物品id
								allowEdit: false, // 暂时设置为 false，根据实际需求进行修改
								image: item.image, //物品图片卡图像
								itemTitle: item.itemTitle, //物品标题
								tag:item.tag,//物品种类
								itemDesc: item.itemDesc, //物品描述
								address: item.address, //物品地址
								tradeMode: item.tradeMode, //物品交易模式
								delivery: item.deliveryStyle ,//物品交付方式
								suit: item.suit //适合年龄
							}));
							resolve(data); // 将处理后的数据返回给调用方
						},
						fail: (err) => {
							reject(err);
						}
					});
				});
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
	.address {
		margin-top: 15rpx;
	}

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