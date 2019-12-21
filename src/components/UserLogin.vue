<template>
  <div>
    <div class="form-group">
      <!-- <label>Email</label>
      <input type="text" class="form-control" v-model="email" />-->
      <v-autocomplete label="Email" :items="items" v-model="email"></v-autocomplete>
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <button class="btn btn-primary" @click="login">Submit</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "../store";

export default {
  data() {
    return {
      email: "",
      password: "",
      items: ["me", "you"]
    };
  },

  methods: {
    ...mapActions(["userLogin"]),
    login() {
      const next = this.$route.query.next ? this.$route.query.next : "";
      this.userLogin({ email: this.email, password: this.password, next });
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
