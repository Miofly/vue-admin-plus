<template>
  <vft-space :size="size" >
    <div v-for="i in 2" :key="i">
      <vft-button> button {{ i }} </vft-button>
    </div>
  </vft-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue';

const size = ref(10);
</script>
