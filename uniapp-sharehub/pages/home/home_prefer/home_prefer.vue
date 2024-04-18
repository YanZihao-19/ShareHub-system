<template>
	<view>
		<view>
			<view class="uv-demo-block">
				<text class="text-lg text-cyan">您倾向的物品种类是?</text>
				<helang-checkbox ref="checkboxTag" @change="valueChange"></helang-checkbox>
				<br>
			</view>
			<view class="uv-demo-block">
				<text class="text-lg text-black">您倾向的物品交易方式是?</text>
				<helang-checkbox ref="checkboxMode" @change="valueChange"></helang-checkbox>
				<!-- <button @click="getCheckBoxMode">打印已选择类别的值</button> -->
			</view>
			<view class="uv-demo-block">
				<text class="text-lg text-blue">您能接收的物品新旧程度为?</text>
				<helang-checkbox ref="checkboxUsage" @change="valueChange"></helang-checkbox>
			</view>
			<view class="uv-demo-block">
				<text class="text-lg text-blue">您的年龄段为?</text>
				<helang-checkbox ref="checkboxSuit" @change="valueChange"></helang-checkbox>
			</view>
			<view class="uv-demo-block">
				<text class="text-lg text-orange">您倾向的物品交付方式为?</text>
				<helang-checkbox ref="checkboxDelivery" @change="valueChange"></helang-checkbox>
				<!-- <button @click="getCheckBoxDelivery">打印已选择类别的值</button> -->
			</view>
			<view class="letShare">
				<!-- 导航按钮 -->
				<button class="cu-btn bg-blue lg" @click="switchTab">进入主页！</button>
			</view>
		</view>
	</view>
</template>

