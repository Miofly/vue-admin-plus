<template>
  <vft-button @click="visible = true">
    Open Drawer with customized header
  </vft-button>
  <vft-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <vft-button type="danger" @click="close">
        <vft-icon class="vft-icon--left" icon="ico-ep:circle-close-filled"/>
        Close
      </vft-button>
    </template>
    This is drawer content.
  </vft-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
