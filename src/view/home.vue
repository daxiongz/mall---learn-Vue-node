<template>
	<div class="home">
		<my-header></my-header>
		<activity></activity>
		<recommend></recommend>
	</div>
</template>
<script>
	import MyHeader from '@/components/myHeader'
	import Activity from '@/components/activity'
	import Recommend from '@/components/recommend'
	export default {
		name: "home",
		components: {
			MyHeader,
			Activity,
			Recommend
		},
		data: function () {
			return {
				msg: "the mall of daixongz"
			}
		},
		methods: {}
	};
</script>
<style scoped></style>