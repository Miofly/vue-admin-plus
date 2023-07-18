<template>
  <div class="demo-input-suffix">
    <vft-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using attributes</span
      >
      <vft-input
        v-model="input1"
        class="w-50 m-2"
        placeholder="Pick a date"
        :suffix-icon="Calendar"
      />
      <vft-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
    </vft-row>
  </div>
  <div class="demo-input-suffix">
    <vft-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using slots</span
      >
      <vft-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
        <template #suffix>
          <vft-icon class="vft-input__icon" icon="ico-ep:calendar"/>
        </template>
      </vft-input>
      <vft-input v-model="input4" class="w-50 m-2" placeholder="Type something">
        <template #prefix>
          <vft-icon class="vft-input__icon" icon="ico-ep:search"/>
        </template>
      </vft-input>
    </vft-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');
</script>
