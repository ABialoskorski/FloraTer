<template class="header">
  <v-toolbar fixed dark>
    <v-toolbar-title>
      <v-btn fab small
      :to="{
        name: 'home'
        }"
      >
      <v-icon>home</v-icon>
    </v-btn>
      <span class="font-weight-light">FloraTer_1</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn class="green white--text"
      :to="{
      name: 'login'
      }"
      >Zaloguj się
      <i class="fas fa-sign-in-alt"></i>
    </v-btn>
    <v-btn class="pink white--text"
    :to="{
        name: 'register'
      }"
      >Zarejestruj się
      <v-icon>exit_to_app</v-icon>
    </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-btn {
  font-size: 16px
}

</style>
