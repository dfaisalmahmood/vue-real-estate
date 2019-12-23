<template>
  <form>
    <v-row>
      <!-- <label>Email</label>
      <input type="text" class="form-control" v-model="email" />-->
      <v-col cols="12" sm="8" offset-sm="2" md="4" offset-md="4">
        <v-text-field
          prepend-icon="mdi-account"
          label="Email"
          ref="email"
          @keyup.enter="setFocusToPassword"
          v-model="email"
          required
          :error-messages="emailErrors"
          @blur="$v.email.$touch()"
        ></v-text-field>
      </v-col>
      <!-- <label>Password</label>
      <input type="password" class="form-control" v-model="password" />-->
      <v-col cols="12" sm="8" offset-sm="2" md="4" offset-md="4">
        <v-text-field
          prepend-icon="mdi-lock"
          label="Password"
          v-model="password"
          ref="password"
          @keyup.enter="login"
          required
          :error-messages="passwordErrors"
          hint="At least 8 characters"
          counter
          @blur="$v.password.$touch()"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          @click:append="showPass = !showPass"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="!!loginError">
      <v-col cols="12" sm="8" offset-sm="2" md="4" offset-md="4">
        <h3>{{ loginError }}</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2" md="4" offset-md="4">
        <v-btn rounded large block color="primary" @click="submit">Login</v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
// import { required, minLength, email } from "vuelidate/lib/validators";
import store from "../store";
import api from "../api";
import { vuelidateBasicMixin } from "../mixins/validationsMixin";
// import { emailRules, passwordRules } from "../mixins/validationsMixin";

export default {
  mixins: [validationMixin, vuelidateBasicMixin],
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(8),
      // notBothAlphanumeric: val => /^\d+\w+|\w+\d+$/.test(val)
      notBothAlphanumeric: val =>
        new RegExp("^\\d+[a-zA-Z]+|[a-zA-Z]+\\d+$").test(val)
    }
  },
  props: {
    email: {
      type: String,
      default: ""
    },
    password: {
      type: String,
      default: "'"
    }
  },

  data() {
    return {
      // email: "",
      // password: "",
      showPass: false,
      loginError: ""
    };
  },
  // computed: {
  //   // ...mapGetters(["loginError"]),
  //   emailErrors() {
  //     const errors = [];
  //     if (!this.$v.email.$dirty) return errors;
  //     !this.$v.email.email && errors.push("Must be valid email");
  //     !this.$v.email.required && errors.push("Email is required");
  //     return errors;
  //   },
  //   passwordErrors() {
  //     const errors = [];
  //     if (!this.$v.password.$dirty) return errors;
  //     !this.$v.password.minLength &&
  //       errors.push("Password must be at least 8 characters long");
  //     !this.$v.password.required && errors.push("Password is required");
  //     return errors;
  //   }
  // },
  created() {
    this.resetLoginError();
  },
  mounted() {
    this.$refs.email.focus();
  },
  methods: {
    ...mapActions(["userLogin", "resetLoginError"]),
    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("invalid");
        return;
      }
      const next = this.$route.query.next ? this.$route.query.next : "";
      try {
        console.log(next);
        const response = await api.post("/auth/token/login/", {
          email: this.email,
          password: this.password
        });
        api.defaults.headers.common[
          "Authorization"
        ] = `Token ${response.data.auth_token}`;
        this.userLogin(response.data.auth_token);
        this.$router.push(`/${next}`); // next: String
      } catch (err) {
        console.error(err);
        this.loginError = "Wrong credentials";
      }
    },
    setFocusToPassword() {
      this.$refs.password.focus();
    }
  },
  beforeRouteEnter(to, from, next) {
    if (store.getters.userToken === "") {
      next();
    } else {
      next("/");
    }
  }
};
</script>

<style></style>
