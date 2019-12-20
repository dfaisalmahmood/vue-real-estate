<template>
  <div>
    <h1>Home</h1>
    <router-link to="/login">Login</router-link>
    <br />
    <router-link to="/logout">Logout</router-link>
  </div>
</template>

<script>
import loginRequiredMixin from "../mixins/loginRequiredMixin";

export default {
  mixins: [loginRequiredMixin]
};
</script>

<style></style>
