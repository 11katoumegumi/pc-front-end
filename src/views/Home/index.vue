<template>
  <div>
    <TypeNav />
    <!-- 列表 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!-- 楼层 -->
    <Floor />
    <!-- 楼层 -->
    <Floor />
    <!-- 商标 -->
    <Brand />
  </div>
</template>

<script>
import TypeNav from "../../components/TypeNav";
import ListContainer from "./ListContainer/ListContainer.vue";
import Brand from "./Brand/Brand";
import Floor from "./Floor/Floor";
import Like from "./Like/Like";
import Rank from "./Rank/Rank";
import TodayRecommend from "./TodayRecommend/TodayRecommend";

export default {
  name: "Home",
  components: {
    Brand,
    Floor,
    Like,
    Rank,
    TodayRecommend,
    TypeNav,
    ListContainer,
  },
};
</script>

<style lang="less" scoped>
</style>