<template>
  <div
    class="swiper-container"
    ref="swiper"
    @mouseenter="swiper.autoplay.stop()"
    @mouseleave="swiper.autoplay.start()"
  >
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="imageItem in imageList"
        :key="imageItem.id"
      >
        <img :src="imageItem.imgUrl" />
      </div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Carousel",
  props: {
    imageList: Array,
  },
  methods: {},
  watch: {
    imageList() {
      this.$nextTick(() => {
        this.swiper = new Swiper(this.$refs.swiper, {
          navigation: {
            // 左右箭头
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            // 小圆点
            el: ".swiper-pagination",
          },
          loop: true, // 无缝轮播
          autoplay: {
            // 自动轮播
            delay: 1000,
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>