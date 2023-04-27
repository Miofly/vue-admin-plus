<script setup lang="ts">
import { usePwaStore } from '@vft/store';
import { isPwa } from '@vft/utils';

const pwaStore = usePwaStore();

// 主动触发 install
function handleInstall () {
  pwaStore.getEvent?.prompt();
}
</script>

<template>
  <vft-icon-text v-if="!pwaStore.getStatus && !isPwa()"
    icon="ico-ep:monitor" text="安装桌面快捷方式"
    :distance="3" hoverColor="#0171f6"
    @click="handleInstall" class="mr-10px cursor-pointer"/>
</template>
