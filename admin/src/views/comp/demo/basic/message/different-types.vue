<template>
  <vft-button :plain="true" @click="open2">success</vft-button>
  <vft-button :plain="true" @click="open3">warning</vft-button>
  <vft-button :plain="true" @click="open1">message</vft-button>
  <vft-button :plain="true" @click="open4">error</vft-button>
</template>

<script lang="ts" setup>
import { Message } from 'vft';

const open1 = () => {
  Message('this is a message.');
};
const open2 = () => {
  Message({
    message: 'Congrats, this is a success message.',
    type: 'success'
  });
};
const open3 = () => {
  Message({
    message: 'Warning, this is a warning message.',
    type: 'warning'
  });
};
const open4 = () => {
  Message.error('Oops, this is a error message.');
};
</script>
