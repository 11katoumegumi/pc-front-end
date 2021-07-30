import request from "../util/request";

/* 获取支付界面信息 */
export function reqGetTrade() {
  return request({
    method: "GET",
    url: `/order/auth/trade`,
  });
}
export function reqSubmitOrder({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList,
}) {
  return request({
    method: "POST",
    url: `/order/auth/submitOrder`,
    params: { tradeNo },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    },
  });
}

export function reqGetQRCode(orderId) {
  return request({
    method: "GET",
    url: `/payment/weixin/createNative/${orderId}`,
  });
}
export function reqQueryPayStatus(orderId) {
  return request({
    method: "GET",
    url: `/payment/weixin/queryPayStatus/${orderId}`,
  });
}
