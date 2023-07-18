<template>
  <div class="mb-2 flex items-center text-sm">
    <vft-radio-group v-model="radio1" class="ml-4"
      :options="[
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ]"/>
  </div>
  <div class="my-2 flex items-center text-sm">
    <vft-radio-group v-model="radio2" class="ml-4">
      <vft-radio value="1">Option 1</vft-radio>
      <vft-radio value="2">Option 2</vft-radio>
    </vft-radio-group>
  </div>
  <div class="my-4 flex items-center text-sm">
    <vft-radio-group v-model="radio3" class="ml-4">
      <vft-radio value="1" size="small">Option 1</vft-radio>
      <vft-radio value="2" size="small">Option 2</vft-radio>
    </vft-radio-group>
  </div>
  <div class="mb-2 flex items-center text-sm">
    <vft-radio-group v-model="radio3" disabled class="ml-4">
      <vft-radio value="1" size="small">Option 1</vft-radio>
      <vft-radio value="2" size="small">Option 2</vft-radio>
    </vft-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
</script>
