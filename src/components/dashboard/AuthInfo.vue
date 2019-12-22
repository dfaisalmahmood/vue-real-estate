<template>
  <div>
    <h2>Authentication Information</h2>
    <InfoList :infoItems="infoItems"></InfoList>
  </div>
</template>

<script>
import authInfoMixin from "../../structure/user/authInfo";
import InfoList from "../base/InfoList.vue";

export default {
  components: { InfoList },
  mixins: [authInfoMixin]
};
</script>

<style>
</style>