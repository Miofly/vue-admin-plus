<template>
  <vft-switch v-model="value1" active-icon="ico-ep:check" inactive-icon="ico-ep:close" />
  <br />
  <vft-switch
    v-model="value2"
    class="mt-2"
    style="margin-left: 24px"
    inline-prompt
    active-icon="ico-ep:check"
    inactive-icon="ico-ep:close"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value1 = ref(true);
const value2 = ref(true);
</script>
