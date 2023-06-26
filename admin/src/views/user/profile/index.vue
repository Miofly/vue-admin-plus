<script setup lang="ts">
import { getRouterKeyPath } from '@vft/router';
import { useMultipleTabStore, useTabs } from '@vft/store';
import { usePageActive } from '@vft/use';
import { computed } from 'vue';
import { type RouteLocationNormalizedLoaded } from 'vue-router';
import ProfileSide from './components/profile-side.vue';
import HeaderTitle from './components/header-title.vue';

const routeName = ref();
const tabStore = useMultipleTabStore();

const route = useRoute();


const { setTitle } = useTabs();

usePageActive(() => route.meta?.title,(val) => {
  setTitle('我的-' + val);
});

const excludeNames = computed(() => {
  return (route: RouteLocationNormalizedLoaded) => {
    return tabStore.reloadFlag ? undefined : (route.name as string);
  };
});
</script>

<template>
  <vft-container class="profile">
    <vft-aside :width="200">
      <profile-side />
    </vft-aside>
    <vft-main>
      <header-title :title="route.meta.title"/>

      <div class="profile-con">
        <!-- Todo Three Route Render -->
        <router-view v-slot="{ Component }">
          <keep-alive :include="[routeName]" :exclude="excludeNames(route)">
            <component v-if="tabStore.reloadFlag" :is="Component" :key="getRouterKeyPath(route)" />
          </keep-alive>
        </router-view>
      </div>
    </vft-main>

  </vft-container>
</template>

<style lang="scss" scoped>
.profile {
  background-color: getCssVar('fill-color');
  width: 100%;
  height: 100%;

  .profile-con {
    margin: 13px 0 0 13px;
    background-color: getCssVar('bg-color');
    height: 100%;
  }
}
</style>
