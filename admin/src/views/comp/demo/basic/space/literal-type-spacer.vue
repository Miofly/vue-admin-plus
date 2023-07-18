<template>
  <vft-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <vft-button> button {{ i }} </vft-button>
    </div>
  </vft-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref(10);
</script>
