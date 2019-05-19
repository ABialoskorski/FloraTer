<template>
  <form method="POST" action="http://kfsz.pythonanywhere.com/api/users/register/">
    <v-text-field
      label="Imię"
      name="first_name"
      v-model="first_name"
      :error-messages="first_nameErrors"
      :counter="20"
      autocomplete="on"
      required
      @input="$v.first_name.$touch()"
      @blur="$v.first_name.$touch()"
    ></v-text-field>
    <v-text-field
      label="Nazwisko"
      name="last_name"
      v-model="last_name"
      :error-messages="last_nameErrors"
      :counter="30"
      autocomplete="on"
      required
      @input="$v.last_name.$touch()"
      @blur="$v.last_name.$touch()"
    ></v-text-field>
    <v-text-field
      label="E-mail"
      name="email"
      v-model="email"
      :error-messages="emailErrors"
      :counter="30"
      autocomplete="off"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      label="Hasło"
      name="password"
      v-model="password"
      type="password"
      autocomplete="off"
      :error-messages="passwordErrors"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-btn round color="primary" @click="send">Zarejestruj się</v-btn>
    <v-btn round color="grey" class="white--text" @click="clear">Wyczyść</v-btn>
  </form>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
const link = "http://127.0.0.1:8000/";

export default {
  mixins: [validationMixin],
  validations: {
    first_name: { required, minLength: minLength(1), maxLength: maxLength(20) },
    last_name: { required, minLength: minLength(1), maxLength: maxLength(30) },
    email: { required, minLength: minLength(1), maxLength: maxLength(30) },
    password: { required, minLength: minLength(1) }
  },
  data() {
    return {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password
    };
  },

  computed: {
    first_nameErrors() {
      const errors = [];
      if (!this.$v.first_name.$dirty) return errors;
      !this.$v.first_name.minLength &&
        errors.push("Imię musi posiadać co najmniej 1 znak");
      !this.$v.first_name.maxLength &&
        errors.push("Imię nie może być większe niż 20 znaków");
      !this.$v.first_name.required && errors.push("Imię jest wymagane");
      return errors;
    },
    last_nameErrors() {
      const errors = [];
      if (!this.$v.last_name.$dirty) return errors;
      !this.$v.last_name.minLength &&
        errors.push("Nazwisko musi posiadać co najmniej 1 znak");
      !this.$v.last_name.maxLength &&
        errors.push("Nazwisko nie może być większe niż 30 znaków");
      !this.$v.last_name.required && errors.push("Nazwisko jest wymagane");
      return errors;
    },
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
      !this.$v.password.required && errors.push("Hasło jest wymagane");
      !this.$v.password.minLength &&
        errors.push("Hasło musi posiadać co najmniej 1 znak");
      return errors;
    }
  },

  methods: {
    clear() {
      this.$v.$reset();
      this.first_name = "";
      this.last_name = "";
      this.email = "";
      this.password = "";
    },

    send() {
      const axios = require("axios");

      const Register = () => {
        try {
          return axios.post(link + "api/users/register/", {
            first_name: this.first_name,
            last_name: this.last_name,
            password: this.password,
            email: this.email
          });
        } catch (error) {
          alert(error);
        }
      };

      const showRegistrationResponse = async () => {
        const data = Register()
          .then(response => {
            alert("Zostałeś zarejestrowany pomyślnie.");
            this.$router.push("/");
          })
          .catch(error => {
            alert(error);
          });
      };
      showRegistrationResponse();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
