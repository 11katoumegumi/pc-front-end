import request from "../util/request";

// 请求商品
export function reqSearchGoods({
  category3Id,
  categoryName,
  keyword,
  order,
  pageNo,
  pageSize,
  props,
  trademark,
}) {
  return request({
    method: "POST",
    url: "/list",
    data: {
      category3Id,
      categoryName,
      keyword,
      order,
      pageNo,
      pageSize,
      props,
      trademark,
    },
  });
}
