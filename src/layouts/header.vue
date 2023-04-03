<script lang="ts" setup>
import { LINK_HOME } from '@/router/constants';
import setting from '@/setting';
import { useUserStore } from '@/store/modules/user';
import { isNumber } from '@vft/utils';
import UserInfo from './components/user-info.vue';

const userStore = useUserStore();

let menuRef = ref();

const headerProps = computed(() => {
  return {
    logoCfg: {
      logo: setting.logo.src,
      title: setting.logo.title,
      jumpPath: LINK_HOME
    }
  };
});

const showMask = computed(() => {
  return isNumber(menuRef.value?.activeIndex);
});
</script>

<template>
  <vft-overlay :mask="showMask" onlyNode class="fixed left-0 right-0 z-12 overflow-hidden">
    <vft-header-layout v-bind="headerProps" :showMask="showMask">
      <div class="flex align-center h-40px">
        <user-info />
      </div>
      <template #bottom v-if="setting.multiTabsSetting.show">
        <vft-multiple-tabs :canDrag="setting.multiTabsSetting.canDrag" />
      </template>
    </vft-header-layout>
  </vft-overlay>
</template>

<style lang="scss">
.vft-layout-header__left {
  min-width: $header-left-min-width;
}
</style>

<style lang="scss" scoped>
:deep(.vft-layout-header__right) {
  margin-right: 20px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
</style>
