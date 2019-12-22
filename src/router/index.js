import VueRouter from "vue-router";
import Vue from "vue";

import Home from "../components/Home.vue";
import UserProfile from "../components/UserProfile.vue";
import UserLogin from "../components/UserLogin.vue";
import UserLogout from "../components/UserLogout.vue";
import SignUpOwner from "../components/SignUpOwner.vue";

import BasicInfo from '../components/profile/BasicInfo.vue';
import AuthInfo from '../components/profile/AuthInfo.vue';
import BillingInfo from '../components/profile/BillingInfo.vue';
import UserSettings from '../components/profile/UserSettings.vue';

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
    component: UserProfile,
    name: "userProfile",
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