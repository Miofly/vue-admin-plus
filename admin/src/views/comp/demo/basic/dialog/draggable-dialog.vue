<template>
  <vft-button text @click="dialogVisible = true">
    Click to open Dialog
  </vft-button>

  <vft-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span>It's a draggable Dialog</span>
    <template #footer>
      <span class="dialog-footer">
        <vft-button @click="dialogVisible = false">Cancel</vft-button>
        <vft-button type="primary" @click="dialogVisible = false">
          Confirm
        </vft-button>
      </span>
    </template>
  </vft-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dialogVisible = ref(false);
</script>
