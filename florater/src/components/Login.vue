<template>
  <form action="#" @submit.prevent="log">
    <v-text-field
      label="E-mail"
      name="email"
      v-model="email"
      :error-messages="emailErrors"
      :counter="30"
      autocomplete="on"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      label="Hasło"
      name="password"
      v-model="password"
      type="password"
      :error-messages="passwordErrors"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-btn round color="primary" @click="log">Zaloguj się</v-btn>
    <v-btn round color="primary" @click="out">Wyloguj się</v-btn>
    <v-btn round color="grey" class="white--text" @click="clear">Wyczyść</v-btn>
  </form>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, minLength: minLength(1), maxLength: maxLength(30) },
    password: { required, minLength: minLength(1) }
  },
  data() {
    return {
      email: this.email,
      password: this.password
    };
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.minLength &&
        errors.push("E-mail musi posiadać co najmniej 1 znak");
      !this.$v.email.maxLength &&
        errors.push("E-mail nie może być większy niż 30 znaków");
      !this.$v.email.required && errors.push("E-mail jest wymagany");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Hasło musi posiadać co najmniej 1 znak");
      !this.$v.password.required && errors.push("Hasło jest wymagane");
      return errors;
    }
  },

  methods: {
    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
    },

    log() {
      const axios = require("axios");
      var token = "";
      var JSONParsed = "";
      var JSONdata = "";

      const Login = () => {
        try {
          return axios.post("http://127.0.0.1:8000/api/users/obtain-token/", {
            email: this.email,
            password: this.password
          });
        } catch (error) {
          alert(error);
        }
      };

      const showLoginResponse = async () => {
        const data = Login()
          .then(response => {
            console.log(JSON.stringify(response));
            token = response.data.token;
            console.log(token);
            JSONdata = JSON.stringify(response);
            JSONParsed = JSON.parse(JSONdata);
            this.$cookie.set("CookieToken", token, {
              expires: "1Y",
              domain: "localhost"
            });
            console.log("Cookie ", this.$cookie.get("CookieToken"));
            //this.$router.push("home");
          })
          .catch(error => {
            alert(error);
          });
      };
      showLoginResponse();
    },

    out() {
      console.log("sd");

      const axios = require("axios");
      var token = "";
      var JSONParsed = "";
      var JSONdata = "";
      var JWT_TOKEN = this.$cookie.get("CookieToken");
      let Config = {
        headers: {
          Authorization: "JWT " + JWT_TOKEN
        }
      };

      const Logout = () => {
        try {
          console.log(JWT_TOKEN);
          console.log(Config);

          return axios.get("http://127.0.0.1:8000/api/users/user-data", Config);
        } catch (error) {
          alert(error);
        }
      };

      const showLogoutResponse = async () => {
        const data = Logout()
          .then(response => {
            console.log(JSON.stringify(response));
            console.log(response.data.email);
            //this.$router.push("home");
          })
          .catch(error => {
            alert(error);
          });
      };
      showLogoutResponse();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
