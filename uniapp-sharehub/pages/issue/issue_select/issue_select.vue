<template>
	<view class="flex flex-wrap justify-center " style="height: 300rpx;">

		<button class="basis-xl bg-grey margin-xs padding-sm radius" @tap="toShare">共享物品</button>
		<button class="basis-xl bg-grey margin-xs padding-sm radius" @tap="toExchange">以物换物</button>
		<button class="basis-xl bg-grey margin-xs padding-sm radius" @tap="toSale">二手出售</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			toExchange() {
				uni.navigateTo({
					url: '/pages/issue/barter/barter'
				});
			},
			toSale() {
				uni.navigateTo({
					url: '/pages/issue/sale/sale'
				});
			},
			toShare() {
				uni.navigateTo({
					url: '/pages/issue/share/share'
				});
			},
		}
	}
</script>

<style lang="scss">

</style>