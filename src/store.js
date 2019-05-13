/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    isUserLogedIn: false
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
  actions: {
    setToken({
      commit
    }, token) {
      commit('setToken', token)
    },
  }
});