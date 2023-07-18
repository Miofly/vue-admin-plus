<template>
  <vft-button @click="visible = true">
    Open Dialog with customized header
  </vft-button>
  <vft-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <vft-button type="danger" @click="close">
          <vft-icon class="vft-icon--left" icon="ico-ep:circle-close-filled"/>
          Close
        </vft-button>
      </div>
    </template>
    This is dialog content.
  </vft-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
