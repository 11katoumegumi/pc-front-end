import request from "../utils/request";
import requestMock from "../utils/requestMock";

// 获取首页三级分类
export const reqCategoryList = () => {
  return request({
    method: "GET",
    url: "product/getBaseCategoryList",
  });
};
export const reqBanners = () => {
  return requestMock({
    method: "GET",
    url: "/banners",
  });
};
