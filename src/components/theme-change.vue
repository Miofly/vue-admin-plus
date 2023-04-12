<script setup lang="ts">
import { useSetting } from '@/use';

const { themeDark, themeLight, getIsDark } = useSetting();
</script>

<template>
  <div class="theme-container">
    <div :class="[{'active': !getIsDark}, 'item']" @click="themeLight">
      <vft-icon-text :size="10" text="浅色" direction="col" icon="ico-ep:sunny" />
    </div>
    <div :class="[{'active': getIsDark}, 'item']" @click="themeDark">
      <vft-icon-text :size="10" text="深色" direction="col" icon="ico-ph:moon-light" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme-container {
  display: flex;
  border: 0.5px solid #2196f3;
  width: 60px;
  min-width: 60px;
  height: 26px;
  border-radius: 7px;
  overflow: hidden;
  align-items: center;

  .item {
    text-align: center;
    flex: 1 1 0;
    height: inherit;
    padding-top: 2px;
    position: relative;
    cursor: pointer;

    .#{$namespace}-icon-text {
      width: auto;
    }
  }

  .active {
    .#{$namespace}-icon-text {
      color: white!important;
      &:hover {
        color: white !important;
        i {
          color: white !important;
        }
      }
    }

    background: rgb(1, 113, 246);
  }


  .text {
    font-size: 12px;
    transform: scale(0.8);
  }
}
</style>
