<template>
  <v-app>
    <v-content>
      <!-- <HelloWorld /> -->
      <Navbar></Navbar>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

<style>
.no-under:hover {
  text-decoration: none;
}
</style>
