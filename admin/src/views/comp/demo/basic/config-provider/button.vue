<template>
  <div>
    <div m="b-2">
      <vft-checkbox v-model="config.autoInsertSpace"
        >autoInsertSpace</vft-checkbox
      >
    </div>

    <vft-config-provider :button="config">
      <vft-button>中文</vft-button>
    </vft-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const config = reactive({
  autoInsertSpace: true
});
</script>
