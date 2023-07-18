<template>
  <vft-button :plain="true" @click="open">Show message</vft-button>
  <vft-button :plain="true" @click="openVn">VNode</vft-button>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { Message } from 'vft';

const open = () => {
  Message('this is a message.');
};

const openVn = () => {
  Message({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  });
};
</script>
