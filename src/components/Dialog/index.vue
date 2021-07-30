<template>
  <div class="dialog-wrapper" v-show="visible" @click.self="handleClose">
    <div
      class="dialog"
      :style="{
        width,
      }"
    >
      <!-- 也可以在这里写@click.stop -->
      <div class="dialog-header">
        <span class="dialog-header-title">{{ title }}</span>
        <button class="dialog-header-close" @click="handleClose">X</button>
      </div>
      <div class="dialog-body">
        <slot />
      </div>
      <div class="dialog-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    title: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "50%",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible(visible) {
      if (visible) {
        document.documentElement.style.overflow = "hidden";
        return;
      } else {
        document.documentElement.style.overflow = "scroll";
      }
    },
    immediate: true,
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="less" scoped>
.dialog-wrapper {
  z-index: 2013;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  margin-top: 15vh;
}
.dialog-header {
  padding: 20px 20px 10px;
}
.dialog-header-title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
.dialog-header-close {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: #909399;
}
.dialog-body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.dialog-body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.dialog-footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
  button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .right {
    background-color: #409eff;
    border-color: #409eff;
    margin-left: 10px;
    color: #fff;
  }
}
</style>
