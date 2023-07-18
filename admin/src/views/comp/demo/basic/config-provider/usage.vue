<template>
  <div>
    <vft-button mb-2 @click="toggle">Switch Language</vft-button>
    <br />

    <vft-config-provider >
      <vft-table mb-1 :data="[]" />
      <vft-pagination :total="100" />
    </vft-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const language = ref('zh-cn');

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn';
};
</script>
