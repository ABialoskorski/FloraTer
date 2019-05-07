<template>
  <div class="form">
    <v-card>
      <div class="form__view" v-for="object in objects" :key="object.name">
        <v-card flat class="form__card">
          <v-card-text>
            <span class="form__object">Stanowisko {{object.name}}</span>
          </v-card-text>
          <v-card-text>
            <p class="form__object__flower">{{object.flower}}</p>
            <p class="form__object__flower">{{object.garden}}</p>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objects: [
        { name: " Poznań", flower: "róża", garden: "paprotka" },
        { name: " Michałkowo", flower: "róża", garden: "paprotka" },
        { name: " Naramowice", flower: "róża", garden: "paprotka" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.form__card {
  text-align: center;
}
.form__view {
  display: flex;
  flex-flow: column;
}
.form__object {
  font-size: 28px;
  text-align: left;
  &__title {
    font-size: 18px;
  }
  &__flower {
    font-size: 16px;
    color: coral;
  }
}
</style>
