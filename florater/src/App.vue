<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <v-content>
        <router-view></router-view>
        <div>
          <h2>Lista roślin</h2>
          <ul>
            <li
              v-for="plant in plants"
              :key="plant.id"
            >{{ plant.id }}, {{ plant.name_latin }}, {{ plant.family }}</li>
          </ul>
        </div>
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
      info: null,
      plants: []
    };
  },
  mounted() {
    axios
      .get("http://kfsz.pythonanywhere.com/api/users")
      .then(response => (this.info = response));
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/plants/")
      .then(response => {
        this.plants = response.data;
      })
      .catch(error => {
        alert(error);
      });
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
