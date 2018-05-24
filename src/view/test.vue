<template>
	<div class="test">
		<!-- 获取路由ID -->
		this is id: {{ $route.params.testId }}
		<br>
		this is name: {{ $route.params.testName }}
	</div>
</template>
<script>
	export default {
		data() {
			return {
				msg: "Hello Vue!"
			}
		}
	}
</script>
<style scoped></style>