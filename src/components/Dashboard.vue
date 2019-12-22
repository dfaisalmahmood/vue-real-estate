<template>
  <div>
    <h1>Dashboard</h1>
    <v-row>
      <v-col cols="12" md="4" lg="2">
        <v-list>
          <v-list-item
            v-for="item in navItems"
            :key="item.text"
            :to="item.link"
            link
            class="no-under pl-0"
          >
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>{{item.text}}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="8">
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import dashboardNavbarMixin from "../structure/user/dashboardNavbar";

export default {
  mixins: [dashboardNavbarMixin],
  created() {
    console.log(this.$data);
  }
};
</script>

<style></style>
