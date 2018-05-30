<template>
	<div class="carousel">
		<swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="../../static/first.png" height="299" width="571" alt="img1"></swiper-slide>
    <swiper-slide><img src="../../static/second.png" height="299" width="570" alt="img2"></swiper-slide>
    <swiper-slide><img src="../../static/third.png" height="299" width="570" alt="img3"></swiper-slide>
    <swiper-slide><img src="../../static/forth.png" height="300" width="570" alt="img4"></swiper-slide>
    <swiper-slide><img src="../../static/fifth.png" height="299" width="570" alt="img5"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
	</div>
</template>

<script>
  import "swiper/dist/css/swiper.css";
  import { swiper, swiperSlide } from "vue-awesome-swiper";
	export default {
		name: "carousel",
		components: {
			swiper,
			swiperSlide
		},
		data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: {
          	el: ".swiper-pagination",
          	dynamicBullets: true
          },
          autoplay: {
          	delay: 2500,
          	disableOnInteraction: false
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
	};
</script>

<style lang="less" scoped>
	.carousel {

	}
</style>