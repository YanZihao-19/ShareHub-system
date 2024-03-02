<template>
	<view class="home">
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
				token: '',

				//瀑布流数据
				list: [], // 瀑布流全部数据
				list1: [], // 瀑布流第一列数据
				list2: [], // 瀑布流第二列数据
				loadStatus: 'loadmore',
				leftGap: 10,
				rightGap: 10,
				columnGap: 10,
				//end
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

		// 触底加载更多
		async onReachBottom() {
			if (this.loadStatus == 'loadmore') {
				this.init();
			}
		},
		methods: {

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
			
			// 替换原来的模拟数据获取函数
			getData() {
				return new Promise((resolve, reject) => {
					// 发送 GET 请求到后端接口
					axios.get('http://localhost:8080/items', {
							headers: {
								'token': this.token // 如果需要 token，请在这里填写 token 值
							}
						})
						.then(response => {
							// 请求成功，将接口返回的数据格式化为前端需要的格式
							const data = response.data.data.map(item => ({
								id: item.id,
								allowEdit: false, // 暂时设置为 false，您可以根据实际需求进行修改
								image: item.image,
								w: item.image.width, // 这里暂时设置为 null，您可以根据实际需求进行修改
								h:  item.image.height, // 这里暂时设置为 null，您可以根据实际需求进行修改
								title: item.itemTitle,
								desc: item.itemDesc
							}));
							resolve(data);
						})
						.catch(error => {
							// 请求失败，返回错误信息
							reject(error);
						});
				});
			}
		}
	}
</script>
