<template>
	<div>
		<p>{{ username }}</p>
		<button @click="increment">{{ count }}</button>
		<button @click="incrementAsync">异步增加</button>
		<button @click="update">修改</button>
	</div>
</template>

<script>
	// this.$store.state.模块名.变量
	export default {

		data() {
			return {
				username: this.$store.state.user.openid
			}
		},
		computed: {
			count() {
				return this.$store.state.user.username;
			}
		},
		methods: {
			update() {
				this.$store.commit('user/setUsername','yanzihao');
			},
			
		}
	};
</script>