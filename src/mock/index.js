import Mock from "mockjs";
import banners from "./banner.json";
import floors from "./floor.json";

const Random = Mock.Random;
Random.color();
Random.ctitle();

Mock.mock("/mock/banners", "get", {
  code: 200,
  data: banners,
});

Mock.mock("/mock/floors", "get", {
  code: 200,
  data: floors,
});
