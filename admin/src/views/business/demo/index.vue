<script setup lang="ts">
import { useTabs } from '@vft/store';

const {
  refreshPage,
  closeAll,
  setTitle
} = useTabs();
</script>

<template>
  <vft-button @click="refreshPage()">refreshPage</vft-button>
  <vft-button @click="closeAll()">closeAll</vft-button>
  <vft-button @click="setTitle('自定义title')">setTitle</vft-button>
</template>

<style scoped lang="scss">

</style>
