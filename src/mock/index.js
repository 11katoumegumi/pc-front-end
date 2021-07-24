import Mock from "mockjs";
import banners from "./banners.json";
Mock.mock("/mock/banners", "get", {
  code: 200,
  data: {
    "id|+1": 1,
    banners,
    // imgName: "@ctitle(3)",
    // image: Random.image("740x550", "@color()", "@color()", "jpg", "114514"),
  },
});
