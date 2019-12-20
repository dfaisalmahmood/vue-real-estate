<template>
  <div>
    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" v-model="email" />
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <button class="btn btn-primary" @click="login">Submit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  },
  methods: {
    async login() {
      //   let response = await axios.post(
      //     "http://localhost:8080/api/auth/token/login",
      //     {
      //       params: {
      //         email: this.email,
      //         password: this.password
      //       }
      //     }
      //   );
      try {
        let response = await axios({
          method: "post",
          url: "http://localhost:8080/auth/token/login/",
          data: {
            email: this.email,
            password: this.password
          }
        });
        this.$emit("userLogin", response.data.auth_token);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style></style>
