<script setup lang="ts">
import UserInfo from '@/components/user-info.vue';
import { useLayoutContext } from '@/layouts/use/use-context';
import { LINK_PROFILE_ACCOUNT, LINK_PROFILE_SYSTEM_SETTING } from '@/router/routes/user';
import { cssVarValue } from 'vft';

const PROFILE_LIST = [
  {
    title: '账号设置',
    path: LINK_PROFILE_ACCOUNT
  },
  {
    title: '系统设置',
    path: LINK_PROFILE_SYSTEM_SETTING
  }
];

const sideMenuRef = ref();

const layoutContext = useLayoutContext();

function handleDragWidthEnd () {
  layoutContext.layoutContainerRef.value.style.marginLeft = cssVarValue('side-menu-width', sideMenuRef.value.sideRef).value;
}
</script>

<template>
  <vft-side-menu ref="sideMenuRef" @dragWidthEnd="handleDragWidthEnd" openListenRoute :width="210" :menus="PROFILE_LIST" :menuTopBottomHeight="70">
    <template #top>
      <div class="h-70px flex align-center ml-12px">
        <user-info :size="35" :cursor="false" />
      </div>
    </template>
  </vft-side-menu>
</template>
