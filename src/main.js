import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

var VueCookie = require("vue-cookie");
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");