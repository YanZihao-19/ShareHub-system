<template>
	<view>
		<!-- 每个商品卡片内容 -->
		<view class='pa'>
			<uv-sticky>
				<view style="padding: 10rpx 0;background-color: #fff;">
					<uv-tabs :list="[{ name: '全部' }, { name: '免费共享' }, { name: '以物换物' }, { name: '二手交易' }]"
						@click="tabChange"></uv-tabs>
				</view>
			</uv-sticky>

			<view class='contianer shadow-warp bg-white padding-sm' v-for="(item , index) in itemList" :key="index">
				<view class='contianer-title'>
					<view class='contianer-title_1 text-cut'><text class='text-cut text-black'>{{item.itemTitle}}</text>
					</view>
					<view class='contianer-title_2 text-cut'><text
							class='text-cut'>{{formattedTime(item.createTime)}}</text></view>
				</view>

				<view class='item-inline-1_1'><text decode='true'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</text></view>
				<scroll-view scroll-x="true" style=" white-space: nowrap; display: flex" class='top-20'>
					<!-- 物品首页图 -->
					<block>
						<view class='item-inlines'>
							<!-- 点击物品跳转还未完善！！！！！！！！！！！！！！！ -->
							<navigator url='' hover-class='none'>
								<view class="item-inline bg-img padding-top-xl flex align-end"
									:style=" 'background-image: url(' +item.image+');' ">
								</view>
								<view class="item-text text-cut">
									<!-- 这里放置文字内容 -->
									<text class='text-cut text-black'>{{item.itemDesc}}</text>
								</view>
							</navigator>

						</view>
					</block>
				</scroll-view>

				<view class='container-price_desc'>
					<view class="cu-capsule round view-width">
						<view class="cu-tag bg-blue  ">
							模式
						</view>
						<view :class="['cu-tag', tagColorClass(item.tradeMode)]">
							{{ tradeModeText(item.tradeMode) }}
						</view>
					</view>

					<!-- 物品邮寄方式 -->
					<view class="cu-capsule radius">
						<view class="cu-tag bg-brown">
							<text class="cuIcon-footprint"></text>
						</view>
						<view :class="{
						  'cu-tag line-green': item.usageLevel == 0 || item.usageLevel == 1,
						  'cu-tag line-blue': item.usageLevel == 2 ||item.usageLevel == 3
						}">
							{{ item.usageLevel === 0 ? '全新' : (item.usageLevel === 1 ? '99新' : (item.usageLevel === 2 ? '95新' : '85新')) }}
						</view>

					</view>
				</view>

				<!-- 操作按钮 -->
				<view class='container-compile'>
					<view class="cu-tag line-yellow" @tap='offShelf'>下架</view>
					<view class="cu-tag line-yellow" @tap='toIssue'>编辑</view>
					<view class="cu-tag line-yellow" @tap='shareVX'>分享</view>
				</view>

				<view class='container-line'></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '',
				itemList: [], //从后端获取的用户物品列表
				// address: (...)
				// createTime: (...)
				// deliveryStyle: (...)
				// id: (...)
				// image: (...)
				// imgList: (...)
				// itemDesc: (...)
				// itemTitle: (...)
				// originalPrice: (...)
				// ownerUid: (...)
				// sellPrice: (...)
				// status: (...)
				// suit: (...)
				// tag: (...)
				// tradeMode: (...)
				// updateTime: (...)
				// usageLevel: (...)
				mode: '3', //用户选择的物品模式
				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
			}
		},
		computed: {

		},
		onLoad(optins) {
			//获取token;
			this.token = uni.getStorageSync('token')
			try {
				const data = this.getData(); // 调用 getData() 函数获取数据
				this.itemlist = data; // 将返回的数据赋值给 list 数组
			} catch (error) {
				console.error('Failed to load data:', error);
			}
		},
		methods: {
			//发送请求获取页面数据
			getData() {
				uni.request({
					url: 'http://localhost:8080/items/userItems?&mode=' + this.mode,
					method: 'GET',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						this.itemList = res.data.data;
						console.log(this.itemList)
					},
				})
			},
			//修改日期格式
			formattedTime(t) {
				// 假设 time 是后端发来的时间字符串
				let time = t.toString();
				// 使用split方法分割字符串，并取第一个元素
				return time.split('T')[0];
			},
			//修改样式
			tagColorClass(tradeMode) {
				switch (tradeMode) {
					case 0:
						return 'line-green';
					case 1:
						return 'line-blue';
					case 2:
						return 'line-red';
					default:
						return ''; // 或者其他默认样式
				}
			},
			//修改文字
			tradeModeText(tradeMode) {
				switch (tradeMode) {
					case 0:
						return '免费共享';
					case 1:
						return '以物换物';
					case 2:
						return '二手出售';
					default:
						return ''; // 或者其他默认值
				}
			},
			// 选项卡切换
			tabChange(obj) {
				console.log(obj.index)
				this.itemList = [];
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

			//重新获取数据
			async init() {
				const data = await this.getData();
				this.itemList = data
			},

			// 跳转到编辑页面
			toIssue: function() {
				//根据mode来跳转不同的编辑页面！！！！！！！！！！

				uni.navigateTo({
					url: '/pages/issue/issue_edit/issue_edit',
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
			},

			// 下架物品
			offShelf() {
				//这里改为显示toast
				uni.showModal({
					mask: true,
					title: '温馨提示',
					content: '确定要下架该物品吗？',
					success(res) {
						if (res.confirm) {
							//请求后端将该物品设置为下架

						} else if (res.cancel) {}
					}
				})
			},
			//微信分享接口还未更改！！！！！！！
			shareVX() {
				console.log("点击了微信分享")
				uni.share({
					provider: 'weixin',
					scene: "WXSceneSession",
					type: 5,
					imageUrl: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/share-logo@3.png',
					title: '欢迎体验uniapp',
					miniProgram: {
						id: 'gh_abcdefg',
						path: 'pages/index/index',
						type: 0,
						webUrl: 'http://uniapp.dcloud.io'
					},
					success: ret => {
						console.log(JSON.stringify(ret));
					}
				});

			},

		}
	}
</script>

<style scoped>
	.pa {
		padding: 20rpx;
	}

	/* 内容 */
	.contianer {
		width: 100%;
		height: 400rpx;
		margin-bottom: 20rpx;

	}

	.contianer-title {
		display: flex;


	}

	.contianer-title_2 {
		margin-right: 20rpx;
	}

	.contianer-title_2 text {
		font-size: 25rpx;
		color: gray;
	}

	.contianer-title_1 {
		font-size: 32rpx;
		color: black;
		width: 75%;
		margin-left: 10rpx;
		margin-bottom: 10rpx;
	}

	.item-inline-1_1 {
		width: 300rpx;
	}

	/* .item-inlines {
		display: inline-block;
	} */

	.item-text {
		flex: 1;
		margin-left: 10rpx;
		/* 调整文字内容与图片之间的间距 */
	}

	.text-title {
		font-size: 28rpx;
		color: #333;
		/* 文字颜色 */
	}

	.text-description {
		font-size: 24rpx;
		color: #666;
		/* 文字颜色 */
	}

	.item-inline {
		display: inline-block;
		margin-right: 10rpx;
		height: 150rpx;
		width: 230rpx;
	}

	.container-price_desc {
		display: flex;
		margin-top: 10rpx;
		align-items: center;
	}

	.view-width {
		width: 70%;
	}

	.margin-left {
		margin-left: 20rpx;
	}

	.container-compile {
		display: flex;
		margin-top: 20rpx;
		justify-content: flex-end;
	}

	/* .container-line{
  margin-top: 20rpx;
  width: 93%;
  height: 3rpx;
  background-color: gainsboro;
  margin-left: 20rpx
} */
	/* end */

	/* <!-- 自定义弹窗 --> */
	.showModel {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
		/* display: none; */
	}

	.model {
		padding: 30rpx;
		position: fixed;
		top: 500rpx;
		margin-left: 7%;
		border-radius: 20rpx;
		height: 650rpx;
		width: 650rpx;
		background: white;
	}

	.model-close {
		margin-top: 20rpx;
		display: flex;
		justify-content: flex-end;
		margin-right: 30rpx;
	}

	.model-title_desc {
		display: flex;
		align-items: center;
	}

	.model-title_desc-1 image {
		height: 130rpx;
		width: 130rpx;
	}

	.model-title_desc-2 {
		margin-left: 30rpx;
	}

	.model-title_desc-2_1 {
		margin-bottom: 40rpx;
		color: black;
		display: flex;
		align-items: center;
	}

	.model-title_desc-2_2 {
		color: black;
	}

	.model-title_desc-2_1_text {
		width: 100rpx;
	}

	.model-title_desc-2_2 {
		display: flex;
		align-items: center;
	}

	.model-title_desc-2_2_text {
		color: black;
		padding: 20rpx;
		background: gainsboro;
		border-radius: 10rpx;
	}

	.model-title_desc-2_2_1_text {
		width: 100rpx;
	}

	.modle-select {
		margin-top: 20rpx;
		height: 130rpx;
		width: 43%;
		background: gainsboro;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 10rpx;
		margin: 20rpx;
	}

	.modle-select-1 text {
		font-size: 32rpx;
		font-weight: 600;

	}

	.modle-select-2 text {
		font-size: 20rpx;
	}

	.modle-select-1 {
		margin-bottom: 20rpx;
	}

	.slect_model {
		display: flex;
		flex-wrap: wrap;
	}

	.button-confirm {
		width: 98%;
	}

	/* end */

	/* 选择样式 */
	.select_state {
		background: #fef2ce;
	}

	/* end */
</style>