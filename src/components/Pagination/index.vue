<template>
  <div class="pagination">
    <button
      @click="myCurrentPage = myCurrentPage - 1"
      :disabled="myCurrentPage === 1"
    >
      <span class="iconfont icon-leftarrow" />
    </button>
    <button
      @click="myCurrentPage = 1"
      :class="{
        active: myCurrentPage === 1,
      }"
    >
      1
    </button>
    <button v-show="startEnd.start > 2">
      <span class="iconfont icon-ellipsis" />
    </button>
    <button
      v-for="(item, index) in startEnd.end - startEnd.start + 1"
      :key="item"
      @click="handleButtonClick(index + startEnd.start)"
      :class="{
        active: myCurrentPage === index + startEnd.start,
      }"
    >
      {{ index + startEnd.start }}
    </button>
    <button v-show="startEnd.end < totalPages - 1">
      <span class="iconfont icon-ellipsis" />
    </button>
    <button
      @click="myCurrentPage = totalPages"
      :class="{
        active: myCurrentPage === totalPages,
      }"
      v-show="totalPages != 1"
    >
      {{ totalPages }}
    </button>
    <button :disabled="myCurrentPage <= 20">
      <span class="iconfont icon-Rightarrow" @click="handleRightClick" />
    </button>
    <select v-model="myPageSize">
      <option :value="size" v-for="size in pageSizes" :key="size">
        每页 {{ size }}条
      </option>
    </select>
    <span>一共{{ total }}条</span>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Pagination",
  data() {
    return {
      myCurrentPage: this.currentPage,
      myPageSize: this.pageSize,
      isPageSizeChange: false,
    };
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    pageSizes: {
      type: Array,
      default: () => [5, 10, 15],
    },
    total: {
      type: Number,
      default: 65,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.myPageSize);
    },
    startEnd() {
      const { myCurrentPage, totalPages } = this;

      /* 场景5: [1] */
      if (totalPages <= 2) {
        return {
          start: 0,
          end: -1,
        };
      }

      /* 
        场景4: 1 2 [3] 4
      */
      if (totalPages <= 7) {
        return {
          start: 2,
          end: totalPages - 1,
        };
      }
      /* 
          场景1: 4 5 [6] 7 8
       */

      /* 场景2: [1] 2 3 4 5 6 ...100 */
      let start = myCurrentPage - 2;
      if (start <= 2) {
        start = 2;
      }

      /* 场景3: 96 97 98 [99] 100 */
      let end = start + 4;
      if (end > totalPages - 1) {
        end = totalPages - 1;
        start = end - 4;
      }
      return { start, end };
    },
  },
  methods: {
    handleButtonClick(item) {
      console.log(this.myCurrentPage === item);
      this.myCurrentPage = item;
    },
    handleRightClick() {
      if (this.myCurrentPage >= this.totalPages) {
        return;
      }
      this.myCurrentPage = this.myCurrentPage + 1;
    },
  },
  watch: {
    myCurrentPage: {
      handler: _.debounce(
        function (myCurrentPage) {
          if (this.isPageSizeChange) {
            this.isPageSizeChange = false;
            return;
          }
          this.$emit("searchCurrentPage", myCurrentPage);
        },
        300,
        {
          leading: true,
          maxwait: 5000,
        }
      ),
    },
    myPageSize(pageSize) {
      if (this.myCurrentPage > this.totalPages) {
        this.isPageSizeChange = true;
        this.myCurrentPage = this.totalPages;
        this.$emit("update:currentPage", this.totalPages);
      }
      this.$emit("searchPageSize", pageSize);
    },
  },
};
</script>

<style lang='less' scoped>
.pagination {
  display: flex;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    outline: none;
    border: none;
    margin: 10px;
    cursor: pointer;
  }
  .active {
    background-color: aquamarine;
  }
  span {
    margin: 10px;
  }
}
</style>