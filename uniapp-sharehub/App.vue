<script>
	export default {		
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

	}
</script>

<style lang="scss">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "colorui/animation.css";
</style>