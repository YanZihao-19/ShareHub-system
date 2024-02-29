import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.config.productionTip = false

App.mpType = 'app'

//注册colorui
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

const app = new Vue({
	...App,
	store
})
app.$mount()