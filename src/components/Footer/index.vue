<template>
  <div class="footer">
    <div class="footer-top">
      <ul class="footer-nav">
        <li class="footer-content">
          <dl>
            <dt>购物指南</dt>
            <dd>购物流程</dd>
            <dd>会员介绍</dd>
            <dd>生活旅行/团购</dd>
            <dd>常见问题</dd>
            <dd>购物指南</dd>
          </dl>
        </li>
        <li class="footer-content">
          <dl>
            <dt>配送方式</dt>
            <dd>上门自提</dd>
            <dd>211限时达</dd>
            <dd>配送服务查询</dd>
            <dd>配送费收取标准</dd>
            <dd>海外配送</dd>
          </dl>
        </li>
        <li class="footer-content">
          <dl>
            <dt>支付方式</dt>
            <dd>货到付款</dd>
            <dd>在线支付</dd>
            <dd>分期付款</dd>
            <dd>邮局汇款</dd>
            <dd>公司转账</dd>
          </dl>
        </li>
        <li class="footer-content">
          <dl>
            <dt>售后服务</dt>
            <dd>售后政策</dd>
            <dd>价格保护</dd>
            <dd>退款说明</dd>
            <dd>返修/退换货</dd>
            <dd>取消订单</dd>
          </dl>
        </li>
        <li class="footer-content">
          <dl>
            <dt>特色服务</dt>
            <dd>夺宝岛</dd>
            <dd>DIY装机</dd>
            <dd>延保服务</dd>
            <dd>尚品汇E卡</dd>
            <dd>尚品汇通信</dd>
          </dl>
        </li>
        <li class="footer-content">
          <dl>
            <dt>帮助中心</dt>
            <dd><img src="./wx_cz.jpg" alt="wx_cz" /></dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="footer-bottom">
      <ul class="footer-about">
        <li><a href="javascript:void(0)">关于我们</a></li>
        <li><a href="javascript:void(0)">联系我们</a></li>
        <li><a href="javascript:void(0)">关于我们</a></li>
        <li><a href="javascript:void(0)">商家入驻</a></li>
        <li><a href="javascript:void(0)">营销中心</a></li>
        <li><a href="javascript:void(0)">友情链接</a></li>
        <li><a href="javascript:void(0)">关于我们</a></li>
        <li><a href="javascript:void(0)">营销中心</a></li>
        <li><a href="javascript:void(0)">友情链接</a></li>
        <li><a href="javascript:void(0)">关于我们</a></li>
      </ul>
      <p class="footer-addr">地址：北京市昌平区宏福科技园综合楼6层</p>
      <p class="footer-addr">京ICP备19006430号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
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
.footer {
  background-color: #eaeaea;
}
/* footer-top */
.footer-top {
  padding: 20px 0;
  border-bottom: 1px solid #e4e1e1;
  border-top: 1px solid #e4e1e1;
}
.footer-nav {
  display: flex;
  justify-content: space-evenly;
}
.footer-content {
  line-height: 18px;
  dt {
    font-weight: bold;
    font-size: 14px;
  }
}
/* footer-bottom */
.footer-bottom {
  padding: 20px 0;
}
.footer-about {
  display: flex;
  justify-content: center;
  li {
    padding-right: 10px;
    border-right: 1px solid #000;
    margin-left: 10px;
    &:last-child {
      padding-right: 0;
      border-right: none;
    }
  }
}
.footer-addr {
  text-align: center;
  margin: 10px 0;
}
</style>
