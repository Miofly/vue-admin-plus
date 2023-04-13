<script lang="ts" setup>
import { createLayoutContext } from '@/layouts/use/use-context';
import { useLayout } from '@/layouts/use/use-layout';
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

    console.log(blogList.children, 888);

    return blogList.children!.filter((item) => {
      return item.title === route.meta?.category?.[0];
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


// 存储 layout 信息
const layoutContainerRef = ref();
const layoutContentRef = ref();

createLayoutContext({
  layoutContentRef,
  layoutContainerRef
});
</script>

<template>
  <div class="layout-main" v-if="!route.meta?.isAlonePage">
    <div class="header-hidden-dom"/>
    <layout-header/>
    <div
      ref="layoutContainerRef"
      v-spin="openPageLoading && tabStore.getPageLoading"
      :class="['layout-container', overflowClass]" :style="route.meta?.currentActivePath ? {} : {marginLeft: layoutSideWidth}">
      <vft-side-menu
        dragWidth
        v-show="showSide"
        v-model:sideWidth="sideWidth"
        :collapseWidth="sideCollapseWidth"
        v-model:collapse="collapse"
        :menus="getSideMenuList"
        showCollapse
      />
      <div ref="layoutContentRef"
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
                           :iframePages="iframePages"/>
      </div>
    </div>
    <vft-footer-layout class="layout-footer" :leftDistance="0">
      <template #right>
        <div class="footer-right">
          <pwa-install/>
          <vft-full-screen/>
        </div>
      </template>
    </vft-footer-layout>
    <!--
      :key=""
    -->
    <vft-back-top
      :scrollTargetKey="route.meta?.isMoreTabPage && route.meta?.scrollDom ? getRouterKeyPath(route) : undefined"
      class="z-10" :target="route.meta?.scrollDom || defaultScrollDom" :right="30" :bottom="100"/>
  </div>
  <router-view v-else/>
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
