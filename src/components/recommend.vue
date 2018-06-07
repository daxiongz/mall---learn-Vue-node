<template>
	<div class="recommend">
		<h3 class="title">产品列表</h3>
		<div class="content">
			<div class="content_item" v-for="(item, index) in items" :key="index">
				<img :src="item.message" alt="">
				<p class="name">
					<span class="new">￥{{ item.new_much }}</span> 
					<span class="old"> ￥{{ item.old_much }}</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "recommend",
		data() {
			return {
				items: [
					{
						message: "../../static/product.jpg",
						old_much: "150",
						new_much: "100"
					},
					{
						message: "../../static/product.jpg",
						old_much: "250",
						new_much: "200"
					},
					{
						message: "../../static/product.jpg",
						old_much: "260",
						new_much: "150"
					},
					{
						message: "../../static/product.jpg",
						old_much: "230",
						new_much: "150"
					},
					{
						message: "../../static/product.jpg",
						old_much: "360",
						new_much: "300"
					},
					{
						message: "../../static/product.jpg",
						old_much: "260",
						new_much: "200"
					}
				]
			};
		},
		method() {

		}
	};
</script>


<style lang="less" scoped>
	* {
		box-sizing: border-box;
	}
	.recommend {
		background: #ccc;
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
			display: flex;
			flex-wrap: wrap;
			// justify-content: space-between;
			.content_item {
				background: #fff;
				margin-bottom: 10px;
				flex: 1 100px;
				margin-right: 10px;
				img {
					width: 100%;
					height: 150px;
				}
				.name {
					font-size: 13px;
					margin-bottom: 5px;
					.old {
						color: gray;
						text-decoration: line-through;
					}
					.new {
						color: red;
					}
				}
			} 
		}
	}
</style>