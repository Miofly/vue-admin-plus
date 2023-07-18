<template>
  <vft-tooltip :visible="visible">
    <template #content>
      <span>Content</span>
    </template>
    <vft-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </vft-button>
  </vft-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
</script>
