<template>
  <button class="btn btn-primary" @click="logout">Logout</button>
</template>

<script>
// import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import loginRequiredMixin from "../mixins/loginRequiredMixin";

export default {
  computed: mapGetters(["userToken"]),
  mixins: [loginRequiredMixin],
  methods: {
    ...mapActions(["userLogout"]),
    logout() {
      this.userLogout();
    }
    // async logout() {
    //   try {
    //     await axios.post("http://localhost:8080/auth/token/logout/", {
    //       headers: {
    //         AUTHORIZATION: `TOKEN ${this.userToken}`
    //       }
    //     });
    //     this.$emit("userLogout");
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
  }
};
</script>
<style></style>
