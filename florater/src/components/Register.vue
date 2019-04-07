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
    <v-btn round color="primary" type="submit" @click="register">Zarejestruj się</v-btn>
    <v-btn round color="grey" class="white--text" @click="clear">Wyczyść</v-btn>
  </form>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

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
        errors.push("first_name must be at least 1 character long");
      !this.$v.first_name.maxLength &&
        errors.push("first_name must be at most 20 characters long");
      !this.$v.first_name.required && errors.push("first_name is required");
      return errors;
    },
    last_nameErrors() {
      const errors = [];
      if (!this.$v.last_name.$dirty) return errors;
      !this.$v.last_name.minLength &&
        errors.push("last_name must be at least 1 character long");
      !this.$v.last_name.maxLength &&
        errors.push("last_name must be at most 30 characters long");
      !this.$v.last_name.required && errors.push("last_name is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.minLength &&
        errors.push("E-mail must be at least 1 character long");
      !this.$v.email.maxLength &&
        errors.push("E-mail must be at most 30 characters long");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLength &&
        errors.push("Password must be at least 1 character long");
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
    }
  }
};
</script>

<style scoped lang="scss">
</style>
