<template>
  <vft-menu
    :default-active="activeIndex"
    class="vft-menu-demo"
    mode="horizontal"
    @select="handleSelect"

  >
    <vft-menu-item index="1">Processing Center</vft-menu-item>
    <vft-sub-menu index="2" :teleported="false" :hide-timeout="500">
      <template #title>Workspace</template>
      <vft-menu-item index="2-1">item one</vft-menu-item>
      <vft-sub-menu :teleported="false" index="2-2">
        <template #title>item four</template>
        <vft-menu-item index="2-2-1">item one</vft-menu-item>
        <vft-menu-item index="2-2-2">item two</vft-menu-item>
        <vft-menu-item index="2-2-3">item three</vft-menu-item>
      </vft-sub-menu>
      <vft-menu-item index="2-3">item three</vft-menu-item>
      <vft-sub-menu index="2-4" :teleported="false">
        <template #title>item four</template>
        <vft-menu-item index="2-4-1">item one</vft-menu-item>
        <vft-menu-item index="2-4-2">item two</vft-menu-item>
        <vft-menu-item index="2-4-3">item three</vft-menu-item>
      </vft-sub-menu>
    </vft-sub-menu>
    <vft-menu-item index="3" disabled>Info</vft-menu-item>
    <vft-sub-menu index="4">
      <template #title>Workspace</template>
      <vft-menu-item index="4-1">item one</vft-menu-item>
      <vft-menu-item index="4-2">item two</vft-menu-item>
      <vft-menu-item index="4-3">item three</vft-menu-item>
      <vft-sub-menu index="4-4">
        <template #title>item four</template>
        <vft-menu-item index="4-4-1">item one</vft-menu-item>
        <vft-menu-item index="4-4-2">item two</vft-menu-item>
        <vft-menu-item index="4-4-3">item three</vft-menu-item>
      </vft-sub-menu>
    </vft-sub-menu>
  </vft-menu>
  <div class="h-6" />
  <vft-menu
    :default-active="activeIndex2"
    class="vft-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
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
    <vft-menu-item index="3" disabled>Info</vft-menu-item>
    <vft-menu-item index="4">Orders</vft-menu-item>
  </vft-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref('1');
const activeIndex2 = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
