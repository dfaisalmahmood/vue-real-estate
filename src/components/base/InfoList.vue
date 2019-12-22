<template>
  <v-form class="ml-1">
    <div
      v-for="(item) in infoItems"
      :key="item.text"
      :ref="item.ref"
      @click="item.isEdit = true"
      style="cursor:pointer;"
    >
      <div class="text-field" v-if="item.fieldType == 'text' || item.fieldType == 'password'">
        <transition
          mode="out-in"
          enter-active-class="animated fadeInDown faster"
          appear
          type="animation"
        >
          <div class="mt-7" v-if="!item.isEdit">
            <h5>{{item.text}}</h5>
            <h4>{{item.fieldType !== 'password' ? item.value: item.value.replace(/./g,'*')}}</h4>
          </div>
          <v-text-field autofocus :label="item.text" v-else :value="item.value"></v-text-field>
        </transition>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  props: {
    infoItems: {
      type: Array[Object],
      required: true
    }
  }
};
</script>

<style>
</style>