<template>
  <button class="btn btn-primary" @click="logout">Logout</button>
</template>

<script>
import axios from "axios";
export default {
  props: {
    userToken: String
  },
  methods: {
    async logout() {
      try {
        await axios.post("http://localhost:8080/auth/token/logout/", {
          headers: {
            AUTHORIZATION: `TOKEN ${this.userToken}`
          }
        });
        this.$emit("userLogout");
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>
<style></style>
