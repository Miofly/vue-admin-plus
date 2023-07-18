<template>
  <div class="demo-color-sizes">
    <vft-color-picker v-model="color" size="large" />
    <vft-color-picker v-model="color" />
    <vft-color-picker v-model="color" size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const color = ref('409EFF');
</script>

<style>
.demo-color-sizes .vft-color-picker:not(:last-child) {
  margin-right: 16px;
}
</style>
