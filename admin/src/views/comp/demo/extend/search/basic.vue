<script setup lang="ts">
// import SearchContent from '@/components/search/search-content.vue';
import { primaryColor } from 'vft';

const searchValue = ref('');
const visible = ref(false);

const _primaryColor = primaryColor();
</script>

<template>
  <vft-search
    v-model:model-value="searchValue"
    :width="200"
    placeholder="请输入关键字"
  >
<!--    <search-content ref="searchContentRef" v-model:visible="visible"-->
<!--                    :search-value="searchValue"/>-->
  </vft-search>
  <br/>
  <br/>
</template>

<style scoped lang="scss">

</style>
