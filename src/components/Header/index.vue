<template>
  <div class="header">
    <div id="header-content">
      <div id="header-top">
        <div id="header-top-content">
          <div id="header-user">
            <p>
              尚品汇欢迎您!请<span><a href="javascript:void(0)">登录</a></span
              ><span><a href="javascript:void(0)">免费注册</a></span>
            </p>
          </div>
          <ul id="header-nav">
            <li><a href="javascript:void(0)"> 我的订单</a></li>
            <li><a href="javascript:void(0)"> 我的购物车</a></li>
            <li><a href="javascript:void(0)"> 我的尚品汇</a></li>
            <li><a href="javascript:void(0)"> 尚品汇会员</a></li>
            <li><a href="javascript:void(0)"> 企业采购</a></li>
            <li><a href="javascript:void(0)"> 关注尚品汇</a></li>
            <li><a href="javascript:void(0)"> 合作招商</a></li>
            <li><a href="javascript:void(0)"> 商家后台</a></li>
          </ul>
        </div>
      </div>
      <div id="header-bottom">
        <div id="header-bottom-content">
          <div id="header-bottom-left">
            <router-link to="/"
              ><img src="../../assets/logo.png" alt="logo"
            /></router-link>
          </div>
          <div id="header-bottom-right">
            <input type="text" name="search" />
            <button @click.prevent="console.log(111)">搜索</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.header {
}
#header-content {
  margin: 0 auto;
}
#header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  background-color: #eaeaea;
}
#header-top-content {
  height: 35px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  #header-user {
    display: flex;
    align-items: center;
    span {
      border-right: 1px solid black;
      padding-right: 10px;
      margin-right: 10px;
      &:last-child {
        border: 0;
      }
    }
  }
  #header-nav {
    display: flex;
    align-items: center;
    li {
      /* width: 50px; */
      border-right: 1px solid black;
      padding-right: 10px;
      margin-right: 10px;
      &:last-child {
        border: 0;
      }
    }
  }
}
#header-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 60px;
  margin: 0 auto;
  input {
    width: 500px;
    height: 35px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #ea4a36;
  }
  button {
    width: 80px;
    height: 35px;
    color: #fff;
    border: 0;
    background-color: #ea4a36;
    outline: none;
  }
}
#header-bottom-right {
  display: flex;
  align-items: center;
}
</style>