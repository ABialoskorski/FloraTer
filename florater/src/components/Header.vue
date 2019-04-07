<template class="header">
  <nav>
    <v-toolbar fixed app dark>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
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
        <v-btn class="green white--text" :to="{
      name: 'login'
      }">
          Zaloguj się
          <i class="fas fa-sign-in-alt"></i>
        </v-btn>
        <v-btn class="pink white--text" :to="{
        name: 'register'
      }">
          Zarejestruj się
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="drawer">
      <v-list>
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
        { icon: "dashboard", title: "Dashboard", route: "/" },
        { icon: "folder", title: "Grupy", route: "/groups" },
        { icon: "person", title: "Autorzy", route: "/team" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-btn {
  font-size: 16px;
}
</style>
