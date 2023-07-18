<template>
  <vft-input-number v-model="num1" size="large" />
  <vft-input-number v-model="num2" class="mx-4" />
  <vft-input-number v-model="num3" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num1 = ref(1);
const num2 = ref(2);
const num3 = ref(3);
</script>
