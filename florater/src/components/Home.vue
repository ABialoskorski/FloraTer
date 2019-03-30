<template>
  <v-app>
    <v-toolbar fixed dark>
      <v-toolbar-items>
        <v-btn class="home__button green white--text"
        :to="{
        name: 'login'
        }"
        >Zaloguj się
      </v-btn>
      <v-btn class="pink white--text"
      :to="{
          name: 'register'
        }"
        >Zarejestruj się
      </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <h2>Witaj we FloraTer_1</h2>
  </v-app>
</template>

<script>
export default {};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  &__button{
  justify-content: flex-end;
  }
}
h2{
  margin-top: 100px;
  font-size: 34px;
  text-align: center;
}
</style>
