<script setup lang="ts">
import UserInfo from '@/components/user-info.vue';
import { useLayoutContext } from '@/layouts/use/use-context';
import { LINK_PROFILE_ACCOUNT, LINK_PROFILE_SYSTEM_SETTING } from '@/router/routes/user';
import { addUnit } from '@vft/utils';

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

const sideWidth = ref(200);

onMounted(() => {
  handleDragWidthEnd();
});

onActivated(() => {
  handleDragWidthEnd();
});

function handleDragWidthEnd() {
  layoutContext.layoutContainerRef.value.style.marginLeft = addUnit(sideWidth.value);
}
</script>

<template>
  <vft-side-menu ref="sideMenuRef" :menuTopBottomHeight="70" openListenRoute dragWidth
                 v-model:sideWidth="sideWidth" :menus="PROFILE_LIST"
                 @dragWidthEnd="handleDragWidthEnd" @select="handleDragWidthEnd">
    <template #top>
      <div class="h-70px flex align-center ml-12px overflow-x-hidden">
        <user-info :size="35" :cursor="false"/>
      </div>
    </template>
  </vft-side-menu>
</template>
