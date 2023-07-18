<script lang="ts" setup>
const visible = ref(false);

const formData = reactive({
  name: '',
  age: '',
  state: 1
});
</script>

<template>
  <vft-dialog v-model="visible">
    <!--<vft-form>-->
    <!--  <vft-form-item></vft-form-item>-->
    <!--</vft-form>-->
  </vft-dialog>
</template>

<style lang="scss" scoped>

</style>
