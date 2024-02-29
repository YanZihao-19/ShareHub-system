<template>
	<view class="flex flex-wrap justify-center " style="height: 300rpx;">

		<butto class="basis-xl bg-grey margin-xs padding-sm radius" @tap="toShare">共享物品</butto>
		<butto class="basis-xl bg-grey margin-xs padding-sm radius" @tap="toExchange">以物换物</butto>
		<butto class="basis-xl bg-grey margin-xs padding-sm radius" @tap="toSale">二手出售</butto>

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
					url: '/pages/issue/sale/sale'
				});
			},
			toSale() {
				uni.navigateTo({
					url: '/pages/issue/sale/sale'
				});
			},
			toShare() {
				uni.navigateTo({
					url: '/pages/issue/sale/sale'
				});
			},
		}
	}
</script>

<style lang="scss">

</style>