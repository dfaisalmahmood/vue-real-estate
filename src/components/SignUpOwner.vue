<template>
  <v-row justify="center" align="start">
    <v-col xs="12" sm="8" sm-offset="2" md="4" md-offset="4">
      <v-form>
        <v-text-field label="Username" ref="username" @keyup.enter="$refs.email.focus()"></v-text-field>
        <v-text-field label="Email" ref="email" @keyup.enter="$refs.password.focus()"></v-text-field>
        <v-text-field
          label="Password"
          ref="password"
          :type="showPass ? 'text' : 'password'"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPass = !showPass"
          @keyup.enter="$refs.rePassword.focus()"
        ></v-text-field>
        <v-text-field
          label="Retype Password"
          ref="rePassword"
          :type="showRePass ? 'text' : 'password'"
          :append-icon="showRePass ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showRePass = !showRePass"
          @keyup.enter="$refs.fname.focus()"
        ></v-text-field>
        <br />
        <v-text-field label="First Name" ref="fname" @keyup.enter="$refs.lname.focus()"></v-text-field>
        <v-text-field label="Last Name" ref="lname" @keyup.enter="$refs.phone.focus()"></v-text-field>
        <v-text-field label="Phone" ref="phone" @keyup.enter="$refs.submit.focus()"></v-text-field>
        <br />
        <v-btn rounded block large color="primary" ref="submit">Sign up</v-btn>
      </v-form>
    </v-col>
    <v-col xs="12" sm="8" sm-offset="2" md="4" md-offset="4">
      <div>
        <!-- <h2>Never miss out on the right opportunity</h2> -->
        <!-- <Image src="../../assets/real-estate-2.jpeg"></Image> -->
        <v-card :elevation="2" style="overflow: hidden;">
          <router-link to="/about" v-show="imageLoaded" tag="div" class="about-link-image">
            <transition name="fade-slide" type="animation">
              <img :src="image" @load="imageLoaded = true" v-show="imageLoaded" />
            </transition>
            <div class="overlay">
              <h2 class="display-1">Never miss out on the right opportunity</h2>
              <p class="subtitle-1">Find out why you should sign up ></p>
            </div>
          </router-link>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
// import Image from "./base/Image.vue";
import image from "../assets/real-estate-2.jpeg";

export default {
  // components: {
  //   Image
  // },
  data() {
    return {
      image: image,
      imageLoaded: false,
      showPass: false,
      showRePass: false
    };
  },
  mounted() {
    this.$refs.username.focus();
  }
};
</script>

<style scoped>
.about-link-image {
  cursor: pointer;
}

.overlay h2 {
  color: #ddd;
}

.overlay p {
  color: #ccc;
}

.overlay {
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  height: auto%;
  width: 90%;
  text-align: center;
}

img {
  width: auto;
  height: 600px;
}

.fade-slide-enter {
  opacity: 0;
}

.fade-slide-enter-active {
  transition: opacity 2s ease;
  animation: slide-left-in 2s ease-out forwards;
}

.fade-slide-leave-active {
  transition: opacity 0.5 ease;
  opacity: 0;
  animation: slide-left-out 0.5s ease-out forwards;
}

@keyframes slide-left-in {
  from {
    transform: translateX(-30px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes slide-left-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-30px);
  }
}
</style>
