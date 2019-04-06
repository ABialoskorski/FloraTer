<template>
  <form>
    <v-text-field
      label="E-mail"
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
      v-model="password"
      type="password"
      :error-messages="passwordErrors"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-btn @click="login">Zaloguj się</v-btn>
    <v-btn @click="clear">Wyczyść</v-btn>
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
      email: "",
      password: ""
    };
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.minLength &&
        errors.push("Password must be at least 1 character long");
      !this.$v.email.maxLength &&
        errors.push("E-mail must be at most 30 characters long");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 1 character long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    }
  },

  methods: {
    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
    }
  }
};
</script>


<style scoped lang="scss">
</style>
