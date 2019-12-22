<template>
  <div>
    <h2>Billing Information</h2>
    <InfoList :infoItems="infoItems"></InfoList>
  </div>
</template>

<script>
import billingInfoMixin from "../../structure/user/billingInfo";
import InfoList from "../base/InfoList.vue";

export default {
  components: {
    InfoList
  },
  mixins: [billingInfoMixin]
};
</script>

<style>
</style>