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
import { addUnit } from '@vft/utils';
import { generateCssVars } from 'vft';

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
  overflowClass
} = useLayout(showSide);

const iframePages = computed(() => tabStore.getTabList.filter((item) => item.meta.isIframe || item.meta.frameSrc));
const rotateNum = computed(() => collapse.value ? '180deg' : 0);
// save layoutRef info
const layoutContainerRef = ref();
const layoutContentRef = ref();

createLayoutContext({
  layoutContentRef,
  layoutContainerRef
});

const menuStyle = generateCssVars({
  'item-height': '30px',
  'sub-item-height': '30px',
  'hover-bg-color': 'transparent'
}, 'menu');
</script>

<template>
  <vft-container direction="vertical" class="layout-main" v-if="!route.meta?.isAlonePage">
    <layout-header/>
    <vft-container ref="layoutContainerRef" v-spin="openPageLoading && tabStore.getPageLoading"
      :class="['layout-container', overflowClass]" >
      <vft-aside :style="{width: addUnit(sideWidth)}" v-show="showSide">
        <vft-side-menu
          :style="menuStyle"
          dragWidthCfg
          useRouterJump
          v-model:width="sideWidth"
          v-model:collapse="collapse"
          :collapse-width="sideCollapseWidth"
          :unique-opened="false"
          :menus="getSideMenuList"
          height="calc(100% - 100px)"
        >
          <div class="collapse" @click="collapse = !collapse"/>
        </vft-side-menu>
      </vft-aside>
      <vft-main ref="layoutContentRef" :class="['layout-content', overflowClass]">
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
      </vft-main>
    </vft-container>
    <vft-footer-layout>
      <template #right>
        <div class="footer-right">
          <pwa-install/>
          <vft-full-screen/>
        </div>
      </template>
    </vft-footer-layout>
  </vft-container>
  <router-view v-else/>
  <vft-back-top
    :scrollTargetKey="route.meta?.isMoreTabPage && route.meta?.scrollDom ? getRouterKeyPath(route) : undefined"
    class="z-10" :target="route.meta?.scrollDom || defaultScrollDom" :right="30" :bottom="100"/>
</template>

<style lang="scss" scoped>
.layout-main {
  height: 100%;

  .vft-aside {
    overflow: initial;
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

.vft-side-menu {
  .collapse {
    width: 11px;
    height: 59px;
    border: 1px solid rgb(225, 225, 225);
    background: rgb(242, 242, 242);
    position: absolute;
    top: 50%;
    right: -11px;
    transform: translateY(-50%);
    z-index: 19;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

    &::after {
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      top: 50%;
      left: 1px;
      right: 2px;
      transform: translateY(-50%) rotate(v-bind('rotateNum'));
      border-width: 5px 6px 5px 0;
      border-style: solid;
      border-color: transparent rgb(134, 148, 174) transparent transparent;
    }
  }

  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;

    .menu-item-text {
      margin-left: 14px;
      @include line-clamp(1);

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        background-color: rgb(223, 223, 223);
        border-radius: 50%;
      }
    }
  }

  .star-icon {
    color: v-bind(iconColor) !important;
  }

  :deep(.vft-side-menu__con) {
    .vft-sub-menu__title, .vft-menu-item {
      font-size: 13px;
    }

    .vft-sub-menu__title, .vft-menu-item {
      &:hover {
        color: $primary-color
      }
    }

    .vft-sub-menu__icon-arrow {
      font-size: 14px !important;
      color: rgb(192, 192, 192);
    }

    .is-opened.is-active {
      > .vft-sub-menu__title {
        .vft-sub-menu__icon-arrow {
          color: $primary-color;
        }
      }
    }
  }
}
</style>
