<template>
  <div class="spec-preview" @mousemove="handleMouseMove">
    <img v-lazy="imageUrl" ref="small" />
    <div class="event"></div>
    <div class="big">
      <img v-lazy="imageUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: {
    imageUrl: {
      type: String,
    },
  },
  mounted() {},

  methods: {
    handleMouseMove(e) {
      /* mask移动 */
      let x = e.offsetX - this.$refs.mask.clientWidth / 2;
      let y = e.offsetY - this.$refs.mask.clientHeight / 2;
      /* 临界值控制 */
      if (x > this.$refs.mask.clientWidth) {
        x = this.$refs.mask.clientWidth;
      } else if (x < 0) {
        x = 0;
      }
      if (y > this.$refs.mask.clientHeight) {
        y = this.$refs.mask.clientHeight;
      } else if (y < 0) {
        y = 0;
      }
      this.$refs.mask.style.top = y + "px";
      this.$refs.mask.style.left = x + "px";
      /* 大图移动 */
      let scale = this.$refs.big.clientWidth / this.$refs.small.clientWidth;

      this.$refs.big.style.top = y * -scale + "px";
      this.$refs.big.style.left = x * -scale + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>