<script setup lang="ts">
import UserInfo from '@/components/user-info.vue';
import { LINK_PROFILE_ACCOUNT, LINK_PROFILE_MESSAGE } from '@/router/routes/user';

const PROFILE_LIST = [
  {
    title: '账号信息',
    path: LINK_PROFILE_ACCOUNT
  },
  {
    title: '消息',
    path: LINK_PROFILE_MESSAGE
  }
];
</script>

<template>
  <vft-side-menu class="bg-red-100" :width="210" :menus="PROFILE_LIST" :menuTopBottomHeight="70">
    <template #top>
      <div class="h-70px flex align-center ml-12px">
        <user-info :size="35" :cursor="false" />
      </div>
    </template>
  </vft-side-menu>
</template>
