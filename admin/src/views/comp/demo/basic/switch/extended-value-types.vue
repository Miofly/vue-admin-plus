<template>
  <vft-tooltip :content="'Switch value: ' + value" placement="top">
    <vft-switch
      v-model="value"
      style="--vft-switch-on-color: #13ce66; --vft-switch-off-color: #ff4949"
      active-value="100"
      inactive-value="0"
    />
  </vft-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('100');
</script>
