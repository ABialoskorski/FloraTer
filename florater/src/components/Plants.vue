<template>
  <div class="plants">
    <h1 class="grey--text">Baza danych roślin</h1>
    <div class="plants__list">
      <h2>Lista roślin</h2>
      <br>
      <ul>
        <li v-for="plant in plants" :key="plant.id">
          <p>ID: {{ plant.id }}</p>
          <p>Nazwa łacińska: {{ plant.name_latin }}</p>
          <p>Nazwa polska: {{ plant.name_polish }}</p>
          <p>Rodzina: {{ plant.family }}</p>
          <p>Opis: {{ plant.description }}</p>
          <br>
        </li>
      </ul>
    </div>
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
h2 {
  margin-top: 40px;
}
ul {
  list-style: none;
}
</style>
