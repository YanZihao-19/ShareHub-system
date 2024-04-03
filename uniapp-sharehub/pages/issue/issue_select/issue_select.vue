<template>
	<view class="flex flex-wrap justify-center " style="height: 300rpx;">

		<button class="basis-xl bg-grey margin-xs padding-sm radius" @tap="toShare">共享物品</button>
		<button class="basis-xl bg-grey margin-xs padding-sm radius" @tap="toExchange">以物换物</button>
		<button class="basis-xl bg-grey margin-xs padding-sm radius" @tap="toSale">二手出售</button>
	
	</view>
</template>

<script>
	import pickAdress from '@/components/john-pickAddress/pickAddress'
	export default {
		data() {
			return {
				order: '',
			};
		},
		components: {
			pickAdress
		},
		methods: {
			onPickAddress() {
				this.$refs.pickAdress.onOpen()
			},
			toExchange() {
				uni.navigateTo({
					url: '/pages/issue/barter/barter?pageFlag=0&order=' + encodeURIComponent(JSON.stringify(
						this.order))
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