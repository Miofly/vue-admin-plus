<template>
  <vft-button :plain="true" @click="openHTML">Use HTML String</vft-button>
</template>

<script lang="ts" setup>
import { Message } from 'vft';

const openHTML = () => {
  Message({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>'
  });
};
</script>
