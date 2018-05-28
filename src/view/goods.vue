<template>
	<div class="goods">
		This is goods
		<span> Id is {{ $route.query.goodsId }}</span>
		<br>
		<a href="javascript:;" @click="$router.go(-1)">last page</a>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped></style>