<template>
  <div class="slider-demo-block">
    <vft-slider v-model="value" show-input />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(0);
</script>
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
