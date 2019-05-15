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
                color="green"
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

            <div class="form__calendar">
              <v-layout row wrap>
                <v-flex xs12 sm6 md4>
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    lazy
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Wybierz datę z kalendarza"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker locale="pl-pl" v-model="date" scrollable>
                      <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
              </v-layout>
            </div>

            <v-flex xs12 sm6 md3>
              <v-text-field
                class="form__description"
                label="Informacje dodatkowe"
                background-color="grey"
                outline
              ></v-text-field>
            </v-flex>
          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions class="form__add">
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
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
};
</script>

<style scoped lang="scss">
.form__calendar {
  margin-top: 20px;
}
.form__description {
  margin-top: 80px;
  width: 500px;
}
</style>
