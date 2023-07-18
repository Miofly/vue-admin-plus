<template>
  <vft-button :plain="true" @click="open1">message</vft-button>
  <vft-button :plain="true" @click="open2">success</vft-button>
  <vft-button :plain="true" @click="open3">warning</vft-button>
  <vft-button :plain="true" @click="open4">error</vft-button>
</template>

<script lang="ts" setup>
import { Message } from 'vft';

const open1 = () => {
  Message({
    showClose: true,
    message: 'This is a message.'
  });
};
const open2 = () => {
  Message({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success'
  });
};
const open3 = () => {
  Message({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning'
  });
};
const open4 = () => {
  Message({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error'
  });
};
</script>
