<template>
	<view>
		<form @submit="formSubmit" @reset="">
			<!-- 标题 -->
			<view class="cu-form-group margin-top">
				<view class="title">标题</view>
				<input v-model="formMsg.itemTitle" name="title" placeholder="品类品牌型号都是买家喜欢搜索的"></input>
			</view>
			<!-- end -->

			<!-- 内容 -->
			<view class="cu-form-group margin-top">
				<textarea v-model="formMsg.itemDesc" name="content" maxlength="1000"
					placeholder="描述宝贝的转手原因,入手渠道和使用感受"></textarea>
			</view>
			<!-- end -->

			<!-- 图片 -->
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{formMsg.imgList.length}}/3
				</view>
			</view>

			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in formMsg.imgList" :key="index" @tap="ViewImage"
						:data-url="formMsg.imgList[index]">

						<image :src="formMsg.imgList[index]" mode='aspectFill'></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class="cuIcon-close"></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="formMsg.imgList.length < 3">
						<text class="cuIcon-cameraadd"></text>
					</view>

				</view>
			</view>
			<!-- end -->

			<!-- 地址选择 -->
			<view class="cu-form-group">
				<view class="title">地址选择</view>
				<view>
					<view class="picker" @click="onPickAddress()">
						<!-- 显示选择的地址 -->
						{{ province ? province.name : '请选择省' }},
						{{ city ? city.name : '请选择市' }},
						{{ district ? district.name : '请选择区' }}
					</view>
					<!-- 监听子组件触发的事件，并接收选择的地址数据 -->
					<pick-adress ref="pickAdress" @selectAddress="onSelectAddress"></pick-adress>
				</view>
			</view>
			<!-- end -->

			<!-- 价钱 -->
			<view class="cu-form-group margin-top">
				<view class="title">出售价:</view>
				<input type="digit" @input="moneyInput" :value="formMsg.sellPrice" placeholder="请输入价钱" maxlength='7'
					name="newPrice"></input>

				<view class="title">原价:</view>
				<input type="digit" @input="newInput" :value="formMsg.originalPrice" placeholder="请输入原价" maxlength='7'
					name="oriPrice"></input>
			</view>
			<!-- end -->

			<!-- 选择分类  -->
			<view class="cu-form-group">
				<view class="title">分类:</view>
				<input disabled="true" name="classify" :value='classify'></input>
				<button class="cu-btn  bg-green" role="button" aria-disabled="false" @tap="showModal"
					data-target="DrawerModalL">选择</button>
			</view>
			<!-- end -->

			<!-- 新旧 -->
			<view class="cu-form-group">
				<view class="title">新旧:</view>
				<input disabled="true" name="itemLists" :value='itemLists[formMsg.usageLevel]'></input>
				<button class="cu-btn  bg-green" role="button" aria-disabled="false" @tap="newState">选择</button>
			</view>
			<!-- end -->
			<view class="cu-form-group">
				<view class="title">适合人群： </view>
				<uv-radio-group v-model="formMsg.suit">
					<uv-radio :customStyle="{marginRight: '10px'}" v-for="(item, index) in radioSuit" :key="index"
						:label="item.name" :name="item.value">
					</uv-radio>
				</uv-radio-group>
			</view>

			<view class="cu-form-group">
				<view class="title">交易方式：</view>
				<uv-radio-group v-model="formMsg.deliveryStyle">
					<uv-radio :customStyle="{marginRight: '10rpx'}" v-for="(item, index) in radioTrade" :key="index"
						:label="item.name" :name="item.value">
					</uv-radio>
				</uv-radio-group>
			</view>
			<!-- end -->


			<!-- 确定发布 -->
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green margin-tb-sm lg" form-type="submit">确定发布</button>
			</view>
			<!-- end -->
		</form>

		<!-- toast提醒 -->
		<view>
			<uv-toast ref="toast"></uv-toast>;
		</view>

		<!-- 模态框 -->
		<view @touchmove.stop="modeMove" class=" cu-modal drawer-modal justify-start "
			:class=" modalName == 'DrawerModalL'?'show':'' " @tap="hideModal">
			<scroll-view scroll-with-animation='true' scroll-y='true' class="cu-dialog basis-lg">
				<view class="cu-list menu text-left">
					<view class="cu-item " v-for=" (item,index) in  picker" :key="index" @tap="getClassify"
						:data-name="item.classify_name" :data-value="item.tag">
						<view class="content">
							<view>{{item.classify_name}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import pickAdress from '@/components/john-pickAddress/pickAddress';
	export default {
		data() {
			return {
				province: null, //地址省
				city: null, //地址市
				district: null, //地址区


				formMsg: {
					ownerUid: '', //暂时还未设置新增用户，故先默认设置
					itemTitle: '', //物品标题
					itemDesc: '', //物品描述
					imgList: [], //图片列表
					address: '', //地址选择下标拼接的字符串
					sellPrice: '', //出售价
					originalPrice: '', //原价
					tag: '', //物品种类
					usageLevel: '0', //新旧程度（默认全新），对应itemList数组的标
					deliveryStyle: '', //交送方式（）
					suit: '', //适合人群
					tradeMode: '2', //二手出售交易模式为2
					status: '0' //物品状态（0可租借，1已租借，2已下架）
				},

				// toas数组
				toastList: [{
					type: 'error',
					title: '失败主题',
					message: "请填写物品标题"
				}, {
					type: 'error',
					icon: false,
					title: '失败主题',
					message: "请填写物品描述信息"
				}, {
					type: 'error',
					icon: false,
					title: '失败主题',
					message: "请上传物品图片"
				}, {
					type: 'error',
					title: '失败主题',
					message: "请填写物品地址"
				}],

				itemLists: ['全新', '99新', '95新', '85新'], //几次新
				modalName: '', //模态框开关
				// 交易方式
				radioTrade: [{
						name: "任意",
						value: 0,
						disabled: false
					},
					{
						name: "自提",
						value: 1,
						disabled: false
					},
					{
						name: "面交",
						value: 2,
						disabled: false
					},
					{
						name: "邮寄",
						value: 3,
						disabled: false
					}
				],
				radioSuit: [{
						name: '任意',
						value: 0,
						disabled: false
					},
					{
						name: '儿童',
						value: 1,
						disabled: false
					},
					{
						name: '成人',
						value: 2,
						disabled: false
					},
					{
						name: '老人',
						value: 3,
						disabled: false
					}
				],
				classify: '其他闲置', //分类选择默认
				picker: [{
					tag: 1,
					classify_name: '电子产品'
				}, {
					tag: 2,
					classify_name: '美妆用品'
				}, {
					tag: 3,
					classify_name: '图书'
				}, {
					tag: 4,
					classify_name: '数码影音'
				}, {
					tag: 5,
					classify_name: '家居日用'
				}, {
					tag: 6,
					classify_name: '儿童玩具'
				}, {
					tag: 7,
					classify_name: '宠物用品'
				}, {
					tag: 8,
					classify_name: '男装'
				}, {
					tag: 9,
					classify_name: '女装'
				}, {
					tag: 10,
					classify_name: '母婴用品'
				}, {
					tag: 11,
					classify_name: '运动户外'
				}, {
					tag: 12,
					classify_name: '家用电器'
				}, {
					tag: 13,
					classify_name: '家纺家具'
				}, {
					tag: 14,
					classify_name: '其他'
				}],

			}
		},
		components: {
			pickAdress
		},
		methods: {
			//地址选择
			onPickAddress() {
				this.$refs.pickAdress.onOpen()
			},
			// 接收选择的地址数据，并存储起来
			onSelectAddress(address) {
				this.province = address.province
				this.city = address.city
				this.district = address.district
			},
			// end
			// 图片上传
			ChooseImage() {
				if (this.formMsg.imgList.length >= 3) {
					uni.showToast({
						title: '最多只能上传3张图片',
						icon: 'none'
					});
					return; // 如果已经上传了3张图片，则直接返回，不再执行上传操作
				}
				uni.chooseImage({
					count: 3 - this.formMsg.imgList.length, // 计算还能上传的图片数量
					sizeType: ['compressed'], //采用图片压缩
					sourceType: ['album'],
					success: (chooseImageRes) => {
						//上传到oss服务器的代码：
						//本地图片临时路径
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							// 生成 UUID
							url: 'http://localhost:8080/upload?flag=items',
							filePath: tempFilePaths[0],
							name: 'image',
							formData: {
								'token': 'test'
							},
							success: (uploadFileRes) => {
								//接收后端返回的数据并转为json格式
								let imgData = JSON.parse(uploadFileRes.data);
								//将后端返回的url，追加到formMsg.imgList中
								this.formMsg.imgList = this.formMsg.imgList.concat(imgData.data);
								console.log(this.formMsg.imgList);
							}
						});
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.formMsg.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			// 删除照片
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除这个照片吗？',
					cancelText: '再看看',
					confirmText: '删除',
					success: res => {
						if (res.confirm) {
							this.formMsg.imgList.splice(e.currentTarget.dataset.index, 1);
							this.formMsg.imgList = this.formMsg.imgList
						}
					}
				})
			},

			//限制只能到小数点2位
			moneyInput: function(e) {
				var money;
				if (/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)) { //正则验证，提现金额小数点后不能大于两位数字
					money = e.detail.value;
				} else {
					money = e.detail.value.substring(0, e.detail.value.length - 1);
				}
				this.formMsg.sellPrice = money;
			},

			//原价验证
			newInput: function(e) {
				var money;
				if (/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)) { //正则验证，提现金额小数点后不能大于两位数字
					money = e.detail.value;
				} else {
					money = e.detail.value.substring(0, e.detail.value.length - 1);
				}
				this.formMsg.originalPrice = money;
			},


			// 选择交送方式
			radioChange(e) {
				this.formMsg.deliveryStyle = e.mp.detail.value;
				console.log(this.formMsg.deliveryStyle)
			},


			// 新旧程度
			newState: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.itemLists,
					success(e) {
						that.formMsg.usageLevel = e.tapIndex
					}
				})
			},
			// 拦截模态框滚动事件
			modeMove: function() {

			},

			// 显示分类模态框
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			// 隐藏分类模态框
			hideModal(e) {
				this.modalName = null
			},
			// 得到分类的值
			getClassify: function(e) {
				//input框中回显类名
				this.classify = e.currentTarget.dataset.name
				//传给表达
				this.formMsg.tag = e.currentTarget.dataset.value
				this.hideModal();
			},
			//显示toast
			showToast(params) {
				this.$refs.toast.show({
					...params,
				})
			},

			formSubmit() {
				// 表单验证
				if (!this.formMsg.itemTitle) {
					this.showToast(this.toastList[0])
					return;
				}
				if (!this.formMsg.itemDesc) {
					this.showToast(this.toastList[1])
					return;
				}
				if (this.formMsg.imgList.length == 0) {
					this.showToast(this.toastList[2])
					return;
				}
				if (!this.province) {
					this.showToast(this.toastList[3])
					return;
				}
				//最后处理form数据
				this.formMsg.ownerUid = this.$store.state.user.openid
				this.formMsg.status = '0'
				this.formMsg.address = this.province.name + ',' + this.city.name + ',' + this.district.name

				// 发送异步请求
				uni.request({
					url: 'http://localhost:8080/items',
					method: 'POST',
					data: JSON.stringify(this.formMsg),
					header: {
						'token': 'usertoken', // 根据实际情况设置 token
						'content-type': 'application/json' // 请求头部设置为 JSON 格式
					},
					success: (res) => {
						console.log(res);
						// 处理响应结果，根据实际情况进行操作
						if (res.data.code == 1) {
							// 请求成功toast
							uni.showToast({
								title: '上传成功！',
								icon: 'success',
								duration: 1500
							});
							//跳转到物品选择页
							setTimeout(function() {
								uni.switchTab({
									url: '/pages/issue/issue_select/issue_select'
								})
							}, 1000);

							console.log('成功！');
						} else {
							uni.showToast({
								title: '上传失败！',
								icon: 'success',
								duration: 1500
							});
							console.log('失败！');
						}
					},
					fail: (err) => {
						uni.showToast({
							title: '上传失败！',
							icon: 'success',
							duration: 1500
						});
					}
				});
			}
		},
		onLoad(options) {
			//获取页面发来的数据
			if (JSON.parse(decodeURIComponent(options.item)) != null) {
				this.formMsg = JSON.parse(decodeURIComponent(options.item))
				this.formMsg.imgList = []
			}
		},
		onShow() {

		},
		onHide() {

		},
		// 出发下拉刷新
		onPullDownRefresh() {
			// 模拟刷新完成
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		},

	}
</script>

<style>
	.rule {
		display: flex;
		justify-content: space-between;
	}

	.margin-top-xl-170 {
		margin-top: 170rpx;
	}
</style>