/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isUserLogedIn: false,
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLogedIn = true;
      } else {
        state.isUserLogedIn = false;
      }
    }
  },
  actions: {}
});