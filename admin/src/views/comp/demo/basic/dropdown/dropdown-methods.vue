<template>
  <div style="font-size: 14px">
    <p>open(close) the Dropdown list2 will close(open) the Dropdown List1.</p>
  </div>
  <div style="margin: 15px">
    <vft-button @click="showClick">show</vft-button>
  </div>
  <vft-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">
    <span class="vft-dropdown-link"> Dropdown List1 </span>
    <template #dropdown>
      <vft-dropdown-menu>
        <vft-dropdown-item>Action 1</vft-dropdown-item>
        <vft-dropdown-item>Action 2</vft-dropdown-item>
        <vft-dropdown-item>Action 3</vft-dropdown-item>
        <vft-dropdown-item disabled>Action 4</vft-dropdown-item>
        <vft-dropdown-item divided>Action 5</vft-dropdown-item>
      </vft-dropdown-menu>
    </template>
  </vft-dropdown>

  <vft-dropdown trigger="contextmenu" @visible-change="handleVisible2">
    <span class="vft-dropdown-link"> Dropdown List2 </span>
    <template #dropdown>
      <vft-dropdown-menu>
        <vft-dropdown-item>Action 1</vft-dropdown-item>
        <vft-dropdown-item>Action 2</vft-dropdown-item>
        <vft-dropdown-item>Action 3</vft-dropdown-item>
        <vft-dropdown-item disabled>Action 4</vft-dropdown-item>
        <vft-dropdown-item divided>Action 5</vft-dropdown-item>
      </vft-dropdown-menu>
    </template>
  </vft-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { DropdownInstance } from 'vft';

const dropdown1 = ref<DropdownInstance>();
function handleVisible2(visible: any) {
  if (!dropdown1.value) return;
  if (visible) {
    dropdown1.value.handleClose();
  } else {
    dropdown1.value.handleOpen();
  }
}
function showClick() {
  if (!dropdown1.value) return;
  dropdown1.value.handleOpen();
}
</script>
<style scoped>
.example-showcase .vft-dropdown-link {
  cursor: pointer;
  color: var(--vft-primary-color);
  display: flex;
  align-items: center;
}
</style>
