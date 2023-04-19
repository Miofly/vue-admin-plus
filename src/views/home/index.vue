<script setup lang="ts">
import { useTabs } from '@vft/store';

const {
  refreshPage,
  closeAll,
  closeLeft,
  closeRight,
  closeOther,
  closeCurrent,
  // close,
  setTitle
} = useTabs();

function handleClose() {
  // close({ fullPath: '/style/scss/mixinInclude' } as RouteLocationNormalized);
}
</script>

<template>
  <vft-button @click="refreshPage()">refreshPage</vft-button>
  <vft-button @click="closeAll()">closeAll</vft-button>
  <vft-button @click="closeLeft()">closeLeft</vft-button>
  <vft-button @click="closeRight()">closeRight</vft-button>
  <vft-button @click="closeOther()">closeOther</vft-button>
  <vft-button @click="closeCurrent()">closeCurrent</vft-button>
  <vft-button @click="handleClose">close</vft-button>
  <vft-button @click="setTitle('自定义title')">setTitle</vft-button>
</template>

<style scoped lang="scss">

</style>
