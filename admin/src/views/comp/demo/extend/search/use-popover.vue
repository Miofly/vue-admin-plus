<script setup lang="ts">
import SearchContent from '@/components/search/search-content.vue';

const searchValue = ref('');
const visible = ref(false);

const searchRef = ref();
</script>

<template>
  <vft-search
    v-model:model-value="searchValue"
    :width="200"
    :use-popover="false"
    placeholder="请输入关键字"
    ref="searchRef"
  >
    <search-content ref="searchContentRef" v-model:visible="visible"
                    :search-value="searchValue"/>
  </vft-search>
  <br/>
  <br/>
</template>

<style scoped lang="scss">

</style>
