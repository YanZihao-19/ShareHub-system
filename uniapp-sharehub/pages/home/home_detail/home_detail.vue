<template>
	<view>
		<!-- 商家信息 -->
		<view class="bg-white ">
			<view class=" cf padding-sm">
				<view class="radius fl padding-sm ">
					<image :src='user.image'></image>
					<view class="fr padding-name">
						<view>{{user.username}}</view>
						<view style="display: inline-block; min-width: 100px; min-height: 50px; padding: 10px;">
							<uv-tags text="二手回收商" size="medium" shape="circle" type="primary"></uv-tags>
						</view>
						<view class="padding-time ">
							<text>{{item.createTime}}</text>
						</view>
					</view>
				</view>

				<!-- 举报功能 -->
				<view class="fr padding-button" @tap="toComplain(item.id)">
					<view class="action" style="display: flex; align-items: center;">
						<view class="cuIcon-warn" style="margin-right: 5px;"></view>
						<text>举报</text>
					</view>
				</view>

			</view>
		</view>
		<!-- 商家信息end -->

		<!-- 举报模态框 -->
		<view class="cu-modal" :class="complainName=='true'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">物品举报</view>
					<view class="action" @tap="hideModal2">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>

				<uv-form ref="form" @submit="complaintSubmit">
					<!-- 申诉理由 -->
					<!-- <uv-form-item label="姓名" prop="complaint.reason"> -->
					<view class="cu-form-group margin-top">
						<view class="title">举报原因</view>
						<textarea style="text-align: left;" v-model="complaint.reason" name="content" maxlength="1000"
							placeholder=" "></textarea>
					</view>
					<!-- </uv-form-item> -->
					<!-- 申诉证明图片 -->
					<view class="cu-bar bg-white margin-top">
						<view class="action">
							图片上传
						</view>
						<view class="action">
							<view v-if="complaint.image == ''">0/1</view>
							<view v-else>1/1</view>
							<!-- {{complaint.image.length}}/1 -->

						</view>
					</view>
					<view class="cu-form-group">
						<view class="grid col-4 grid-square flex-sub">
							<view class="bg-img" @tap="ViewImage" :data-url="complaint.image">
								<image :src="complaint.image" mode='aspectFill'></image>
							</view>
							<view class="solids" @tap="ChooseImage" v-if="complaint.image =='' ">
								<text class="cuIcon-cameraadd"></text>
							</view>

						</view>
					</view>
				</uv-form>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal2">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="complaintSubmit">提交</button>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品内容 -->
		<view class='contanier bg-white padding-sm top-20'>
			<view class='price'>
				<text class='price-symbol'>￥</text>
				<text class='price-size'>{{item.sellPrice}}</text>
				<text class='price-ori'>￥{{item.originalPrice}}</text>
				<view class="uv-page__tag-item">
					<uv-tags :text="getUsageText(item.usageLevel)" :type="getUsageLevel(item.usageLevel)"></uv-tags>
				</view>
			</view>
			<!-- 物品标题 -->
			<view class='itemTitle bg-white top-20 font-size'>
				<text>
					{{item.itemTitle}}
				</text>
			</view>

			<!-- 物品描述 -->
			<view class='bg-white top-20  '>
				<text class="text-xl ">
					{{item.itemDesc}}
				</text>
			</view>

			<!-- 交易方式 -->
			<view class='hint'>
				<text>
					该物品支持 <text :style="{ 'font-weight': 'bold' }">
						{{ getDeliveryText(item.deliveryStyle) }}
					</text>交易方式。
				</text>
			</view>
			<!-- end -->
			<!-- 展示物品地址 -->
			<view class='address'>
				<text class="cuIcon-location text-blue"></text>
				<view class="text-grey">{{item.address}}</view>
			</view>

			<!-- 图片位置 -->
			<view>
				<block>
					<image class='img' :src="item.image" @tap="previewImage(item.image)"></image>
				</block>
				<block v-for="(item,index) in itemImages" :key="index">
					<image class='img' :src="item" @tap="previewImage(item)"></image>
				</block>
			</view>
		</view>
		<!-- 商品内容end -->

		<!-- 用户留言 -->
		<view id="comments">
			<view class='bg-white top-20 padding-sm '>
				<view class='in_regard_to'>
					<view>
						<!-- <image src='../img/tiao.png'></image> -->
					</view>
					<view>
						<text class='in_regard_to_text'>全部留言</text>
					</view>
				</view>
				<view>
					<comment-eg :articleId="item.id"></comment-eg>
				</view>
			</view>
		</view>
		<!-- end -->

		<!-- 相识商品 -->
		<view class='bg-white top-20 '>
			<view class='in_regard_to'>
				<view>
					<text class='in_regard_to_text'>相似商品</text>
				</view>
			</view>

			<!-- 内容 -->
			<view class="waterfall">
				<view>
					<uv-waterfall ref="waterfall" v-model="list" :add-time="10" :left-gap="leftGap"
						:right-gap="rightGap" :column-gap="columnGap" @changeList="changeList" @remove="remove">
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
															<uv-tags :text="getModeText(item.mode)"
																:type="getModeType(item.mode)"></uv-tags>
														</view>
													</uv-col>
													<uv-col span="4">
														<view class="uv-page__tag-item">
															<uv-tags class="experss"
																:text="getDeliveryText1(item.delivery)" plain
																type="error" shape="circle"></uv-tags>
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
															<uv-tags :text="getModeText(item.mode)"
																:type="getModeType(item.mode)"></uv-tags>
														</view>
													</uv-col>
													<uv-col span="4">
														<view class="uv-page__tag-item">
															<uv-tags class="experss"
																:text="getDeliveryText1(item.delivery)" plain
																type="error" shape="circle"></uv-tags>
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
			<!-- 内容end -->
		</view>
		<!-- end -->


		<!-- 操作选项卡 -->
		<view class="cu-bar bg-white tabbar border shop fixation">
			<!-- 分享待完成！！！！！！ -->
			<view class="action" @tap="shareItem">
				<view class="cuIcon-forwardfill text-orange"></view>
				分享
			</view>
			<view v-if="collect == 0" class="action" @tap="collectItem">
				<view class="cuIcon-favorfill"></view>
				收藏
			</view>
			<view v-else-if="collect == 1" class="action" @tap="delCollectItem">
				<view class="cuIcon-favorfill text-red"></view>
				已收藏
			</view>
			<button class="action" @tap='scrollTo(comments)'>
				<!-- 留言待完成！！！！！！ -->
				<view class="cuIcon-messagefill text-green"></view>
				留言
			</button>
			<view class="bg-blue submit margin-right-20" @tap="handleAction(item)">
				{{ item.tradeMode == 0 ? '立即申领' : (item.tradeMode == 1 ? '立即交换' : '申请购买') }}
			</view>

			<!-- 模态框 -->
			<view v-if="showModal" class="modal">
				<view class="modal-content">
					<view class="uv-demo-block">
						<text class="uv-demo-block__title">{{ item.tradeMode == 0 ? '申领理由' : '求购留言' }}：</text>
						<view class="uv-demo-block__content">
							<uv-textarea v-model="order.reason"
								:placeholder="item.tradeMode == 0 ? '诚恳的填写您想要的申领理由，可以大大增加成功几率哦~' : '礼貌的求购留言会得到更快的回复哦~'"
								:maxlength="200" count></uv-textarea>
						</view>
					</view>

					<view class="uv-demo-block">
						<text class="uv-demo-block__title">联系方式：</text>
						<view class="uv-demo-block__content">
							<uv-textarea v-model="order.contact" placeholder="请填写您的微信号或手机号等，物主联系到您哦~"></uv-textarea>
						</view>
					</view>
					<!-- 将按钮放在第二个输入框下面 -->
					<view class="modal-buttons">
						<view class="modal-button cancel" @tap="cancel">取消</view>
						<view v-if="item.tradeMode == 2" class="modal-button confirm" @tap="confirm">去支付</view>
						<view v-else class="modal-button confirm" @tap="confirm">提交</view>
						
					</view>
				</view>
			</view>
			<!-- 模态框end -->

			<!-- 以物换物actionSheet开始 -->
			<uv-action-sheet ref="actionSheet" @close="show2 = false" @select="select" :actions="actions"
				cancelText="取消">
			</uv-action-sheet>
			<!-- 以物换物actionSheet结束 -->

			<!-- 二手交易模态框开始 -->
			<view class="cu-modal" :class="showModal2=='show'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">交易须知！</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl" style="text-align: left;">
						&nbsp;&nbsp;ShareHub是一款致力于低碳环保减少闲置物品的信息供给平台，本平台不涉及金钱交易，只提供物品信息。<br>&nbsp;&nbsp;请各位用户自行交易过程中，擦亮眼睛谨防受骗，对于任何诈骗行为平台不予负责。
					</view>
					<view class="cu-bar bg-white justify-end">
						<view class="action confirm-botton ">
							<button class="cu-btn bg-green " @tap="acceptModal">同意</button>
						</view>
					</view>
				</view>
			</view>
			<!-- 二手交易模态框结束 -->
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//定位锚点
				scroll: '',
				token: '',
				//瀑布流数据
				comments: 'comments',
				list: [], // 瀑布流全部数据
				list1: [], // 瀑布流第一列数据
				list2: [], // 瀑布流第二列数据
				collect: 0, //判断物品是否已收藏
				complainName: '', //举报申诉框
				complaint: { //举报内容
					userId1: '',
					userId2: '',
					orderId: '',
					reason: '',
					image: '',
				},
				showModal: false, // 控制是否展示模态框
				tag: '0',
				mode: '3', //表示物品的类型，瀑布流默认
				showModal2: '', //控制是否展示二手交易模态框
				order: {
					itemId: '', //当前物品id
					reason: '', // 申请理由
					contact: '', // 联系方式
					mode: '', //订单交易模式
					otherItemId: '', //另一个物品id（仅对以物换物生效）
					image: '', //订单图片
				},
				user: {
					username: '', //用户名
					credibility: '', //信誉
					role: '', //角色
					image: '', //头像
					identifyId: '', //实名认证
				},
				item: {
					id: '',
					createTime: '', //创建时间
					image: '', //物品首页图
					itemTitle: '', //物品名称
					itemDesc: '', //物品描述
					tradeMode: '', //物品交易模式(共享/换物/二手)
					sellPrice: '', //现价
					originalPrice: '', //原价
					usageLevel: '', //物品磨损度
					deliveryStyle: '', //物品交易方式
					ownerUid: '', //用户openID
					address: '',
					tag: '',
				},
				itemImages: '', //物品详情图

				actions: [{
						flag: '0',
						name: '创建新物品',
					},
					{
						flag: '1',
						name: '选择已有物品',
					}
				],

				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
			}
		},
		async onLoad(options) {
			try {
				//获取token
				this.token = uni.getStorageSync('token')

				//获取上个页面传来的item.id
				const pages = getCurrentPages();
				// 获取传递过来的锚点信息
				this.scroll = options.scrollTo;
				console.log('scroll:', this.scroll)

				const currentPage = pages[pages.length - 1];
				const {
					id
				} = currentPage.options;

				// 调用 getData() 函数获取数据
				const data = await this.getData(id);
				this.list = data; // 将返回的数据赋值给 list 数组

				// 初始化函数获取数据
				this.getItemData(id);

			} catch (error) {
				// console.error('Failed to load data:', error);
			}
		},
		onReady() {
			//跳转
			if (this.scroll != '') {
				console.log("图片list：", this.itemImages)
				this.scrollTo(this.scroll)
			}
		},
		methods: {
			//评论定位
			scrollTo(e) {
				uni.pageScrollTo({
					selector: '#' + e,
					duration: 300 // 滚动动画时长，单位 ms
				});
			},
			// 选择sheet后的逻辑操作
			select(e) {
				// 将当前页面的item赋值给order所需的属性
				this.order.itemId = this.item.id
				this.order.mode = this.item.tradeMode
				this.order.image = this.item.image
				// console.log("即将发送的order", this.order)

				// 根据不同的sheet跳转到不同的页面
				if (e.flag == 0) {
					// 跳转到新增页面，并携带参数flag=0,以及order对象
					// var orderTempt = encodeURIComponent(JSON.stringify(this.order))

					uni.navigateTo({
						url: '/pages/issue/barter/barter?pageFlag=1&order=' + encodeURIComponent(JSON.stringify(
							this.order))
					});
				} else if (e.flag == 1) {
					// 跳转到选择页面，并携带参数flag=1,以及order对象
					uni.navigateTo({
						url: '/pages/my/my_issue/my_issue?pageFlag=0&mode=1&order=' + encodeURIComponent(JSON
							.stringify(this.order))
					});
				}
			},
			//展示举报模态框
			toComplain() {
				this.complainName = 'true'
			},
			// 隐藏模态框
			hideModal2() {
				this.complainName = ''
			},
			//提交举报
			complaintSubmit() {
				// 填充数据
				this.complaint.itemId = this.item.id;
				// 表示物品举报
				this.complaint.status = '2';

				// 发送异步请求
				uni.request({
					url: 'http://localhost:8080/complaint/itemComplaint',
					method: 'POST',
					data: JSON.stringify(this.complaint),
					header: {
						'token': this.token, // 根据实际情况设置 token
						'content-type': 'application/json' // 请求头部设置为 JSON 格式
					},
					success: (res) => {
						console.log(res);
						console.log(res.data);
						console.log(res.data.code);
						// 处理响应结果，根据实际情况进行操作
						if (res.data.code == 1) {
							// 请求成功toast
							uni.showToast({
								title: '提交成功！',
								icon: 'success',
								duration: 1500
							});

							//隐藏模态框
							this.hideModal2();
						} else {
							uni.showToast({
								title: '提交失败！',
								icon: 'fail',
								duration: 1500
							});
							console.log('失败！');
						}
					},
				});

			},
			// 图片上传
			ChooseImage() {
				if (this.complaint.image != '') {
					uni.showToast({
						title: '最多只能上传1张图片',
						icon: 'none'
					});
					return; // 如果已经上传了1张图片，则直接返回，不再执行上传操作
				}
				let imageLength = 0;
				if (this.complaint.image != '') {
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
							url: 'http://localhost:8080/upload?flag=complaint',
							filePath: tempFilePaths[0],
							name: 'image',
							formData: {
								'token': 'test'
							},
							success: (uploadFileRes) => {
								//接收后端返回的数据并转为json格式
								let imgData = JSON.parse(uploadFileRes.data);
								//将后端返回的url，追加到imge中
								this.complaint.image = imgData.data;
								console.log(this.complaint.image);
							}
						});
					}
				});
			},
			//放大举报图片
			ViewImage(e) {
				uni.previewImage({
					urls: this.formMsg.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			//关闭二手交易模态框
			hideModal() {
				this.showModal2 = ''
			},
			//同意二手交易模态框
			acceptModal() {
				//关闭模态框1
				this.showModal2 = ''
				//展示模态框2
				this.showModal = true;
			},
			getDeliveryText(delivery) {
				// console.log('调用 getDeliveryText 方法');
				switch (delivery) {
					case 0:
						return '任意';
					case 1:
						return '上门自提';
					case 2:
						return '同城面交';
					case 3:
						return '邮寄';
					default:
						return '';
				}
			},
			// 瀑布流：这点非常重要：e.name在这里返回是list1或list2，要手动将数据追加到相应列
			changeList(e) {
				this[e.name].push(e.value);
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
			getDeliveryText1(delivery) {
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
			//点击物品跳转到详情页
			goToDetail(item) {
				// 在这里进行页面跳转，比如跳转到详情页，并传递参数
				console.log('准备执行跳转了！')
				uni.navigateTo({
					url: '/pages/home/home_detail/home_detail?id=' + item.id
				});
			},
			// 获取猜你喜欢List数据
			getData(id) {
				return new Promise((resolve, reject) => {
					// console.log('发送给后端的token值：', this.token)
					// console.log('发送给后端的list值：', this.list)
					//发送请求将前端itemList发给后端
					let itemList = this.list
					uni.request({
						url: 'http://localhost:8080/items/recommendItems?tag=' + this
							.tag + '&mode=' + this
							.mode + '&id=' + id,
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
								itemDesc: item.itemDesc, //物品描述
								address: item.address, //物品地址
								mode: item.tradeMode, //物品交易模式
								delivery: item.deliveryStyle //物品交付方式
							}));
							resolve(data); // 将处理后的数据返回给调用方
						},
						fail: (err) => {
							reject(err);
						}
					});
				});
			},
			getCollect() {
				uni.request({
					url: 'http://localhost:8080/items/getCollect?itemId=' + this.item.id,
					method: 'GET',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						// 提示框，提醒用户是否申请共享成功，或者以及申请过了。！！！！！！！！！！！
						// console.log(res.data.code);
						if (res.data.code == 1) {
							//已经收藏了
							this.collect = 1
							// console.log("已经收藏了！")
						} else if (res.data.code == 0) {
							// 未收藏
						}
					},
					fail: (err) => {
						reject(err);
					}
				});
			},

			// 收藏物品
			collectItem() {
				uni.request({
					url: 'http://localhost:8080/items/collectItem?itemId=' + this.item.id,
					method: 'POST',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						// 提示框，提醒用户是否申请共享成功，或者以及申请过了。！！！！！！！！！！！
						// console.log(res.data.code);
						if (res.data.code == 1) {
							uni.showToast({
								title: '收藏成功！',
								icon: 'success',
								duration: 2000
							});
							this.collect = 1
						} else if (res.data.code == 0) {
							uni.showToast({
								title: '不能重复收藏哦~',
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
			//取消收藏物品
			delCollectItem() {
				uni.request({
					url: 'http://localhost:8080/items/delCollectItem?itemId=' + this.item.id,
					method: 'DELETE',
					header: {
						'content-type': 'application/json', // 设置请求头为 JSON 类型
						'token': this.token
					},
					success: (res) => {
						// 提示框，提醒用户是否申请共享成功，或者以及申请过了。！！！！！！！！！！！
						// console.log(res.data.code);
						if (res.data.code == 1) {
							// uni.showToast({
							// 	title: '取消收藏！',
							// 	icon: 'success',
							// 	duration: 2000
							// });
							this.collect = 0
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
			//瀑布流中根据后端数据展示不同文本和样式
			getUsageText(usage) {
				switch (usage) {
					case 0:
						return '全新';
					case 1:
						return '99新';
					case 2:
						return '95新';
					case 3:
						return '85新';
					default:
						return '';
				}
			},
			getUsageLevel(usage) {
				switch (usage) {
					case 0:
						return 'success';
					case 1:
						return 'success';
					default:
						return 'primary';
				}
			},
			handleAction(item) {
				// console.log('进入了handleAction')
				//如果交易模式是免费共享
				if (item.tradeMode == 0) {
					//展示模态框
					this.showModal = true;
				}

				//如果交易模式是以物换物
				else if (item.tradeMode == 1) {
					//展示actionSheet
					this.$refs.actionSheet.open();
				}
				//如果交易模式是二手交易
				else if (item.tradeMode == 2) {
					this.showModal2 = 'show'
				}

				//如果交易模式是二手交易，发送对应的请求!!!!!!!!!!!!
				else if (item.tradeMode == 1) {}
			},
			//取消模态框
			cancel() {
				this.showModal = false; // 取消按钮关闭模态框
			},
			//确定模态框
			confirm() {
				// 提交按钮关闭模态框
				this.showModal = false;

				//提交数据，发送请求
				if (this.item.tradeMode == 0 || this.item.tradeMode == 2) {
					// 赋值
					this.order.itemId = this.item.id;
					this.order.mode = this.item.mode;
					this.order.image = this.item.image;
					// console.log('发送给后端的订单数据', this.order)

					// 给后端发送请求
					uni.request({
						url: 'http://localhost:8080/orders/newOrder?mode=' + this.item.tradeMode,
						method: 'POST',
						header: {
							'content-type': 'application/json', // 设置请求头为 JSON 类型
							'token': this.token
						},
						data: JSON.stringify(this.order),
						success: (res) => {
							// 提示框，提醒用户是否申请共享成功，或者以及申请过了。！！！！！！！！！！！
							// console.log(res.data.code);
							if (res.data.code == 1) {
								uni.showToast({
									title: '申请成功！',
									icon: 'success',
									duration: 2000
								});
							} else if (res.data.code == 0) {
								uni.showToast({
									title: '不能重复申请哦~',
									icon: 'error',
									duration: 2000
								});
							}
						},
						fail: (err) => {
							reject(err);
						}
					});
				}

			},
			getUser(openId) {
				return new Promise((resolve, reject) => {
					//获取token
					this.token = uni.getStorageSync('token')
					uni.request({
						url: 'http://localhost:8080/users/user?openId=' + openId,
						method: 'GET',
						header: {
							'token': this.token
						},
						success: (res) => {
							// 请求成功的回调函数，处理后端返回的数据
							if (res.data && res.data.code === 1) {
								//赋值给前端的 item 数据
								this.user = res.data.data;
								// console.log('this.user的数据：', this.user)
							} else {
								// console.error('请求数据失败或返回数据格式不符合预期');
							}
						},
						fail: (err) => {
							// 请求失败的回调函数，处理错误情况
							// console.error('请求数据失败', err);
						}

					});
				});
			},

			getItemData(id) {
				return new Promise((resolve, reject) => {
					//获取token
					this.token = uni.getStorageSync('token')
					uni.request({
						url: 'http://localhost:8080/items/' + id,
						method: 'GET',
						header: {
							'token': this.token
						},
						success: (res) => {
							// 请求成功的回调函数，处理后端返回的数据
							if (res.data && res.data.code === 1) {
								//赋值给前端的 item 数据
								this.item = res.data.data.item;
								console.log("物品种类：", this.item.tag)
								this.itemImages = res.data.data.itemImages
								// console.log('this.item的address数据：', this.item.address)
								//修改日期格式
								this.item.createTime = this.item.createTime.replace('T', ' ');
								// console.log('this.item.time的数据：', this.item.createTime)
								this.getUser(this.item.ownerUid);



								//获取物品是否已经收藏
								this.getCollect();

							} else {
								// console.error('请求数据失败或返回数据格式不符合预期');
							}
						},
						fail: (err) => {
							// 请求失败的回调函数，处理错误情况
							// console.error('请求数据失败', err);
						}

					});
				});
			},


			// 点击跳转订单详细页面
			buy: function(e) {
				// console.log(e);
				uni.navigateTo({
					url: '/pages/home/confirm_order/confirm_order'
				});
			},

			// //放大图片
			// previewImage(url) {
			// 	uni.previewImage({
			// 		current: url, // 当前显示图片的链接
			// 		urls: [url] // 需要预览的图片链接列表
			// 	});
			// },


		}
	}
</script>

<style lang="scss" scoped>
	/* 模态框样式 */
	.modal {
		position: fixed;
		// height: 380rpx;
		// width: 300rpx;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;

		.modal-content {
			background-color: #fff;
			padding: 20px;
			border-radius: 10px;
		}

		.modal-buttons {
			display: flex;
			justify-content: center;
			/* 将按钮水平居中显示 */
		}

		.modal-content {
			background-color: #fff;
			padding: 20px;
			border-radius: 10px;
			width: 80%;
			/* 设置模态框内容宽度为父容器的80% */
		}

		.uv-demo-block {
			margin-bottom: 20px;
			/* 设置每个 demo-block 之间的间距 */
		}

		.uv-demo-block__title {
			font-size: 16px;
			/* 设置标题字体大小 */
			margin-bottom: 15px;
			/* 设置标题和内容之间的间距 */
		}

		.uv-demo-block__content {
			width: 100%;
			/* 设置内容区域宽度为100% */
		}

		.uv-textarea {
			width: calc(100% - 20px);
			/* 设置文本框宽度为父容器宽度减去一定的间距，例如这里减去20px */
			height: 120px;
			/* 设置文本框高度为120px */
			font-size: 12px;
			/* 设置文本框字体大小 */
		}

		.modal-button {
			flex: 1;
			margin: 20rpx;
			padding: 10px 0;
			text-align: center;
			font-size: 16px;
			cursor: pointer;
		}

		.modal-button.confirm {
			color: #fff;
			background-color: #007bff;
		}

		.modal-button.cancel {
			color: #fff;
			background-color: #b0bbb9;
		}
	}

	// 二手交易模态框开
	.confirm-botton {
		display: inline-block;
		/* 或者 display: inline; */
	}

	/* 商家信息 */
	.padding-name {
		padding-top: 7rpx;
		padding-left: 20rpx;
		font-size: 35rpx;
	}

	.padding-name text {
		color: gray;
		font-size: 25rpx;
	}

	.padding-button {
		padding-top: 75rpx;
		padding-right: 30rpx;
		font-size: 25rpx;
		display: inline-block;
	}

	.fl image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 100%;
	}

	.padding-time {
		padding-top: 0rpx;
		font-size: 25rpx;
	}

	text-title-size {
		font-size: 50rpx;
		color: gray;
	}

	/* 商家信息end */

	/* 商品内容 */
	.top-20 {
		margin-top: 20rpx;
	}

	.price {
		display: flex;
	}

	.price-size {
		font-size: 50rpx;
		color: red;
	}

	.price-symbol {
		font-size: 20rpx;
		color: red;
	}

	.price-ori {
		margin-left: 25rpx;
		text-decoration: line-through;
	}

	.font-size text {
		font-weight: bold;
		font-size: 35rpx;
		color: black;

	}

	.hint {
		margin-top: 60rpx;
		color: black;
		font-size: 35rpx;
	}

	.img {
		margin-top: 10rpx;
		width: 100%;
		height: 800rpx;
	}

	.cu-tag {
		margin-left: 20rpx;
		/* padding: 0rpx; */
		font-size: 22rpx;
	}

	.browse {
		display: flex;
		justify-content: space-between;
	}

	.browse-tiem {
		font-size: 23rpx;
		color: gray;
	}

	.padding-browse {
		padding: 10rpx;
	}

	.itemTitle {
		display: flex;
	}

	/* 商品内容end */

	/* 商家信息 */
	.in_regard_to {
		display: flex;
		align-items: center;
	}

	.in_regard_to image {
		width: 50rpx;
		height: 65rpx;
	}

	.in_regard_to_text {
		font-size: 35rpx;
		color: black;
		font-family: inherit;
	}

	.top-30 {
		margin-top: 30rpx;

	}

	.Business_information {
		/* width: 30%; */
		padding: 5rpx;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;

	}

	.information {
		/* border-top-left-radius: 5%;
  border-top-right-radius: 5%; */
		border-radius: 20rpx;
		padding: 10rpx;
		display: flex;
		justify-content: space-around;
	}

	.item-inline {
		display: inline-block;
		margin-right: 10rpx;
		height: 150rpx;
		width: 230rpx;
	}

	/* end */

	.address {
		margin-top: 10rpx;
		display: flex;
	}

	/* 消息 */
	.msg {
		display: flex;
	}

	.msg-conetent {
		margin-left: 30rpx;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		margin-top: 10rpx;
		width: 80%;
	}

	.msg-timer {
		padding-left: 20rpx;
	}

	.msg-timers {
		color: gray;
		font-size: 22rpx;
	}

	/* end */



	/* 相似商品 */
	.container {
		margin-left: 29rpx;
		margin-right: 20rpx;
		/* float: left; */
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

	.container-flex {
		display: flex;
		flex-wrap: wrap;
	}

	/* end */
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
	/* 底部操作选项卡 */
	.fixation {
		position: fixed;
		bottom: 0rpx;
		width: 100%;
	}

	.margin-rigth-20 {
		margin-right: 20rpx;
	}

	/* end */
</style>