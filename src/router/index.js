import VueRouter from "vue-router";
import Vue from "vue";

import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import UserLogin from "../components/UserLogin.vue";
import UserLogout from "../components/UserLogout.vue";
import SignUpOwner from "../components/SignUpOwner.vue";

import BasicInfo from '../components/dashboard/BasicInfo.vue';
import AuthInfo from '../components/dashboard/AuthInfo.vue';
import BillingInfo from '../components/dashboard/BillingInfo.vue';
import UserSettings from '../components/dashboard/UserSettings.vue';

Vue.use(VueRouter);

const routes = [{
    path: "",
    component: Home,
    exact: true,
    name: "home",
  },
  {
    path: "/login",
    component: UserLogin,
    exact: true,
    name: "userLogin",
    prop: true,
  },
  {
    path: "/logout",
    component: UserLogout,
    exact: true,
    name: "userLogout",
  },
  {
    path: "/user/profile",
    component: Dashboard,
    name: "userDashboard",
    children: [{
        path: 'basic',
        component: BasicInfo
      },
      {
        path: 'auth',
        component: AuthInfo
      },
      {
        path: 'billing',
        component: BillingInfo
      },
      {
        path: 'settings',
        component: UserSettings
      }
    ]
  },
  {
    path: "/signup/owner",
    component: SignUpOwner,
    exact: true,
    name: "signUpOwner",
  },

  // {
  //   path: "*",
  //   redirect: "/",
  // },
];

export default new VueRouter({
  routes,
  mode: "history",
});