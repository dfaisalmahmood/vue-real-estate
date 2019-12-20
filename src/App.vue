<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Real Estate</h1>
        <!-- <component
          :userToken="userToken"
          :is="mode"
          @userLogin="setUserToken"
          @userLogout="resetUserToken"
        ></component> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  //   appUserLogin: UserLogin,
  //   appUserLogout: UserLogout
  // },
  // data() {
  //   return {
  //     // mode: "appUserLogin",
  //     userToken: ""
  //   };
  // },
  // computed: {
  //   mode() {
  //     if (this.userToken === "") {
  //       return "appUserLogin";
  //     } else {
  //       return "appUserLogout";
  //     }
  //   }
  // },
  // methods: {
  //   setUserToken(token) {
  //     this.userToken = token;
  //   },
  //   resetUserToken() {
  //     this.userToken = "";
  //   }
  // }
};
</script>

<style></style>
