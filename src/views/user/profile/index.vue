<script setup lang="ts">
import { getRouterKeyPath, listenerRouteChange } from '@vft/router';
import { useMultipleTabStore } from '@vft/store';
import { computed } from 'vue';
import { type RouteLocationNormalizedLoaded } from 'vue-router';
import ProfileSide from './components/profile-side.vue';
import HeaderTitle from './components/header-title.vue';

const routeName = ref();
const tabStore = useMultipleTabStore();

listenerRouteChange((route) => {
  if (route.meta?.currentActivePath) {
    routeName.value = route.name;
  }
});

const excludeNames = computed(() => {
  return (route: RouteLocationNormalizedLoaded) => {
    return tabStore.reloadFlag ? undefined : (route.name as string);
  };
});

const route = useRoute();
</script>

<template>
  <div class="profile">
    <profile-side />
    <header-title :title="route.meta.title"/>
    <div class="profile-con">
      <router-view v-slot="{ Component }">
        <keep-alive :include="[routeName]" :exclude="excludeNames(route)">
          <component v-if="tabStore.reloadFlag" :is="Component" :key="getRouterKeyPath(route)" />
        </keep-alive>
      </router-view>
    </div>
  </div>
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
