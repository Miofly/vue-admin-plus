<template>
  <vft-radio-group v-model="radio">
    <vft-radio :value="3">Option A</vft-radio>
    <vft-radio :value="6">Option B</vft-radio>
    <vft-radio :value="9">Option C</vft-radio>
  </vft-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref(3);
</script>
