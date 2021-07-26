import request from "../util/request";
import requestMock from "../util/requestMock";

// 请求categoryList
export function reqCategoryList() {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
}

// 请求banners轮播图
export function reqGetBanners() {
  return requestMock({
    method: "GET",
    url: "/banners",
  });
}

// 请求banners轮播图
export function reqGetFloors() {
  return requestMock({
    method: "GET",
    url: "/floors",
  });
}

// 搜索商品 good商品信息
export function reqSearchGood(good) {
  return request({
    method: "POST",
    url: "/list",
    data: good,
  });
}