<script>
	import helangCheckbox from "@/components/helang-checkbox/helang-checkbox.vue"

	export default {
		data() {
			return {
				//用户token
				token: '',
				//物品类别
				tag: '',
				//物品交易模式
				mode: '',
				//物品受众
				suit: '',
				//物品损耗度
				usage: '',
				//物品交付方式
				delivery: '',

				//返回给后端的数据
				preferenceVO: {
					tagList: [],
					modeList: [],
					suitList: [],
					usageList: [],
					deliveryList: []
				}
			}
		},
		components: {
			"helang-checkbox": helangCheckbox
		},
		mounted() {
			// 调用 setCheckbox 方法
			this.setCheckboxTag();
			this.setCheckboxMode();
			this.setCheckboxUsage();
			this.setCheckboxSuit();
			this.setCheckboxDelivery();
		},
		methods: {
			valueChange(value) {
				// 处理复选框值变化的方法
				// console.log(value);
			},

			setCheckboxTag() {
				// 设置复选框
				this.$refs.checkboxTag.set({
					type: 'checkbox', // 类型：复选框
					column: 3, // 分列
					list: [ // 列表数据
						{
							text: '电子用品'
						},
						{
							text: '美妆用品',
						},
						{
							text: '图书'
						},
						{
							text: '数码影音'
						},
						{
							text: '家居日用'
						},
						{
							text: '儿童玩具'
						}, {
							text: '宠物用品'
						}, {
							text: '男装'
						}, {
							text: '女装'
						}, {
							text: '母婴用品'
						}, {
							text: '运动户外'
						}, {
							text: '家用电器'
						}, {
							text: '家居家纺'
						}, {
							text: '其他',
						},
					],
					maxSize: 5, // 最大选择数量
					maxFn: () => { // 超出最大选择数量时的回调函数
						uni.showToast({
							title: '最多只能选择5个',
							icon: 'none',
							duration: 1000,
							mask: false
						});
					}
				});
			},
			setCheckboxUsage() {
				// 设置复选框
				this.$refs.checkboxUsage.set({
					type: 'checkbox', // 类型：复选框
					column: 3, // 分列
					list: [ // 列表数据 物品新旧程度：0：全新，1：99新，2：95新，3：85新，4：8新 
						{
							text: '全新'
						},
						{
							text: '99新',
						},
						{
							text: '95新'
						},
						{
							text: '85新'
						},
						{
							text: '8新'
						},
						{
							text: '任意',
							checked: true
						}
					],
					maxSize: 5, // 最大选择数量
					maxFn: () => { // 超出最大选择数量时的回调函数
						uni.showToast({
							title: '最多只能选择5个',
							icon: 'none',
							duration: 1000,
							mask: false
						});
					}
				});
			},
			setCheckboxMode() {
				// 设置复选框
				this.$refs.checkboxMode.set({
					type: 'checkbox', // 类型：复选框
					column: 3, // 分列
					list: [ // 列表数据
						{
							text: '免费共享',
							checked: true
						},
						{
							text: '以物换物',
						},
						{
							text: '二手交易'
						}
					],
					maxSize: 2, // 最大选择数量
					maxFn: () => { // 超出最大选择数量时的回调函数
						uni.showToast({
							title: '最多只能选择2个',
							icon: 'none',
							duration: 1000,
							mask: false
						});
					}
				});
			},
			// checkboxUsage
			setCheckboxSuit() {
				// 设置复选框
				this.$refs.checkboxSuit.set({
					type: 'checkbox', // 类型：复选框
					column: 4, // 分列
					list: [ // 列表数据
						{
							text: '保密',
						},
						{
							text: '儿童',
						},
						{
							text: '成年人'
						},
						{
							text: '老年人'
						}
					],
					maxSize: 1, // 最大选择数量
					maxFn: () => { // 超出最大选择数量时的回调函数
						uni.showToast({
							title: '最多只能选择1个',
							icon: 'none',
							duration: 1000,
							mask: false
						});
					}
				});
			},
			setCheckboxDelivery() {
				// 设置复选框
				this.$refs.checkboxDelivery.set({
					type: 'checkbox', // 类型：复选框
					column: 4, // 分列
					list: [ // 列表数据
						{
							text: '任意',
							checked: true
						},
						{
							text: '自提',
						},
						{
							text: '同城面交'
						},
						{
							text: '邮寄'
						}
					],
					maxSize: 3, // 最大选择数量
					maxFn: () => { // 超出最大选择数量时的回调函数
						uni.showToast({
							title: '最多只能选择2个',
							icon: 'none',
							duration: 1000,
							mask: false
						});
					}
				});
			},

			//点击按钮后跳转到主页，同时将用户偏好发送请求给后端
			switchTab() {
				//获取token
				this.token = uni.getStorageSync('token')
				//获取表单数组值
				this.preferenceVO.tagList = this.$refs.checkboxTag.get(); // 组件返回的数据
				this.preferenceVO.modeList = this.$refs.checkboxMode.get(); // 组件返回的数据
				this.preferenceVO.suitList = this.$refs.checkboxSuit.get(); // 组件返回的数据
				this.preferenceVO.usageList = this.$refs.checkboxUsage.get(); // 组件返回的数据
				this.preferenceVO.deliveryList = this.$refs.checkboxDelivery.get(); // 组件返回的数据

				// console.log(this.preferenceVO)
				// 指定完整的请求路径
				var path = 'http://localhost:8080/preference/init';
				uni.request({
					url: path,
					method: 'POST', // 根据实际情况指定请求方法
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					data: JSON.stringify(this.preferenceVO),
					success(response) {
						if (response.data.code == 1) {
							// 请求成功，则跳转到主页
							uni.switchTab({
								url: '/pages/home/home'
							});
						} else {
							uni.showToast({
								title: '进入失败！',
								icon: 'none',
								duration: 2000
							});
						}
					},
					fail(error) {
						console.error('请求失败', error);
						// 显示登录失败的 toast
						uni.showToast({
							title: '进入失败！',
							icon: 'none',
							duration: 2000
						});
					}
				});

			},
		}
	}
</script>

<style>
	.letShare {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>