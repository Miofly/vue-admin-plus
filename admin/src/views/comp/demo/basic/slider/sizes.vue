<template>
  <vft-slider v-model="value" show-input size="large" />
  <vft-slider v-model="value" show-input />
  <vft-slider v-model="value" show-input size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(0);
</script>

<style scoped>
.vft-slider {
  margin-top: 20px;
}

.vft-slider:first-child {
  margin-top: 0;
}
</style>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .vft-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
