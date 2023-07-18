<template>
  <vft-row class="tac">
    <vft-col :span="12">
      <h5 class="mb-2">Default colors</h5>
      <vft-menu
        default-active="2"
        class="vft-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <vft-sub-menu index="1" icon="ico-ep:location" title="Navigator One">
          <vft-menu-item-group title="Group One">
            <vft-menu-item index="1-1">item one</vft-menu-item>
            <vft-menu-item index="1-2">item two</vft-menu-item>
          </vft-menu-item-group>
          <vft-menu-item-group title="Group Two">
            <vft-menu-item index="1-3">item three</vft-menu-item>
          </vft-menu-item-group>
          <vft-sub-menu index="1-4">
            <template #title>item four</template>
            <vft-menu-item index="1-4-1">item one</vft-menu-item>
          </vft-sub-menu>
        </vft-sub-menu>
        <vft-menu-item index="2" icon="ico-ep:menu" title="Navigator Two"/>
        <vft-menu-item index="3" disabled icon="ico-ep:document" title="Navigator Three"/>
        <vft-menu-item index="4" icon="ico-ep:setting" title="Navigator Four"/>
      </vft-menu>
    </vft-col>
    <vft-col :span="12">
      <h5 class="mb-2">Custom colors</h5>
      <vft-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="vft-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <vft-sub-menu index="1" icon="ico-ep:location" title="Navigator One">
          <vft-menu-item-group title="Group One">
            <vft-menu-item index="1-1">item one</vft-menu-item>
            <vft-menu-item index="1-2">item two</vft-menu-item>
          </vft-menu-item-group>
          <vft-menu-item-group title="Group Two">
            <vft-menu-item index="1-3">item three</vft-menu-item>
          </vft-menu-item-group>
          <vft-sub-menu index="1-4">
            <template #title>item four</template>
            <vft-menu-item index="1-4-1">item one</vft-menu-item>
          </vft-sub-menu>
        </vft-sub-menu>
        <vft-menu-item index="2" icon="ico-ep:menu" title="Navigator Two"/>
        <vft-menu-item index="3" disabled icon="ico-ep:document" title="Navigator Three"/>
        <vft-menu-item index="4" icon="ico-ep:setting" title="Navigator Four"/>
      </vft-menu>
    </vft-col>
  </vft-row>
</template>

<script lang="ts" setup>

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
