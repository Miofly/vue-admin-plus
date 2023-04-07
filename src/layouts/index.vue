<script lang="ts" setup>
import { useLayout } from '@/layouts/useLayout';
import { routes } from '@/router/constants';
import setting from '@/setting';
import { usePermissionStore } from '@/store/modules/permission';
import { useUserStore } from '@/store/modules/user';
import { getRouterKeyPath } from '@vft/router';
import { useErrorLogStore, useMultipleTabStore } from '@vft/store';
import { computed } from 'vue';
import PwaInstall from './components/pwa-install.vue';
import LayoutHeader from './header.vue';

const tabStore = useMultipleTabStore();
const errorStore = useErrorLogStore();
const permissionStore = usePermissionStore();
const userStore = useUserStore();

const route = useRoute();

const {
  openKeepAlive,
  multiTabsSetting,
  errorHandle,
  canEmbedIFramePage,
  openPageLoading
} = setting;

onMounted(() => {
  if (!userStore.getToken) {
    permissionStore.generateMenuList(routes);
  }
});

// get side list
const getSideMenuList = computed(() => {
  if (route.meta?.isBlog) {
    const blogList = permissionStore.getMenuList.filter((item) => {
      return item.meta.isBlog;
    })?.[0];

    return blogList.children!.filter((item) => {
      return item.title === route.meta?.category?.[1];
    })?.[0]?.children || [];
  } else {
    return permissionStore.getMenuList;
  }
});

const showSide = computed(() => !route.meta.hideSide && getSideMenuList.value?.length);

const {
  collapse,
  sideWidth,
  sideCollapseWidth,
  defaultScrollDom,
  overflowClass,
  layoutSideWidth
} = useLayout(showSide);

const iframePages = computed(() => tabStore.getTabList.filter((item) => item.meta.isIframe || item.meta.frameSrc));
</script>

<template>
  <div class="layout-main" v-if="!route.meta?.isAlonePage">
    <div class="header-hidden-dom" />
    <layout-header />
    <div :class="['layout-container', overflowClass]" :style="{marginLeft: layoutSideWidth}">
      <div v-if="showSide">
        <vft-side-menu
          :width="sideWidth"
          :collapseWidth="sideCollapseWidth"
          v-model:collapse="collapse"
          :menus="getSideMenuList"
          showCollapse
        />
      </div>
      <div v-spin="openPageLoading && tabStore.getPageLoading"
        :class="['layout-content', overflowClass]">
        <!--Todo :cacheList="tabStore.getCachedTabList" 热更新有问题-->
        <vft-router-view-content
          :isReloadFlag="tabStore.reloadFlag"
          :pageErrorStatus="errorStore.getErrorStatus"
          :enableErrorHandle="errorHandle.status"
          :exceptionComp="errorHandle.exceptionComp"
          :cacheList="tabStore.getCachedTabList"
          :openKeepAlive="openKeepAlive && multiTabsSetting.show"
        />
        <vft-iframe-layout v-if="canEmbedIFramePage && tabStore.reloadFlag && iframePages?.length"
          :iframePages="iframePages" />
      </div>
    </div>
    <vft-footer-layout class="layout-footer" :leftDistance="0">
      <template #right>
        <div class="footer-right">
          <pwa-install />
          <vft-full-screen />
        </div>
      </template>
    </vft-footer-layout>
    <!--
      :key=""
    -->
    <vft-back-top
      :scrollTargetKey="route.meta?.isMoreTabPage && route.meta?.scrollDom ? getRouterKeyPath(route) : undefined"
      class="z-10" :target="route.meta?.scrollDom || defaultScrollDom" :right="30" :bottom="100" />
  </div>
  <router-view v-else />
</template>

<style lang="scss" scoped>
.layout-main {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  .header-hidden-dom {
    flex: none;
    height: map-get($header-layout, 'height');
  }

  .layout-container {
    flex: auto;
    // noinspection CssInvalidPropertyValue
    height: calc(100% - getCssVar(header-layout-height) - getCssVar(footer-layout-height));

    .layout-content {
      height: 100%;
    }
  }

  .footer-right {
    display: flex;
    justify-content: flex-end;
    color: #111;

    :deep(.vft-full-screen) {
      margin-right: 8px;
    }
  }
}
</style>
