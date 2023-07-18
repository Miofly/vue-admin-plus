<template>
  <vft-radio v-model="radio" disabled value="disabled">Option A</vft-radio>
  <vft-radio v-model="radio" disabled value="selected and disabled"
    >Option B</vft-radio
  >
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref('selected and disabled');
</script>
