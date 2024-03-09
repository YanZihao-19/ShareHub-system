export default {
	//命名空间
	namespaced: true,
	state: {
		openid: '',
		username: '',
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		setOpenid(state, openid) {
			state.openid = openid;
		}
	},
	
	
	getters: {
		
	},
	actions: {

	},
}