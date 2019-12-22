<template>
  <div>
    <h1>Profile</h1>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <v-list>
          <v-list-item
            v-for="item in navItems"
            :key="item.text"
            :to="item.link"
            link
            class="no-under"
          >
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>{{item.text}}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="8" class="ml-2">
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import profileNavbarMixin from "../structure/user/profileNavbar";

export default {
  mixins: [profileNavbarMixin],
  created() {
    console.log(this.$data);
  }
};
</script>

<style></style>
