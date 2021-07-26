import { reqSearchGoods } from "../../api/search";

const state = {
  attrsList: [],
  goodsList: [],
  trademarkList: [],
  total: 0,
};
const getters = {};
const actions = {
  async getSearchGoods({ commit }, good) {
    const data = await reqSearchGoods(good);
    commit("GET_SEARCH_GOODS", data);
  },
};
const mutations = {
  GET_SEARCH_GOODS(state, data) {
    state.attrsList = data.attrsList;
    state.goodsList = data.goodsList;
    state.trademarkList = data.trademarkList;
    state.total = data.total;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
