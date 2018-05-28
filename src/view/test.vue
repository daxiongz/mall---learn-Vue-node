<template>
	<div class="test">
		<!-- 动态路由 -->
		<!-- 获取路由ID -->
		this is id: {{ $route.params.testId }}
		<br>
		this is name: {{ $route.params.testName }}
		<br>

		<!-- 嵌套路由 -->
		<router-link to="/test/title1">标题1</router-link>
		<router-link to="/test/title2">标题2</router-link>
		<router-view></router-view>

		<!-- 编程式路由 -->
		<div @click="gotoGoods">跳转到商品详情页面</div>

		<!-- 命名路由 -->
		<router-link v-bind:to="{name: 'goods'}">用命名路由的方式跳转到商品详情页面</router-link>	
	</div>
</template>
<script>
	export default {
		data() {
			return {
				msg: "Hello Vue!"
			}
		},
		methods: {
			gotoGoods: function () {
				// this.$router.push('/goods');
				// 路由添加参数 方式一
				/*this.$router.push({
					path: '/goods?goodsId=666'
				});*/
				// 路由添加参数 方式二
				this.$router.push({
					path: 'goods',
					query: {
						goodsId: 667
					}
				});
			}
			/*gotoGoods () {
				this.$router.push('/goods');
			}*/
		}
	}
</script>
<style scoped></style>