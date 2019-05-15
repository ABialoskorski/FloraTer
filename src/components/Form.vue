<template>
  <div class="form">
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              clearable
              ref="name"
              v-model="latin_name"
              label="Nazwa łacińska"
              placeholder="Alcea rosea"
              required
            ></v-text-field>
            <v-text-field
              clearable
              ref="name"
              v-model="polish_name"
              label="Nazwa polska"
              placeholder="Malwa różowa"
              required
            ></v-text-field>
            <v-checkbox v-model="herbarium" label="Czy roślina została zebrana?"></v-checkbox>
            <v-flex xs12 sm6>
              <v-slider
                v-model="resources"
                color="orange"
                label="Zasoby"
                min="1"
                max="3"
                thumb-label
              ></v-slider>
            </v-flex>
            <v-text-field
              ref="geo"
              v-model="geo"
              label="Współrzędne geograficzne"
              required
              placeholder="52º 28' 0.337 N 16º 55' 36.991 E"
            ></v-text-field>
            <v-text-field ref="date" v-model="date" label="Data" required placeholder="24.04.2019"></v-text-field>
            <v-flex xs12 sm6 md3>
              <v-text-field label="Informacje dodatkowe" background-color="grey" outline></v-text-field>
            </v-flex>
          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submit">Dodaj</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
</style>
