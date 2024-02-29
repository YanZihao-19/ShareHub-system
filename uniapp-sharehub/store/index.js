import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './modules/user.js'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// 在这里定义应用程序的全局状态

	},
	mutations: {
		// 在这里定义修改状态的方法

	},
	actions: {
		// 在这里定义触发 mutations 的动作

	},
	modules: {
		//模块化
		user: userModule,
	}
});