<script setup lang="ts">
import { useSetting } from '@/use';

const { toggleThemeMode, getIsDark } = useSetting();
</script>

<template>
  <div class="theme-container" @click="toggleThemeMode">
    <div :class="[{'active': !getIsDark}, 'light item']">
      <vft-icon icon="ico-ep:sunny"/>
      <div class="text">浅色</div>
    </div>
    <div :class="[{'active': getIsDark}, 'dark item']">
      <vft-icon icon="ico-ph:moon-light"/>
      <div class="text">深色</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme-container {
  display: flex;
  border: 0.5px solid $primary-color;
  width: 60px;
  min-width: 60px;
  height: 26px;
  border-radius: 7px;
  overflow: hidden;
  align-items: center;
  .item {
    text-align: center;
    flex: 1 1 0%;
    height: inherit;
    padding-top: 2px;
    position: relative;
    cursor: pointer;
  }

  .active {
    color: white;
    background: rgb(1, 113, 246);
  }
  
  .text {
    font-size: 12px;
    transform: scale(0.8);
  }
}
</style>
