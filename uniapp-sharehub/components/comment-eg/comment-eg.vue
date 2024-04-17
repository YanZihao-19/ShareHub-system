<template>
	<view class="comment-eg">
		<hb-comment ref="hbComment" @add="add" @del="del" @like="like" @focusOn="focusOn" :deleteTip="'确认删除？'"
			:cmData="commentData" v-if="commentData"></hb-comment>
	</view>
</template>

<script>
	export default {
		name: 'comment-eg',
		props: {
			articleId: {
				type: String,
				default: () => {
					return null;
				}
			}
		},
		watch: {
			articleId: {
				handler: function(newVal, oldVal) {
					if (newVal) {
						this.getComment(newVal);
					}
				},
				immediate: true
			}
		},

		data() {
			return {
				token: '',
				"commentData": null,
				"reqFlag": false // 请求标志，防止重复操作，true表示请求中
			}
		},
		methods: {
			// 登录校验
			checkLogin() {

				// TODO 此处填写登录校验逻辑
				if (!this.token == '') {
					return true;
				} else {
					console.log("token值：" + this.token)
					uni.showModal({
						title: '提示',
						content: '请先登录',
						confirmText: '前往登录',
						success: function(res) {
							if (res.confirm) {
								uni.redirectTo({
									url: '/pages/login/login'
								});
							}
						}
					});
					return false;
				}
			},
			// 输入框聚焦
			focusOn() {
				this.checkLogin();
			},
			// 获取评论
			getComment(articleId) {
				//获取token
				this.token = uni.getStorageSync('token')
				uni.request({
					url: 'http://localhost:8080/comments/' + articleId,
					method: 'GET',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						console.log('评论data', res.data);
						let commentList = res.data.data
						console.log('评论list', commentList);
						this.commentData = {
							"readNumer": articleId,
							"commentSize": commentList.length,
							"comment": this.getTree(commentList)
						};
						console.log("评论树", this.commentData)
					},
					fail: (err) => {
						reject(err);
					}
				});
			},
			// 新增评论
			add(req) {
				if (!this.checkLogin()) {
					return
				}
				if (this.reqFlag) {
					uni.showToast({
						title: '操作频繁',
						duration: 1000
					});
					return
				}
				this.reqFlag = true;
				uni.request({
					url: 'http://localhost:8080/comments/addComment?itemId=' + this.articleId + '&pId=' + req.pId +
						'&content=' + req.content,
					method: 'POST',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},

					success: (res) => {
						console.log('评论data', res);
						// 下边假装请求成功
						this.reqFlag = false;
						this.$refs.hbComment.addComplete();
						this.getComment(this.articleId);
					},
					fail: (err) => {
						reject(err);
					}
				});
				// uni.showToast({
				// 	title: '操作成功！',
				// 	duration: 3000
				// });


			},

			// 点赞评论
			like(commentId) {
				if (!this.checkLogin()) {
					return
				}
				if (this.reqFlag) {
					uni.showToast({
						title: '操作频繁',
						duration: 1000
					});
					return
				}
				this.reqFlag = true;
				// TODO 接入真实接口
				// this.$u.api.commentLike(commentId).then(res => {
				// 	this.$refs.hbComment.likeComplete(commentId);
				// 	this.reqFlag = false;
				// }).catch(res => {
				// 	this.reqFlag = false;
				// })
				// 下边假装请求成功
				this.reqFlag = false;
				this.$refs.hbComment.likeComplete(commentId);
			},
			// 删除评论
			del(commentId) {
				if (!this.checkLogin()) {
					return
				}
				if (this.reqFlag) {
					uni.showToast({
						title: '操作频繁',
						duration: 1000
					});
					return
				}
				this.reqFlag = true;
				uni.request({
					url: 'http://localhost:8080/comments/' + commentId,
					method: 'DELETE',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						// 请求成功
						this.reqFlag = false;
						this.$refs.hbComment.deleteComplete(commentId);
					},
					fail: (err) => {
						reject(err);
					}
				});
			},
			// 列表按照父子转换成树
			getTree(data) {
				let result = [];
				let map = {};
				data.forEach(item => {
					map[item.id] = item;
				});
				data.forEach(item => {
					let parent = map[item.parentId];
					if (parent) {
						(parent.children || (parent.children = [])).push(item);
					} else {
						result.push(item);
					}
				});
				return result;
			}
		}
	};
</script>

<style>
</style>