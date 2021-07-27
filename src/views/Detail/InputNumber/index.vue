<template>
  <div class="controls">
    <input
      autocomplete="off"
      class="itxt"
      v-model.lazy="myCount"
      @keyup.enter="setMyCount"
      @blur="setMyCount"
    />
    <a href="javascript:" class="plus" @click="plus">+</a>
    <a href="javascript:" class="mins" @click="reduce">-</a>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  data() {
    return {
      myCount: this.value,
    };
  },
  props: {
    value: {
      type: Number,
    },
    max: {
      type: Number,
      default: 10,
    },
    min: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    plus() {
      if (this.myCount >= this.max) return;
      this.myCount = +this.myCount + 1;
    },
    reduce() {
      if (this.myCount <= this.min) return;
      this.myCount = +this.myCount - 1;
    },
    setMyCount(e) {
      this.myCount = e.target.value;
    },
  },
  watch: {
    myCount(newValue, oldValue) {
      let myValue = +newValue;

      if (Number.isNaN(myValue)) {
        myValue = oldValue;
      }

      if (newValue > this.max) {
        myValue = this.max;
      }
      if (newValue < this.min) {
        myValue = this.min;
      }

      /* 更改输入框的数值 */
      this.myCount = myValue;
      /* 更改父组件的数值 */
      this.$emit("input", myValue);
    },
  },
};
</script>

<style lang="less" scoped>
.controls {
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;

  .itxt {
    width: 38px;
    height: 37px;
    border: 1px solid #ddd;
    color: #555;
    float: left;
    border-right: 0;
    text-align: center;
  }

  .plus,
  .mins {
    width: 15px;
    text-align: center;
    height: 17px;
    line-height: 17px;
    background: #f1f1f1;
    color: #666;
    position: absolute;
    right: -8px;
    border: 1px solid #ccc;
  }

  .mins {
    right: -8px;
    top: 19px;
    border-top: 0;
  }

  .plus {
    right: -8px;
  }
}

.add {
  float: left;
}
</style>