<template>
  <vft-select
    v-model="value"
    :options="options"
    placeholder="Please select"
    value-key="value.name"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const value = ref();
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: {
    name: `Option ${idx + 1}`,
    test: `test ${idx % 3}`
  },
  label: `${initials[idx % 10]}${idx}`
}));
</script>

<style scoped>
.example-showcase .vft-select {
  margin-right: 20px;
}
</style>
