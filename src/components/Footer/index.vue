<template>
  <div class="Footer">
    <div class="Footer-content">
      <div class="Footer-top">
        <div class="list-container">
          <p class="list-title">购物指南</p>
          <ul class="bottom-list">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="list-container">
          <p class="list-title">配送方式</p>
          <ul class="bottom-list">
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="list-container">
          <p class="list-title">支付方式</p>
          <ul class="bottom-list">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="list-container">
          <p class="list-title">售后服务</p>
          <ul class="bottom-list">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="list-container">
          <p class="list-title">特色服务</p>
          <ul class="bottom-list">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>尚品汇E卡</li>
            <li>尚品汇通信</li>
          </ul>
        </div>
        <div class="list-container">
          <p class="list-title">帮助中心</p>
          <img src="../../assets/QRCode.jpg" alt="" />
        </div>
      </div>
      <div class="Footer-bottom">
        <ul class="final-list">
          <li>关于我们</li>
          <li>联系我们</li>
          <li>关于我们</li>
          <li>商家入驻</li>
          <li>营销中心</li>
          <li>友情链接</li>
          <li>关于我们</li>
          <li>营销中心</li>
          <li>友情链接</li>
          <li>关于我们</li>
        </ul>
        <p>地址：北京市昌平区宏福科技园综合楼6层</p>
        <p>京ICP备19006430号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.Footer {
  background-color: #eaeaea;
}
.Footer-content {
  width: 1200px;
  margin: 0 auto;
}
.Footer-top {
  display: flex;
  justify-content: space-around;
}
.list-title {
  font-size: 14px;
  font-weight: bold;
}
.list-container {
  margin-top: 20px;
}
.Footer-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  p {
    margin: 15px 0;
  }
}
.final-list {
  display: flex;
  li {
    border-right: 1px solid black;
    padding-right: 10px;
    margin-right: 10px;
    &:last-child {
      border-right: none;
      padding-right: 0px;
      margin-right: 0px;
    }
  }
}
</style>