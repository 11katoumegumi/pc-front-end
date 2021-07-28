const state = {
  username: "",
  token: "",
};
const getters = {};
const actions = {};
const mutations = {
  SET_USERNAME: function({ state }, username) {
    state.username = username;
  },
  SET_TOKEN: function({ state }, token) {
    state.token = token;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
