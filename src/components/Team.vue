<template>
  <div class="team">
    <h1 class="grey--text">Autorzy</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="70" class="grey lighten-2">
                <img :src="person.avatar" alt="zdjęcie autora">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="right">
              <v-btn icon @click="person.show = !person.show">
                <v-icon>{{ person.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="person.show">{{ person.description }}</v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Krzystof Stępniak",
          role: "Back-end Developer",
          description: "Krzych",
          avatar: "/avatar-krzysztof.png",
          show: false
        },
        {
          name: "Sebastian Ufnal",
          role: "Android Developer",
          description: "Seba",
          avatar: "/avatar-sebastian.png",
          show: false
        },
        {
          name: "Mikołaj Celka",
          role: "Android & Front-end Developer",
          description: "Miki",
          avatar: "/avatar-mikolaj.png",
          show: false
        },
        {
          name: "Artur Białoskórski",
          role: "Front-end Developer",
          description: "Arturo",
          avatar: "/avatar-artur.png",
          show: false
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-size: 36px;
}
</style>
