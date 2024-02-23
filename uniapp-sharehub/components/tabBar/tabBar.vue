<template>
	<view>
        <!-- 这里是对应的页面 -->
		<homePage v-if="PageCur=='home'"></homePage>

        <!-- 底部操作条：背景颜色、对应图标、字体颜色，可自定义 -->
        <view class="cu-bar tabbar bg-white foot">
            <!-- 首页 -->
            <view class="action" :class="PageCur=='home'?'text-green':'text-gray'" 
                data-cur="home" @click="NavChange">
                <view class="cuIcon-homefill"></view> 首页
            </view>
            <!-- 分类 -->
            <view class="action" :class="PageCur=='similar'?'text-green':'text-gray'" 
                data-cur="similar" @click="NavChange">
                <view class="cuIcon-similar"></view> 分类
            </view>
            <!-- 中间发布按钮 -->
            <view class="action add-action" :class="PageCur=='sub'?'text-green':'text-gray'"         
                data-cur="sub" @click="NavChange">
                <button class="cu-btn cuIcon-add bg-green shadow"></button>
                发布
            </view>
            <!-- 购物车、右上角有数字角标 -->
            <view class="action" :class="PageCur=='cart'?'text-green':'text-gray'" 
                data-cur="cart" @click="NavChange">
                <view class="cuIcon-cart">
                    <!-- 数字角标 -->
                    <view class="cu-tag badge">99</view>
                </view>
                购物车
            </view>
            <!-- 我的、左上角红色圆点 -->
            <view class="action" :class="PageCur=='mine'?'text-green':'text-gray'" 
                data-cur="mine" @click="NavChange">
                <view class="cuIcon-my">
                    <!-- 红色圆点（数字角标） -->
                    <view class="cu-tag badge"></view>
                </view>
                我的
            </view>
        </view>

	</view>
</template>
 
<script>
	export default {
		name: "tabBar",
		data() {
		    return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>
