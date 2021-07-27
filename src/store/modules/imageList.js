const state = {
  imageUrl: "",
};
const getters = {};
const actions = {
  changeImage({ commit }, imageUrl) {
    commit("CHANGE_IMAGE", imageUrl);
  },
};

const mutations = {
  CHANGE_IMAGE(state, imageUrl) {
    state.imageUrl = imageUrl;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
