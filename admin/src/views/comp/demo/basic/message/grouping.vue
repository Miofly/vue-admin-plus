<template>
  <vft-button :plain="true" @click="open">Show message</vft-button>
</template>

<script lang="ts" setup>
import { Message } from 'vft';

const open = () => {
  Message({
    message: 'this is a message.',
    grouping: true,
    type: 'success'
  });
};
</script>
