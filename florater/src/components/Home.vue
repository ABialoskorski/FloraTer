<template>
  <v-app>
    <v-toolbar fixed dark>
      <v-toolbar-items>
        <v-btn
        flat
        dark
          >Zaloguj się</v-btn>
      <v-btn class="pink white--text">
        Zarejestruj się
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
.home{
  &__list{
    list-style-type: none;
    display: flex;
    text-decoration: none;
    flex-flow: wrap;
    justify-content: flex-end;
    padding-top: 25px;
  }
  &__link a{
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-size: 19px;
    background-color: #55a4b4;
    text-align: center;
    margin-left: 24px;
    width: 100px;
    border: 22px solid #55a4b4;
  }
}
h2{
  margin-top: 50px;
  font-size: 34px;
  text-align: center;
}
</style>
