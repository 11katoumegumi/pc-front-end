const initUser = JSON.parse(localStorage.getItem("user")) || {
  nickName: "",
  token: "",
};
import { reqLogout, reqLogin } from "../../api/user";
const state = initUser;
const getters = {};
const actions = {
  async loginAction({ commit }, { phone, password }) {
    const user = await reqLogin({ phone, password });

    commit("LOGIN_ACTION", user);
  },
  async logoutAction({ commit }) {
    await reqLogout();
    commit("LOGOUT_ACTION");
  },
};
const mutations = {
  LOGIN_ACTION(state, { nickName, token }) {
    localStorage.setItem("user", JSON.stringify({ nickName, token }));
    state.username = nickName;
    state.token = token;
  },
  LOGOUT_ACTION(state) {
    localStorage.removeItem("user");
    state.nickName = "";
    state.token = "";
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
