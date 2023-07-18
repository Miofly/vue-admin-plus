<template>
  <vft-icon-text text="自定义" :size="14" color="red"  icon="ico-ph:apple-logo" />
  <br/>
  <vft-icon-text text="主题色" :size="14" :color="_primaryColor"  icon="ico-ph:apple-logo" />
  <br/>
  <vft-icon-text text="滑动变色" :size="14" color="purple" hoverColor="red" icon="ico-ph:apple-logo" />
</template>

<script lang="ts" setup>
import { primaryColor } from 'vft';

const _primaryColor = primaryColor();
// distance ? : string | number;
// reverse ? : boolean;
</script>
