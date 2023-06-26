<script lang="tsx" setup>
import { LINK_HOME } from '@/router/constants';
import setting from '@/setting';
import User from './components/user.vue';
import { generateCssVars } from 'vft';

const headerProps = computed(() => {
  return {
    logoCfg: {
      logo: setting.logo.src,
      title: setting.logo.title,
      jumpPath: LINK_HOME
    }
  };
});

const searchContentRef = ref();
const horizontalMenuRef = ref();

function handleChangeTab(e) {
  searchContentRef.value.changeTab(e);
}

const isInSubMenu = computed(() => horizontalMenuRef.value?.isInSubMenu);
</script>

<template>
  <vft-header-layout v-bind="headerProps" class="header-layout">
    <template #left>
      <!--<vft-horizontal-menu :style="menuStyle" :subMenuCfg="{showArrow: false}"-->
      <!--  :menus="HEADER_MENU_LIST" use-router-jump />-->
    </template>
    <template #right>
      <div class="search-content" @keydown="handleChangeTab">
        <!--<vft-search-->
        <!--  v-model:model-value="searchValue"-->
        <!--  use-popover-->
        <!--  :popoverCfg="{'popper-class': 'app-search-popover'}"-->
        <!--  :width="200"-->
        <!--  :active-width="300"-->
        <!--  placeholder="请输入关键字"-->
        <!--&gt;-->
        <!--  <search-content ref="searchContentRef" v-model:visible="visible"-->
        <!--    :search-value="searchValue" />-->
        <!--</vft-search>-->
      </div>
      <user class="user" />
    </template>
    <template #bottom>
      <vft-multiple-tabs
        :tabsStyle="generateCssVars({'item-hover-bg-color': 'white','item-active-color': 'black','item-active-bg-color': 'white',}, 'tabs')"
        :canDrag="setting.multiTabsSetting.canDrag"
        :fixTabCount="2"
      />
    </template>
  </vft-header-layout>
  <vft-overlay :mask="isInSubMenu" onlyNode class="!z-99" />
</template>

<style lang="scss" scoped>
.header-layout {
  :deep(.vft-menu--horizontal) {
    flex-grow: 1;

    .vft-sub-menu__text {
      padding-right: 0;
    }
  }
}
</style>
