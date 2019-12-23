import Vue from "vue";
import Vuelidate from "vuelidate"; // Form-validation
import App from "./App.vue";

import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store
}).$mount("#app");
