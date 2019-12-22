<template>
  <transition name="fade-slide" type="animation">
    <img :src="require('../../assets/real-estate-2.jpeg')" @load="onLoaded" v-show="loaded" />
    <img />
  </transition>
</template>

<script>
export default {
  name: "Image",
  props: {
    src: String,
    style: {
      type: String,
      default: "width: 100%; height: 100%;"
    }
  },
  data() {
    return {
      loaded: false
    };
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
};
</script>

<style scoped>
.fade-slide-enter {
  opacity: 0;
}

.fade-slide-enter-active {
  transition: opacity 0.5s ease;
  animation: slide-left-in 0.5s ease-out forwards;
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