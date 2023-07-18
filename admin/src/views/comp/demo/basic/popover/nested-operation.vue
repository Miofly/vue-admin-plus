<template>
  <vft-popover :visible="visible" placement="top" :width="160">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <vft-button size="small" text @click="visible = false">cancel</vft-button>
      <vft-button size="small" type="primary" @click="visible = false"
        >confirm</vft-button
      >
    </div>
    <template #reference>
      <vft-button @click="visible = true">Delete</vft-button>
    </template>
  </vft-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
