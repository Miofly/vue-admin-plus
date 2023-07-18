<script setup lang="ts">
import SearchContent from '@/components/search/search-content.vue';
import { primaryColor } from 'vft';
import { generateCssVars } from 'vft';

const searchValue = ref('');
const visible = ref(false);

const _primaryColor = primaryColor();

const searchRef = ref();

const placeholder = '请输入公司及其其他信息';

const placeholderText = computed(() => (searchRef.value?.isFocus || searchRef.value?.visible || searchValue.value) ? placeholder : '搜索');

const style = generateCssVars({
  'active-bg-color': '#f8f9fb',
  'hover-bg-color': '#f8f9fb',
  'border-color': 'transparent',
  'hover-border-color': 'transparent',
  'border-radius': '20px'
}, 'search');
</script>

<template>
  <div class="search-container"
    :style="style"
  >
    <vft-search
      ref="searchRef"
      v-model:model-value="searchValue"
      :prefix-icon="{icon: 'ico-ep:search', color: _primaryColor}"
      suffix-icon=""
      :width="100"
      :activeWidth="70 + (searchRef?.isHover ? placeholder.length : placeholderText.length) * 14"
      :placeholder="placeholderText"
    >
      <search-content ref="searchContentRef" v-model:visible="visible"
                      :search-value="searchValue"/>
    </vft-search>
  </div>
</template>
