<template>
  <vft-button ref="buttonRef"
    >Click me</vft-button
  >

  <vft-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    title="With title"
    virtual-triggering
  >
    <span> Some content </span>
  </vft-popover>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue';
const buttonRef = ref();
const popoverRef = ref();
</script>
