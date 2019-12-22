<template>
  <div>
    <h2 class="display-1 mt-0">Basic Information</h2>
    <!-- <v-form>
      <div
        v-for="(item) in infoItems"
        :key="item.text"
        :ref="item.ref"
        @click="item.isEdit = true"
        style="cursor:pointer;"
      >
        <transition
          mode="out-in"
          enter-active-class="animated fadeInDown faster"
          appear
          type="animation"
        >
          <div class="mt-7" v-if="!item.isEdit">
            <h5>{{item.text}}</h5>
            <h4>{{item.value}}</h4>
          </div>
          <v-text-field autofocus :label="item.text" v-else :value="item.value"></v-text-field>
        </transition>
      </div>
    </v-form>-->
    <InfoList :infoItems="infoItems"></InfoList>
  </div>
</template>

<script>
import basicInfoMixin from "../../structure/user/basicInfo";
import InfoList from "../base/InfoList.vue";

export default {
  components: {
    InfoList
  },
  mixins: [basicInfoMixin]
};
</script>

<style>
</style>