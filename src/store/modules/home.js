import { reqCategoryList } from "../../api/Home";
import { reqBanners } from "../../api/Home";
const state = {
  categoryList: [],
  banners: [],
};
const getters = {};
const actions = {
  async getCategoryList({ commit }) {
    const res = await reqCategoryList();
    commit("GET_CATEGORY_LIST", res.data);
  },
  async getBanners({ commit }) {
    const res = await reqBanners();
    commit("GET_BANNERS", res.data.banners);
  },
};
const mutations = {
  GET_CATEGORY_LIST(state, list) {
    state.categoryList = list;
  },
  GET_BANNERS(state, banners) {
    state.banners = banners;
    console.log(state.banners);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
