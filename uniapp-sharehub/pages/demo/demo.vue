<template>
	<view>
		<!-- 点击立即申领触发弹窗 -->
		<view class="bg-red submit margin-right-20" @tap="openModal">立即申领</view>

		<!-- 模态框 -->
		<uni-modal v-model="modalVisible" title="申请领取">
			<view class="modal-content">
				<view class="input-container">
					<view class="input-label">申请理由：</view>
					<uni-input v-model="applyReason" placeholder="请输入申请理由"></uni-input>
				</view>
				<view class="input-container">
					<view class="input-label">联系方式：</view>
					<uni-input v-model="contactInfo" placeholder="请输入联系方式"></uni-input>
				</view>
			</view>
			<view class="modal-buttons">
				<view class="btn-cancel" @tap="closeModal">取消</view>
				<view class="btn-submit" @tap="submitApplication">提交</view>
			</view>
		</uni-modal>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalVisible: false,
				applyReason: '',
				contactInfo: ''
			};
		},
		methods: {
			openModal() {
				this.modalVisible = true;
			},
			closeModal() {
				this.modalVisible = false;
			},
			submitApplication() {
				// 在这里处理提交申请的逻辑，可以将申请理由和联系方式发送给后端处理
				console.log('申请理由:', this.applyReason);
				console.log('联系方式:', this.contactInfo);
				// 提交完成后关闭模态框
				this.modalVisible = false;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.save {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.save view {
		display: flex;
	}

	.save .btn {
		box-shadow: 0upx 5upx 10upx rgba(0, 0, 0, 0.4);
		width: 70%;
		height: 80upx;
		border-radius: 80upx;
		background-color: #f23a3a;
		color: #fff;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		margin-bottom: 60px;
	}

	.save .btn .icon {
		height: 80upx;
		color: #fff;
		font-size: 30upx;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		flex-wrap: wrap;
		margin-top: 40upx;
	}

	.content view {
		display: flex;
	}

	.content .row {
		width: 92%;
		margin: 0 4%;
		border-bottom: solid 1upx #eee;
	}

	.content .row .nominal {
		width: 30%;
		height: 80upx;
		font-size: 28upx;
		font-family: Droid Sans Fallback;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		align-items: center;
	}

	.content .row .input {
		width: 70%;
		padding: 20upx 0;
		align-items: center;
		font-size: 28upx;

	}

	.content .row .input input {
		font-size: 28upx;
		color: #333333;
	}

	.content .row .switch {
		justify-content: flex-end;
	}

	.content .row .input textarea {
		min-height: 40upx;
		line-height: 40upx;
	}

	.content .del_box {
		width: 100%;
		display: block;
		overflow: hidden;
		margin-right: 30upx;
	}

	.content .del {
		width: 240upx;
		height: 80upx;
		float: right;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #F23A3A;
		margin: 0 auto;
		margin-top: 50upx;
		border-radius: 38upx;
		background-color: rgba(255, 0, 0, 0.05);
		border-bottom: solid 1upx #eee;
	}

	.selectcity input {
		width: 90%;
	}

	.selectcity image {
		width: 40upx;
		height: 40upx;
		float: right;
	}
</style>