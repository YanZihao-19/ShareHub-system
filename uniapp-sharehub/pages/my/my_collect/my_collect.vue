<template>
	<view>
		<!-- 内容 -->
		<view class='pa'>
			<view class='container shadow-warp bg-white' v-for="(itemUser,index) in itemUserList"
				:key="itemUser.itemVO.item.id">
				<view class='container-top'>
					<view class='container-top-1'>
						<image :src='itemUser.user.image'></image>
					</view>

					<view class='container-top-2'>
						<view class='container-top-2_1'>
							<view class='container-top-2_1_1'><text
									class='text-lg text-weigth'>{{itemUser.user.username}}</text></view>
							<!--交易模式  -->
							<view class='container-top-2_2'>
								<view class="cu-capsule round view-width">
									<view class="cu-tag bg-blue  ">
										模式
									</view>
									<view :class="['cu-tag', tagColorClass(itemUser.itemVO.item.tradeMode)]">
										{{ tradeModeText(itemUser.itemVO.item.tradeMode) }}
									</view>
								</view>
							</view>
						</view>
						<!-- 信誉等级展示待完成！！！！！！！！！！！！！ -->
						<view><text class='cuIcon-selection lg text-gray'></text><text class='padding-left'>信誉分等级</text>
						</view>
					</view>
				</view>

				<view class='container-ScrollImage'>
					<scroll-view scroll-x="true" style=" white-space: nowrap; display: flex" class='top-20'>
						<block>
							<view class='item-inlines'>
								<navigator url='' hover-class='none'>
									<view class="item-inline bg-img padding-top-xl flex align-end"
										:style=" 'background-image: url('+itemUser.itemVO.item.image+');' ">
									</view>
								</navigator>
							</view>
						</block>
						<block v-for="(url,index) in itemUser.itemVO.itemImages" :key="index">
							<view class='item-inlines'>
								<navigator url='' hover-class='none'>
									<view class="item-inline bg-img padding-top-xl flex align-end"
										:style=" 'background-image: url('+url+');' ">
									</view>
								</navigator>
							</view>
						</block>
					</scroll-view>
				</view>

				<view class='container-title'><text>{{itemUser.itemVO.item.itemTitle}}</text></view>

				<view class='container-UserDesc'>
					<view class='container-UserDesc-1'><text>{{handleStr(itemUser.itemVO.item.createTime)}}</text>
					</view>

					<view class='container-UserDesc-2' :class=" 'animation-' + animation "
						@tap="clickCollect(itemUser.itemVO.item)">
						<view class="cu-tag line-black padding-ll"><text class="text-xxl  "
								:class=" [collect == true ? ' text-yellow' : '' ,collect==true ? 'cuIcon-favorfill' : 'cuIcon-favor' ] "></text><text
								class='cancel text-black'>{{collectState}}</text></view>
					</view>
				</view>
			</view>
		</view>

		<!-- end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//收藏物品信息列表
				itemUserList: '',
				token: '',
				// 控制收藏状态
				collect: true,
				collectState: '取消收藏',
				animation: '',
				//end
			}
		},
		onLoad() {
			//获取本地存储的token
			this.token = uni.getStorageSync('token')
			console.log('调用了onload')
			// 初始化数据
			this.init();
		},
		methods: {
			//初始化数据
			async init() {
				this.itemUserList = '';
				await this.getData();
			},
			//处理时间字符串
			handleStr(time) {
				time = time.replace('T', ' ')
				return time
			},
			//获取List数据
			getData() {
				console.log('调用了getData')
				uni.request({
					url: 'http://localhost:8080/items/getCollectItemList',
					method: 'GET',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						this.itemUserList = res.data.data;
						console.log('获取到的收藏物品列表：', this.itemUserList)
						for (let i = 0; i < this.itemUserList.length; i++) {
							console.log('获取到的收藏物品：', this.itemUserList[i].itemVO.item);
							console.log('获取到的收藏用户：', this.itemUserList[i].user);
						}

						// console.log('获得到的订单列表', this.orderItemList[0].order)
						// console.log('获得到的物品列表', this.orderItemList[0].item)
					},
					fail: (err) => {
						reject(err);
					},
				})
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
			// 点击取消收藏
			clickCollect(item) {
				// console.log('所点击物品的id', item.id)
				uni.request({
					url: 'http://localhost:8080/items/delCollectItem?itemId=' + item.id,
					method: 'DELETE',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						if (res.data.code == 1) {
							uni.showToast({
								title: '已取消',
								icon: 'success',
								duration: 2000
							});

							// 移除指定item.id所对应的itemVO所对应的itemUser元素
							const index = this.itemUserList.findIndex(itemUser => itemUser.itemVO.item.id ===
								item.id);
							if (index !== -1) {
								this.itemUserList.splice(index, 1);
							}
						} else if (res.data.code == 0) {
							uni.showToast({
								title: '出错了~',
								icon: 'error',
								duration: 2000
							});
						}
					},
					fail: (err) => {
						reject(err);
					}
				});

			},
		},

	}
</script>

<style>
	.pa {
		padding: 20rpx;
	}

	/* 内容 */
	.container {
		width: 100%;
		padding: 20rpx;
		height: 500rpx;
		margin-bottom: 20rpx;
	}

	.container-top-1 image {
		height: 120rpx;
		width: 120rpx;
	}

	.container-top {
		display: flex;
		align-items: center;
	}

	.container-top-2 {
		margin-left: 20rpx;
		width: 90%;
	}

	.container-top-2_1 {
		display: flex;
		margin-bottom: 20rpx;
	}

	.container-top-2_1_1 {
		width: 80%;
	}

	.container-top-2_2 {
		margin-bottom: 25rpx;
	}

	.container-top-2_2 text {
		font-size: 25rpx;
		font-weight: 750;
	}

	.text-weigth {
		font-weight: 550;
	}

	.padding-left {
		padding-left: 10rpx
	}

	.item-inlines {
		display: inline-block;
	}

	.item-inline {
		display: inline-block;
		margin-right: 10rpx;
		height: 150rpx;
		width: 230rpx;
	}

	.container-ScrollImage {
		margin-top: 20rpx;
	}

	.container-title {
		margin-top: 20rpx;
	}

	.container-title text {
		font-size: 30rpx;
		color: black;
		font-weight: 700;
	}

	.container-UserDesc {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.container-UserDesc-1 {
		font-size: 22rpx;
		color: var(--cyan);
		font-weight: 600;
	}

	.container-UserDesc-2 {
		margin-right: 20rpx;
	}

	.padding-ll {
		padding-left: 40rpx;
		padding-right: 40rpx;
		padding-top: 38rpx;
		padding-bottom: 38rpx;
	}

	.cancel {
		padding-left: 8rpx;
		font-weight: 550;
	}

	/* end */
</style>