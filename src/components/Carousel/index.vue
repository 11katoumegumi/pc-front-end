<template>
  <div
    class="swiper-container"
    ref="swiper"
    @mouseenter="swiper.autoplay.stop()"
    @mouseleave="swiper.autoplay.start()"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img in imgList" :key="img.id">
        <img v-lazy="img.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "Carousel",
  props: {
    imgList: Array,
  },
  watch: {
    // 监视imgList的变化
    imgList: {
      handler: function () {
        //过滤数据为空的情况
        if (!this.imgList.length) return;
        // imgList发生变化，watcher被插入异步队列
        // 然后将nextTick的回调插入异步队列，因此nextTick回调调用的时候，可以获得DOM元素
        this.$nextTick(() => {
          this.swiper = new Swiper(this.$refs.swiper, {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            loop: true,
            autoplay: {
              delay: 1000,
            },
          });
        });
      },
      immediate: true,
    },
  },
};
</script>

<style lang='less' scoped>
.swiper-slide {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
