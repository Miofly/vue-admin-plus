<script setup lang="ts">
import { useUserInfo } from '@/use/use-user-info';

const PROFILE_LIST = [
  {
    title: '账号信息'
  },
  {
    title: '消息'
  }
];

const { getUserAvatar, getUserName } = useUserInfo();
</script>

<template>
  <vft-side-menu class="user-side-menu" :width="210" :menus="PROFILE_LIST" :menuTopBottomHeight="70">
    <template #top>
      <div class="h-70px flex align-center ml-12px">
        <vft-avatar :src="getUserAvatar" :size="40" />
        <div class="ml-8px">
          <div :title="getUserName" class="nickname">{{ getUserName }}</div>
        </div>
      </div>
    </template>
  </vft-side-menu>
</template>

<style lang="scss" scoped>
.user-side-menu {
  .nickname {
    font-weight: 500;
    font-size: 14px;
    color: #333333;
    max-width: 130px;
    word-break: break-all;
    @include line-clamp(1);
  }
  .compTitle {
    font-weight: 400;
    font-size: 12px;
    color: #8B8C8C;
    max-width: 130px;
    word-break: break-all;
    @include line-clamp(1);
  }
}
</style>
