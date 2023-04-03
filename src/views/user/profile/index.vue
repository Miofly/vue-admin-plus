<script setup lang="ts">
import { listenerRouteChange } from '@vft/router';
import { useMultipleTabStore } from '@vft/store';
import { computed } from 'vue';
import { type RouteLocationNormalizedLoaded } from 'vue-router';
import ProfileSide from './components/profile-side.vue';

const routeName = ref();
const tabStore = useMultipleTabStore();

// const route = useRoute();

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
  <div class="user-profile">
    <ProfileSide />
    <div class="profile-con">
      <router-view v-slot="{ route: _route, Component }">
        <keep-alive :include="[routeName]" :exclude="excludeNames(_route)">
          <component v-if="tabStore.reloadFlag" :is="Component" :key="_route.fullPath" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-profile {
  width: 100%;
  height: 100%;
  //padding: 0px 0 0 10px;
  background-color: #f7f8fa;
  .profile-con {
    height: 100%;
    margin-top: 10px;
    background-color: white;

    //background-color: white;
    //min-height: calc(100% - 49px);
  }
}
</style>
