import {
  reqCategoryList,
  reqGetBanners,
  reqGetFloors,
} from "../../api/home.js";

const state = {
  categoryList: [],
  bannersList: [],
  floors: [],
};
const getters = {};
const actions = {
  //获取三级目录
  async getCategoryList({ commit }) {
    const data = await reqCategoryList();
    commit("GET_CATEGORY_LIST", data);
  },
  //获取banners轮播图
  async getBanners({ commit }) {
    const data = await reqGetBanners();
    commit("GE_BANNERS", data);
  },
  //获取floors轮播图
  async getFloors({ commit }) {
    const data = await reqGetFloors();
    commit("GET_FLOORS", data);
  },
};
const mutations = {
  GET_CATEGORY_LIST(state, categoryList) {
    const filterList = categoryList.map((category) => {
      return { ...category, categoryChild: category.categoryChild.slice(0, 5) };
    });
    // 对categoryList数据冻结
    state.categoryList = filterList.slice(0, 15);
  },
  GE_BANNERS(state, bannersList) {
    // 对categoryList数据冻结
    state.bannersList = bannersList;
  },
  GET_FLOORS(state, floors) {
    // 对categoryList数据冻结
    state.floors = floors;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
