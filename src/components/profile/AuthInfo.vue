<template>
  <div>
    <h2 class="display-1 mt-0">Authentication Information</h2>
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