<template>
  <v-layout column>
    <v-flex>
       <h1>Zarejestruj się!</h1>
        <form
          name="register-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="darkgrey"
          @click="register">
          Register
        </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
