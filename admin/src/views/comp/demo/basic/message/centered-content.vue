<template>
  <vft-button plain @click="openCenter">Centered text</vft-button>
</template>

<script lang="ts" setup>
import { Message } from 'vft';

const openCenter = () => {
  Message({
    showClose: true,
    message: 'Centered text',
    center: true
  });
};
</script>
