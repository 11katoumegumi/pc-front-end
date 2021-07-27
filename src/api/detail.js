import request from "../util/request";

export function reqGetGoodsDetail(id) {
  return request({
    method: "GET",
    url: `/item/${id}`,
  });
}
/* 添加到购物车 */

export const reqAddToCart = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};
