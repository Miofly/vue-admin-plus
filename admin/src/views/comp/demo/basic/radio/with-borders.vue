<template>
  <div>
    <vft-radio-group v-model="radio1">
      <vft-radio value="1" size="large" border>Option A</vft-radio>
      <vft-radio value="2" size="large" border>Option B</vft-radio>
    </vft-radio-group>
  </div>
  <div style="margin-top: 20px">
    <vft-radio-group v-model="radio2">
      <vft-radio value="1" border>Option A</vft-radio>
      <vft-radio value="2" border>Option B</vft-radio>
    </vft-radio-group>
  </div>
  <div style="margin-top: 20px">
    <vft-radio-group v-model="radio3" size="small">
      <vft-radio value="1" border>Option A</vft-radio>
      <vft-radio value="2" border disabled>Option B</vft-radio>
    </vft-radio-group>
  </div>
  <div style="margin-top: 20px">
    <vft-radio-group v-model="radio4" size="small" disabled>
      <vft-radio value="1" border>Option A</vft-radio>
      <vft-radio value="2" border>Option B</vft-radio>
    </vft-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
const radio4 = ref('1');
</script>
