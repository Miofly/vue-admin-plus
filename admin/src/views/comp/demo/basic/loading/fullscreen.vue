<template>
  <vft-button
    v-loading.fullscreen.lock="fullscreenLoading"
    type="primary"
    @click="openFullScreen1"
  >
    As a directive
  </vft-button>
  <vft-button type="primary" @click="openFullScreen2"> As a service </vft-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fullscreenLoading = ref(false);
const openFullScreen1 = () => {
  fullscreenLoading.value = true;
  setTimeout(() => {
    fullscreenLoading.value = false;
  }, 2000);
};

const openFullScreen2 = () => {
  setTimeout(() => {
  }, 2000);
};
</script>
