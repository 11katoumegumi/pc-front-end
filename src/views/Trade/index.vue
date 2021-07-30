<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div
        class="address clearFix"
        v-for="addressInfo in userAddressList"
        :key="addressInfo.id"
        @click="handleDefaultClick(addressInfo)"
      >
        <span :class="{ username: true, selected: !!addressInfo.isDefault }">{{
          addressInfo.consignee
        }}</span>
        <p>
          <span class="s1">{{ addressInfo.deliveryAddress }}</span>
          <span class="s2">{{ addressInfo.consigneeTel }}</span>
          <span class="s3" v-if="addressInfo.isDefault">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left: 5px">货到付款</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul
          class="list clearFix"
          v-for="goods in orderDetailList"
          :key="goods.skuId"
        >
          <li>
            <img v-lazy="goods.imgUrl" alt="" />
          </li>
          <li>
            <p>
              {{ goods.skuName }}
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{ goods.orderPrice }}</h3>
          </li>
          <li>X{{ goods.skuNum }}</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea
          placeholder="建议留言前先与商家沟通确认"
          class="remarks-cont"
        ></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b
            ><i>{{ totalNum }}</i
            >件商品，总商品金额</b
          >
          <span>¥{{ originalTotalAmount }}</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        应付金额:<span>¥{{ originalTotalAmount }}</span>
      </div>
      <div class="receiveInfo">
        寄送至:
        <span>北京市昌平区宏福科技园综合楼6层</span>
        收货人：<span>张三</span>
        <span>15010658793</span>
      </div>
    </div>
    <div class="sub clearFix">
      <A class="subBtn" @click="handleSubmit">提交订单</A>
    </div>
  </div>
</template>

<script>
import { reqGetTrade, reqSubmitOrder } from "../../api/pay";
export default {
  name: "Trade",
  data() {
    return {
      // 商品列表
      orderDetailList: [],
      // 商品总价
      originalTotalAmount: 0,
      // 商品总数
      totalNum: 2,
      // 订单号
      tradeNo: "",
      // 用户收货地址列表
      userAddressList: [],
      // 买家留言
      orderComment: "1111",
    };
  },
  async mounted() {
    const res = await reqGetTrade();
    this.orderDetailList = res.detailArrayList;
    this.originalTotalAmount = res.originalTotalAmount;
    this.totalNum = res.totalNum;
    this.tradeNo = res.tradeNo;
    this.orderComment = res.comments;
    this.userAddressList = [
      {
        id: 1,
        consigneeTel: "13013131313",
        consignee: "华哥",
        deliveryAddress: "武汉洗脚城",
        isDefault: 1,
      },
      {
        id: 2,
        consigneeTel: "14014141414",
        consignee: "静哥",
        deliveryAddress: "深圳发廊",
        isDefault: 0,
      },
      {
        id: 3,
        consigneeTel: "15015151515",
        consignee: "雷哥",
        deliveryAddress: "深圳大保健",
        isDefault: 0,
      },
    ];
  },
  methods: {
    handleDefaultClick(addressInfo) {
      this.userAddressList.forEach((item) => (item.isDefault = 0));
      addressInfo.isDefault = 1;
    },
    async handleSubmit() {
      const { orderDetailList, tradeNo, originalTotalAmount } = this;
      const { consigneeTel, consignee, deliveryAddress } = this.userAddress;
      const orderId = await reqSubmitOrder({
        tradeNo,
        consignee,
        consigneeTel,
        deliveryAddress,
        paymentWay: "ONLINE",
        orderComment: "xxx",
        orderDetailList,
      });

      this.$router.push({
        name: "Pay",
        query: {
          orderId,
          originalTotalAmount,
        },
      });
    },
  },
  computed: {
    userAddress() {
      return this.userAddressList.find((user) => !!user.isDefault) || {};
    },
  },
};
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #e1251b;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;
      li {
        width: 300px;
      }
      h3 {
        text-align: center;
      }
      img {
        width: 80px;
        height: 80px;
      }
      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {
            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
    }
  }
}
</style>