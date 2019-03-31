<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'

export default {
  name: "app",
  components: {
    Header
  }
};
</script>


<style lang="scss">
#app {
  font-family: 'Chakra Petch', sans-serif;
  color: #3e3e3e;
  margin-top: 60px;
  background-color: whitesmoke;
}
</style>
