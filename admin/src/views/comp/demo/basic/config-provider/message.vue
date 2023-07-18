<template>
  <div>
    <vft-config-provider :message="config">
      <vft-button @click="open">OPEN</vft-button>
    </vft-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { VftMessage } from 'vft';
const config = reactive({
  max: 3
});
const open = () => {
  VftMessage('This is a message.');
};
</script>
