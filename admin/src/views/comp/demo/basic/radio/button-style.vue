<template>
  <div>
    <vft-radio-group v-model="radio1" size="large">
      <vft-radio-button value="New York" />
      <vft-radio-button value="Washington" />
      <vft-radio-button value="Los Angeles" />
      <vft-radio-button value="Chicago" />
    </vft-radio-group>
  </div>
  <div style="margin-top: 20px">
    <vft-radio-group v-model="radio2">
      <vft-radio-button value="New York" />
      <vft-radio-button value="Washington" />
      <vft-radio-button value="Los Angeles" />
      <vft-radio-button value="Chicago" />
    </vft-radio-group>
  </div>
  <div style="margin-top: 20px">
    <vft-radio-group v-model="radio3" size="small">
      <vft-radio-button value="New York" />
      <vft-radio-button value="Washington" disabled />
      <vft-radio-button value="Los Angeles" />
      <vft-radio-button value="Chicago" />
    </vft-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('New York');
const radio2 = ref('New York');
const radio3 = ref('New York');
</script>
