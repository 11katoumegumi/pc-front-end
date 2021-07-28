import request from "../util/request";

/* 获取购物车列表 */

export function reqGetCartList() {
  return request({
    method: "get",
    url: "/cart/cartList",
  });
}

/* 添加到购物车 */

export const reqAddToCart = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};

export const reqCheckCart = (skuID, isChecked) => {
  return request({
    method: "get",
    url: `/cart/checkCart/${skuID}/${isChecked}`,
  });
};

export const deleteCart = (skuId) => {
  return request({
    method: "DELETE",
    url: `/cart/deleteCart/${skuId}`,
  });
};
