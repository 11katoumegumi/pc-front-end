<template>
  <div class="header">
    <div class="header-top">
      <span class="header-user">
        <span>尚品汇欢迎您！请</span>
        <router-link to="/login" class="header-user-login">登录</router-link>
        <router-link to="/register" class="header-user-register"
          >免费注册</router-link
        >
      </span>
      <ul class="header-nav">
        <li><a href="javascript:void(0)">我的订单</a></li>
        <li><a href="javascript:void(0)">我的购物车</a></li>
        <li><a href="javascript:void(0)">我的尚品汇</a></li>
        <li><a href="javascript:void(0)">尚品汇会员</a></li>
        <li><a href="javascript:void(0)">企业采购</a></li>
        <li><a href="javascript:void(0)">关注尚品汇</a></li>
        <li><a href="javascript:void(0)">合作招商</a></li>
        <li><a href="javascript:void(0)">商家后台</a></li>
      </ul>
    </div>
    <div class="header-bottom">
      <div class="header-logo">
        <router-link to="/">
          <img src="./logo.png" alt="logo" />
        </router-link>
      </div>
      <div class="header-search">
        <input v-model="keyword" type="text" />
        <button @click="goSearch">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      const location = { name: "Search" };

      //加上query参数
      location.query = this.$route.query;

      //注意：可以不携带路由参数，但是路由参数不能为空
      if (this.keyword) {
        location.params = { keyword: this.keyword };
      }
      //搜索
      this.$router.push(location);
      //清空搜索
      this.keyword = "";
    },
  },
};
</script>

<style lang="less" scoped>
a {
  color: #000;
  &:hover {
    text-decoration: none;
    color: tomato;
  }
}
/* header-top */
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  padding: 10px 0;
}
.header-user {
  padding: 0 20px;
  .header-user-login {
    border-right: 1px solid #000;
    padding-right: 5px;
  }
  .header-user-register {
    margin-left: 5px;
  }
}
.header-nav {
  display: flex;
  padding: 0 20px;
  li {
    border-right: 1px solid #000;
    padding-right: 10px;
    margin-left: 10px;
    &:last-child {
      border-right: none;
      padding-right: 0;
    }
  }
}
/* header-bottom */
.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.header-search {
  display: flex;
  align-items: center;
  input {
    width: 500px;
    height: 35px;
    border: 1px solid red;
    padding: 0 5px;
    font-size: 14px;
    outline: none;
    box-sizing: border-box;
  }
  button {
    width: 80px;
    height: 35px;
    background-color: red;
    color: white;
    border: none;
    outline: none;
    font-size: 14px;
  }
}
</style>
