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
		}
	},
	
	
	getters: {
		
	},
	actions: {

	},
}