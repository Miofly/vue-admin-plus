<template>
  <vft-checkbox v-model="checked1" disabled>Disabled</vft-checkbox>
  <vft-checkbox v-model="checked2">Not disabled</vft-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const checked1 = ref(false);
const checked2 = ref(true);
</script>
