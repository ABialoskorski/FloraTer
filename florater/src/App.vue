<template>
  <div id="app">
    <v-app>
      <h3>{{ info }}</h3>
      <Header></Header>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import VueAxios from "vue-axios";

export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get("http://kfsz.pythonanywhere.com/api/users")
      .then(response => (this.info = response));
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Chakra Petch", sans-serif;
  color: #3e3e3e;
  margin-top: 60px;
  background-color: whitesmoke;
}
</style>
