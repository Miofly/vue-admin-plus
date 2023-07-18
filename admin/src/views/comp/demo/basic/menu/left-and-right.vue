<template>
  <vft-menu
    :default-active="activeIndex"
    class="vft-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <vft-menu-item index="0">LOGO</vft-menu-item>
    <div class="flex-grow" />
    <vft-menu-item index="1">Processing Center</vft-menu-item>
    <vft-sub-menu index="2">
      <template #title>Workspace</template>
      <vft-menu-item index="2-1">item one</vft-menu-item>
      <vft-menu-item index="2-2">item two</vft-menu-item>
      <vft-menu-item index="2-3">item three</vft-menu-item>
      <vft-sub-menu index="2-4">
        <template #title>item four</template>
        <vft-menu-item index="2-4-1">item one</vft-menu-item>
        <vft-menu-item index="2-4-2">item two</vft-menu-item>
        <vft-menu-item index="2-4-3">item three</vft-menu-item>
      </vft-sub-menu>
    </vft-sub-menu>
  </vft-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
