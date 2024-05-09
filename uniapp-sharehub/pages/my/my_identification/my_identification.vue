<template>
	<view class="uv-page" style="background-color: #fff;">
		<view class="uv-demo-block">
			<view class="uv-demo-block__content">
				<uv-form>
					<uv-form-item>
						<view class="">主体名称:</view>
						<uv-input border="none" v-model="identification.corporateName"
							placeholder="需与证照保持一致"></uv-input>
					</uv-form-item>

					<uv-form-item>
						<view class="">主体归属地:</view>
						<view class="cu-form-group">
							<view class="picker text-black" @click="onPickAddress()">
								<!-- 显示选择的地址 -->
								{{ province ? province.name : '请选择省' }},
								{{ city ? city.name : '请选择市' }},
								{{ district ? district.name : '请选择区' }}
							</view>
							<!-- 监听子组件触发的事件，并接收选择的地址数据 -->
							<pick-adress ref="pickAdress" @selectAddress="onSelectAddress"></pick-adress>
						</view>
					</uv-form-item>

					<uv-form-item>
						<view class="">社会信用代码:</view>
						<uv-input border="none" v-model="identification.code" placeholder="需与证照保持一致"></uv-input>
					</uv-form-item>


					<!-- 上传资历认证图 -->
					<uv-form-item>
						<!-- 申诉证明图片 -->
						<view class="cu-bar bg-white margin-top">
							<view class="action">
								营业执照/组织机构代码证:
							</view>
							<view class="action">
								<view v-if="identification.image == null">0/1</view>
								<view v-else>1/1</view>

							</view>
						</view>
						<view class="cu-form-group">
							<view class="grid col-4 grid-square flex-sub">
								<view class="bg-img" @tap="ViewImage" :data-url="identification.image">
									<image :src="identification.image" mode='aspectFill'></image>
									<!-- <view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
									<text class="cuIcon-close"></text>
								</view> -->
								</view>
								<view class="solids" @tap="ChooseImage" v-if="identification.image ==null ">
									<text class="cuIcon-cameraadd"></text>
								</view>

							</view>
						</view>
						<!-- end -->
					</uv-form-item>
				</uv-form>

				<uv-toast ref="toast"></uv-toast>
				<view class="sbutton">
					<button
						v-if="identification.corporateName!=null &&identification.code!=null &&identification.image!=null"
						class="cu-btn bg-blue lg" @tap="submit">提交</button>
					<button v-else class="cu-btn bg-grey lg">提交</button>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import pickAdress from '@/components/john-pickAddress/pickAddress';
	import {
		toast,
		timeFormat
	} from '@/uni_modules/uv-ui-tools/libs/function/index.js';
	import {
		chinese
	} from '@/uni_modules/uv-ui-tools/libs/function/test.js';
	export default {
		data() {
			return {
				province: null, //地址省
				city: null, //地址市
				district: null, //地址区
				token: '', //用户token
				identification: {
					openId: null,
					corporateName: null, //主体名称
					belong: null, //归属地
					code: null, //社会行用代码
					image: null, //营业执照
				},
				toastList: [{
					type: 'default',
					title: '默认主题',
					message: "信用代码格式有误！"
				}]

			}
		},
		components: {
			pickAdress
		},
		onLoad() {
			//获取本地存储的token
			this.token = uni.getStorageSync('token')
		},
		methods: {
			// 选择地址
			onPickAddress() {
				this.$refs.pickAdress.onOpen()
			},
			// 接收选择的地址数据，并存储起来
			onSelectAddress(address) {
				this.province = address.province
				this.city = address.city
				this.district = address.district
			},
			// 图片上传
			ChooseImage() {
				if (this.identification.image != null) {
					uni.showToast({
						title: '最多只能上传1张图片',
						icon: 'none'
					});
					return; // 如果已经上传了1张图片，则直接返回，不再执行上传操作
				}
				let imageLength = 0;
				if (this.identification.image != null) {
					imageLength = 1
				}
				uni.chooseImage({
					count: 1 - imageLength, // 计算还能上传的图片数量
					sizeType: ['compressed'], //采用图片压缩
					sourceType: ['album'],
					success: (chooseImageRes) => {
						//上传到oss服务器的代码：
						//本地图片临时路径
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							// 生成 UUID
							url: 'http://localhost:8080/upload?flag=identification',
							filePath: tempFilePaths[0],
							name: 'image',
							formData: {
								'token': 'test'
							},
							success: (uploadFileRes) => {
								//接收后端返回的数据并转为json格式
								let imgData = JSON.parse(uploadFileRes.data);
								//将后端返回的url，追加到imge中
								this.identification.image = imgData.data;
								console.log(this.identification.image);
							}
						});
					}
				});
			},
			//展示图片
			ViewImage(e) {
				uni.previewImage({
					urls: this.formMsg.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			// 展示toast
			showToast(params) {
				this.$refs.toast.show({
					...params,
					complete() {
						params.url && uni.navigateTo({
							url: params.url
						})
					}
				})
			},
			// 提交
			submit() {
				//进行表单验证：
				if (this.validateInput(this.identification.code)) {
					this.identification.belong = this.province.name + ',' + this.city.name + ',' + this.district.name

					// 发送异步请求
					uni.request({
						url: 'http://localhost:8080/complaint/identificationHandle',
						method: 'POST',
						data: JSON.stringify(this.identification),
						header: {
							'token': this.token, // 根据实际情况设置 token
							'content-type': 'application/json' // 请求头部设置为 JSON 格式
						},
						success: (res) => {
							// 处理响应结果，根据实际情况进行操作
							if (res.data.code == 1) {
								// 请求成功toast
								uni.showToast({
									title: '提交成功！',
									icon: 'success',
									duration: 1500
								});
								//跳转到我的
								setTimeout(function() {
									uni.switchTab({
										url: '/pages/my/my'
									})
								}, 1000);
							} else {
								uni.showToast({
									title: '上传失败！',
									icon: 'fail',
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
							console.error(err);
						}
					});

				} else {
					//提醒
					// 请求成功toast
					this.showToast(this.toastList[0])
				}
			},

			//验证社会信用代码格式
			validateInput(input) {
				const regex = /^\d{18}$/; // 正则表达式，表示必须包含18个数字
				return regex.test(input);
			}

		},
	}
</script>
<style>
	.sbutton {
		display: flex;
		justify-content: center;
	}
</style>