<template>
  <div class="plants">
    <h1 class="grey--text">Baza danych roślin</h1>
    <div>
      <h2>Lista roślin</h2>
      <ul>
        <li
          v-for="plant in plants"
          :key="plant.id"
        >{{ plant.id }}, {{ plant.name_latin }} {{ plant.name_polish }}, {{ plant.family }}, {{ plant.description }}</li>
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
h1 {
  font-family: "Chakra Petch", sans-serif;
  text-align: center;
  font-size: 36px;
  margin-top: 50px;
}
h2 {
  text-align: center;
}
li {
  text-align: center;
  list-style: none;
}
</style>
