<script setup lang="ts">
import { listenerRouteChange } from '@vft/router';
import { getRouterKeyPath } from '@vft/router';
import { useMultipleTabStore } from '@vft/store';
import { computed } from 'vue';
import { type RouteLocationNormalizedLoaded } from 'vue-router';
import ProfileSide from './components/profile-side.vue';

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
</script>

<template>
  <div class="profile">
    <ProfileSide />
    
    <div class="profile-con">
      <router-view v-slot="{ route, Component }">
        <keep-alive :include="[routeName]" :exclude="excludeNames(route)">
          <component v-if="tabStore.reloadFlag" :is="Component" :key="getRouterKeyPath(route)" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;

  .profile-con {
    margin-left: 14px;
    background-color: white;
    height: 100%;
  }
}
</style>
