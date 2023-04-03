<template>
  <vft-config-provider id="root" :theme="getAppTheme">
    <router-view />
  </vft-config-provider>
</template>

<script lang="ts" setup>
import { useSetting } from '@/use';

const { getAppTheme } = useSetting();
</script>

