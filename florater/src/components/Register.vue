<template>
  <form>
    <v-text-field
      label="Imię"
      v-model="name"
      :error-messages="nameErrors"
      :counter="20"
      autocomplete="on"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      label="Nazwisko"
      v-model="surname"
      :error-messages="surnameErrors"
      :counter="30"
      autocomplete="on"
      required
      @input="$v.surname.$touch()"
      @blur="$v.surname.$touch()"
    ></v-text-field>
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

    <v-btn @click="register">Zarejestruj się</v-btn>
    <v-btn @click="clear">Wyczyść</v-btn>
  </form>
</template>

<script>
import { required, maxLength, minLength } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'


export default {
mixins: [validationMixin],
validations: {
  name: { required, minLength: minLength(2), maxLength: maxLength(20) },
  surname: { required, minLength: minLength(2), maxLength: maxLength(30) },
  email: { required, minLength: minLength(2), maxLength: maxLength(30) },
  password: { required, minLength: minLength(4) }
},
data() {
  return {
    name: "",
    surname: "",
    email: "",
    password: ""
  };
},


computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('Name must be at least 2 characters long')
        !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long')
        !this.$v.name.required && errors.push('Name is required')
        return errors
      },
      surnameErrors () {
        const errors = []
        if (!this.$v.surname.$dirty) return errors
        !this.$v.surname.minLength && errors.push('Surname must be at least 2 characters long')
        !this.$v.surname.maxLength && errors.push('Surname must be at most 30 characters long')
        !this.$v.surname.required && errors.push('Surname is required')
        return errors
      },
        emailErrors () {
          const errors = []
          if (!this.$v.email.$dirty) return errors
          !this.$v.email.minLength && errors.push('E-mail must be at least 2 characters long')
          !this.$v.email.maxLength && errors.push('E-mail must be at most 30 characters long')
          !this.$v.email.required && errors.push('E-mail is required')
          return errors
        },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required')
        !this.$v.password.minLength && errors.push('Password must be at least 4 characters long')
        return errors
      }
    },

    methods: {
      clear () {
        this.$v.$reset()
        this.name = ""
        this.surname = ""
        this.email = ""
        this.password = ""
      }
    }
}
</script>

<style scoped lang="scss">
</style>
