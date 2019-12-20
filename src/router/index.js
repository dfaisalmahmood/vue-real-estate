import VueRouter from "vue-router";
import Vue from "vue";

import Home from "../components/Home.vue";
import UserLogin from "../components/UserLogin.vue";
import UserLogout from "../components/UserLogout.vue";

Vue.use(VueRouter);

const routes = [
  { path: "", component: Home, exact: true },
  { path: "/login", component: UserLogin, exact: true },
  { path: "/logout", component: UserLogout, exact: true },
  { path: "*", redirect: "/" }
];

export default new VueRouter({
  routes,
  mode: "history"
});
