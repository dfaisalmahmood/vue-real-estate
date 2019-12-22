<template>
  <v-form>
    <v-row>
      <!-- <label>Email</label>
      <input type="text" class="form-control" v-model="email" />-->
      <v-col cols="12" sm="8" offset-sm="2" md="4" offset-md="4">
        <v-text-field
          prepend-icon="mdi-account"
          label="Email"
          ref="email"
          @keyup.enter="setFocusToPassword"
          v-model="form.email"
          required
        ></v-text-field>
      </v-col>
      <!-- <label>Password</label>
          <input type="password" class="form-control" v-model="password" /> -->
      <v-col cols="12" sm="8" offset-sm="2" md="4" offset-md="4">
        <v-text-field
          prepend-icon="mdi-lock"
          label="Password"
          v-model="form.password"
          ref="password"
          @keyup.enter="login"
          required
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          @click:append="showPass = !showPass"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2" md="4" offset-md="4">
        <v-btn rounded large block color="primary" @click="login">Login</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  import { mapActions } from "vuex";
  import store from "../store";

  export default {
    data() {
      return {
        form: {
          email: "",
          password: "",
        },
        showPass: false,
      };
    },
    mounted() {
      this.$refs.email.focus();
    },
    methods: {
      ...mapActions(["userLogin"]),
      login() {
        const next = this.$route.query.next ? this.$route.query.next : "";
        this.userLogin({
          email: this.form.email,
          password: this.form.password,
          next,
        });
      },
      setFocusToPassword() {
        this.$refs.password.focus();
      },
    },
    beforeRouteEnter(to, from, next) {
      if (store.getters.userToken === "") {
        next();
      } else {
        next("/");
      }
    },
  };
</script>

<style></style>
