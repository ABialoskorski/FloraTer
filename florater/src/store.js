/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    globalToken: null,
    isUserLogedIn: false,
  },
  mutations: {
    setglobalToken(state, globalToken) {
      globalToken = this.$cookie.get("CookieglobalToken")
      if (globalToken) {
        state.isUserLogedIn = true
        console.log("USER LOGGED IN")
      } else {
        state.isUserLogedIn = false
        console.log("USER NOT LOGGED IN")
      }
    }
  },
  actions: {}
});