<template>
  <v-layout column>
    <v-flex>
      <h1>Login</h1>
      <v-text-field label="Email" v-model="email"></v-text-field>
      <br>
      <v-text-field label="Password" type="password" v-model="password"></v-text-field>
      <v-btn @click="login">Login</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
