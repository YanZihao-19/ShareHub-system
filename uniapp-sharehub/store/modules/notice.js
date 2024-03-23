export default {
	//命名空间
	namespaced: true,
	state: {
		commentNum: 0, //待读评论数
		orderNum: 0, //待读订单数
		informNum: 0, //待读通知数
	},
	mutations: {
		setCommentNum(state, commentNum) {
			state.commentNum = commentNum;
		},
		setOrderNum(state, orderNum) {
			state.orderNum = orderNum;
		},
		setInformNum(state, informNum) {
			state.informNum = informNum;
		}
	},

	getters: {

	},
	actions: {

	},
}