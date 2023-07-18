<template>
  <div>
    <vft-check-tag checked style="margin-right: 8px">Checked</vft-check-tag>
    <vft-check-tag :checked="checked" @change="onChange">Toggle me</vft-check-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(false);

const onChange = (status: boolean) => {
  checked.value = status;
};
</script>
