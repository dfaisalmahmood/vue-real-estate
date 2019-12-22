<template>
  <div>
    <v-navigation-drawer v-if="userToken !== ''" v-model="drawer" clipped app>
      <v-list shaped>
        <v-list-item
          v-for="item in navItems"
          :key="item.text"
          link
          :to="item.link"
          class="no-under"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.text }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark clipped-left>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon v-if="userToken !== ''" @click.stop="drawer = !drawer" />
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />-->

        <!-- <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
        />-->

        <h3 class="ml-2">Real Estate</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="userToken === ''" to="/login" text class="mr-2 no-under">Login</v-btn>
      <v-btn v-if="userToken === ''" to="/signup/owner" text class="mr-2 no-under">Sign Up</v-btn>
      <v-btn v-else @click="logout" text class="mr-2 no-under">Logout</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import navbarMixin from "../structure/app/appNavbar";

export default {
  mixins: [navbarMixin],
  created() {
    console.log(this.$data);
  },
  data() {
    return {
      drawer: null
    };
  },
  computed: mapGetters(["userToken"]),
  methods: {
    ...mapActions(["userLogout"]),
    logout() {
      this.userLogout();
    }
  }
};
</script>
