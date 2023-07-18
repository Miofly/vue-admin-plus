<template>
  <vft-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <vft-radio-button :label="false">expand</vft-radio-button>
    <vft-radio-button :label="true">collapse</vft-radio-button>
  </vft-radio-group>
  <vft-menu
    default-active="2"
    class="vft-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <vft-sub-menu index="1" icon="ico-ep:location">
      <template #title>
        <span>这是一段很长的中文文字</span>
      </template>
      <vft-menu-item-group>
        <template #title><span>这是一段很长的中文文字这是一段很长的中文文字</span></template>
        <vft-menu-item index="1-1" title="这是一段很长的中文文字这是一段很长的中文文字"/>
        <vft-menu-item index="1-2">item two</vft-menu-item>
      </vft-menu-item-group>
      <vft-menu-item-group title="Group Two">
        <vft-menu-item index="1-3">item three</vft-menu-item>
      </vft-menu-item-group>
      <vft-sub-menu index="1-4" title="这是一段很长的中文文字这是一段很长的中文文字">
        <vft-menu-item index="1-4-1" title="这是一段很长的中文文字这是一段很长的中文文字"/>
      </vft-sub-menu>
    </vft-sub-menu>
    <vft-menu-item index="2" disabled icon="ico-ep:menu">
      <template #title>这是一段很长的中文文字这是一段很长的中文文字</template>
    </vft-menu-item>
    <vft-sub-menu index="3" icon="ico-ep:location">
      <template #title>
        <span>这是一段很长的中文文字</span>
      </template>
      <vft-menu-item-group>
        <template #title><span>这是一段很长的中文文字这是一段很长的中文文字</span></template>
        <vft-menu-item index="3-1">这是一段很长的中文文字这是一段很长的中文文字</vft-menu-item>
        <vft-menu-item index="3-2">item two</vft-menu-item>
      </vft-menu-item-group>
      <vft-menu-item-group title="Group Two">
        <vft-menu-item index="3-3">item three</vft-menu-item>
      </vft-menu-item-group>
      <vft-sub-menu index="3-4">
        <template #title><span>这是一段很长的中文文字这是一段很长的中文文字</span></template>
        <vft-menu-item index="3-4-1">这是一段很长的中文文字这是一段很长的中文文字</vft-menu-item>
      </vft-sub-menu>
    </vft-sub-menu>
    <vft-menu-item index="4" icon="ico-ep:setting">
      <template #title>Navigator Four</template>
    </vft-menu-item>
  </vft-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.vft-menu-vertical-demo:not(.vft-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
