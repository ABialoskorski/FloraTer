<template>
  <div>
    <v-container class="my-5">
      <v-card flat v-for="plant in plants" :key="plant.id">
        <v-layout row wrap class="plants">
          <v-flex xs12 md6>
            <div class="grey--text">Nazwa łacińska</div>
            <div>{{ plant.name_latin }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="grey--text">Nazwa polska</div>
            <div>{{ plant.name_polish }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="grey--text">Rodzina</div>
            <div>{{ plant.family }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="grey--text">Opis</div>
            <div>{{ plant.description }}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
const link = "http://127.0.0.1:8000/";

export default {
  data() {
    return {
      plants: []
    };
  },
  methods: {
    get() {
      const axios = require("axios");

      axios
        .get("http://127.0.0.1:8000/api/plants/")
        .then(response => {
          this.plants = response.data;
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  created() {
    this.get();
  }
};
</script>
<style scoped lang="scss">
.plants__list {
  text-align: center;
}
h1 {
  text-align: center;
  font-size: 36px;
  margin-top: 50px;
}

.plants {
  border-left: 4px solid #3cd1c2;
  font-size: 16px;
  margin-top: 20px;
}
</style>
