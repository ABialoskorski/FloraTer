<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>


<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    home: Home
  }
};
</script>


<style lang="scss">
</style>
