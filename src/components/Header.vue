<template class="header">
  <nav>
    <v-toolbar fixed app dark>
      <v-toolbar-side-icon
        v-if="$store.state.isUserLogedIn"
        class="grey--text"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn fab small :to="{
        name: 'home'
        }">
          <v-icon>home</v-icon>
        </v-btn>
        <span class="font-weight-light">FloraTer_1</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          class="green white--text"
          v-if="!$store.state.isUserLogedIn"
          :to="{
      name: 'login'
      }"
        >
          Logowanie
          <i class="fas fa-sign-in-alt"></i>
        </v-btn>
        <v-btn
          class="purple white--text"
          v-if="!$store.state.isUserLogedIn"
          :to="{
        name: 'register'
      }"
        >
          Rejestracja
          <i class="register fas fa-user-plus"></i>
        </v-btn>
        <v-btn
          class="pink white--text"
          v-if="$store.state.isUserLogedIn"
          @click="logout({
          name: 'home'})"
        >Wyloguj się</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="drawer">
      <v-list class="list">
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", title: "Strona główna", route: "/" },
        { icon: "library_add", title: "Dodaj do bazy", route: "/form" },
        { icon: "backup", title: "Baza roślin", route: "/plants" },
        { icon: "person", title: "Autorzy", route: "/team" }
      ]
    };
  },
  methods: {
    logout(route) {
      this.$store.dispatch("setToken", null);
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-btn {
  font-size: 16px;
}
.list {
  margin-top: 10px;
}
.v-list__tile__title {
  font-size: 16px;
}
.v-btn--floating.v-btn--small {
  height: 44px;
  width: 44px;
  & .v-icon {
    font-size: 30px;
  }
}
.fas {
  margin-left: 6px;
  font-size: 20px;
}
.register {
  font-size: 14px;
  margin-left: 6px;
}
</style>
