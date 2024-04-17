// An highlighted block
<template>
	<view class="content">
		<view class="avatorWrapper">
			<view class="avator">
				<image class="img" src="../../static/img/logo1.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="lform">
			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<uni-forms-item name="username">
					<input class="custom-input" type="text" v-model="formData.username" placeholder="请输入用户名" />
				</uni-forms-item>
				<uni-forms-item name="password">
					<input class="custom-input" type="password" v-model="formData.password" placeholder="请输入密码" />
				</uni-forms-item>
			</uni-forms>

			<view class="loginBtn" @click="submit">
				<text class="btnValue">注册</text>
			</view>
		</view>
	</view>
</template>



<script>
	export default {
		data() {
			return {
				formData: {
					username: '',
					password: '',
				},
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: '请输入注册用户名'
						}, {
							validateFunction: function(rule, value, data, callback) {
								let usernameReg = /^[\u4e00-\u9fa5a-zA-Z]{3,}$/
								if (!usernameReg.test(value)) {
									callback('不少于三个字符，且是包括中英文')
								}
								return true
							}
						}]
					}
				}
			}
		},
		onLoad() {

		},
		methods: {


			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
					this.register(res)
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},

			req(action, params) {
				uni.showLoading({
					title: '请求中'
				})
				return new Promise((resolve) => {
					uniCloud.callFunction({
						name: 'user-center',
						data: {
							action,
							params
						},
						success: res => {
							uni.hideLoading()
							resolve(res.result);
						},
						fail: res => {
							resolve(res)
						}
					})
				})
			},

			register(e) {
				this.req("register", {
					username: this.formData.username,
					password: this.formData.password
				}).then(res => {
					console.log(res)
					uni.setStorageSync('uni_id_token', res.token)
					uni.setStorageSync('uni_id_token_expired', res.tokenExpired)
					uni.switchTab({
						url: '/pages/index/index'
					});
				})
				console.log("跳转提醒")
			},

		}
	}
</script>



<style>
	.content {
		width: 100vw;
		height: 100vh;
	}

	.title {
		margin-left: 100rpx;
		margin-top: 180rpx;
		color: #333333;
	}

	.form {
		padding: 0 100upx;
		margin-top: 40px;
	}

	.inputWrapper {
		width: 100%;
		height: 80upx;
		background: white;
		border-radius: 20px;
		border: 0.5px solid #a3a3a3;
		box-sizing: border-box;
		padding: 0 20px;
		margin-top: 25px;
	}

	.inputWrapper .input {
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15px;
	}

	.avatorWrapper {
		margin-top: 16px;
		height: 30vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.avator {
		width: 300upx;
		height: 300upx;
		overflow: hidden;
	}

	.avator .img {
		width: 100%
	}

	.loginBtn {
		width: 100%;
		height: 80upx;
		background: #a3a3a3;
		border-radius: 50upx;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.lform {
		padding: 0 100upx;
		margin-top: 40px;
	}

	.custom-input {
		height: 80rpx;
		/* 设置输入框宽度为300像素，根据需要调整 */
		border: 1px solid #ccc;
	}

	.loginBtn .btnValue {
		color: white;
	}

	.forgotBtn {
		text-align: center;
		color: #8d8d8d;
		font-size: 15px;
		margin-top: 20px;
	}
</style>