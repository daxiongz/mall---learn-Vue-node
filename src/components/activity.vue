<template>
	<div class="activity">
		<h3 class="title">活动推荐</h3>
		<div class="content">
			<div class="content_item" v-for="(item, index) in items" :key="index">
				<img :src="item.message" alt="">
				<p class="name">品牌： Hxx-Luxury Store</p>
				<p class="desc">这是第一个发布的不错的品牌，你觉得呢？
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "activity",
		data() {
			return {
				items: [{
					message: "../../static/fifth.png"
				},
				{
					message: "../../static/second.png"
				}
				]
			};
		},
		mounted() {}
	};
</script>

<style lang="less" scoped>
	.activity {
		background: #eee;
		.title {
			width: 100%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			color: gray;
			border-bottom: 1px solid #000;
			background: #fff;
		}
		.content {
			.content_item {
				background: #fff;
				margin-bottom: 10px;
				img {
					width: 100%;
					height: 150px;
				}
			}
			.name {
				font-size: 13px;
				color: #000;
				margin-bottom: 5px;
			}
			.desc {
				font-size: 13px;
				color: #000;
			}
		} 
	}
</style>