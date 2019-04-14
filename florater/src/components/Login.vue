<template>
  <form>
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
    }
  },

  log() {
    const axios = require("axios");
    let JWTToken = "xxyyzz";

    const Login = () => {
      axios
        .get("http://127.0.0.1:8000/", {
          headers: {
            Authorization: `JWT ${JWTToken}`,
            email: this.email,
            password: this.password
          }
        })
        .then(res => {
          this.profile = res.data;
          alert("profile is:", res.data);
        })
        .catch(error => {
          alert(error);
        });
    };
  }
};
</script>


<style scoped lang="scss">
</style>
