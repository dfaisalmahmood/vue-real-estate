<template>
  <button class="btn btn-primary" @click="logout">Logout</button>
</template>

<script>
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

  }
};
</script>
<style></style>
