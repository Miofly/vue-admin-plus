<script setup lang="ts">
import ThemeChange from '@/components/theme-change.vue';
import ThemeColor from '@/components/theme-color.vue';
import UserInfo from '@/components/user-info.vue';
import { LINK_PROFILE_ACCOUNT } from '@/router/routes/user';
import { useUserStore } from '@/store/modules/user';
import { useEventListener } from '@vft/use';

const userStore = useUserStore();

const { go } = useRouterHelper();

const loading = ref(false);

function logout() {
  loading.value = true;
  userStore.logout().finally(() => loading.value = false);
}

const popoverRef = ref();
const visible = ref(false);

const themeColorRef = ref();
const currentMouseRef = ref();
const popoverReferenceRef = ref();

// popover mouseleave
nextTick(() => {
  useEventListener(popoverRef.value?.popperRef?.contentRef, 'mouseleave', () => {
    if (!themeColorRef.value?.colorPickerRef?.showPicker && !popoverReferenceRef.value.contains(currentMouseRef.value)) {
      hide();
    }
    currentMouseRef.value = null;
  }, undefined, {
    wait: 100
  });

  useEventListener(popoverRef.value?.popperRef?.contentRef, 'mouseenter', (e) => {
    currentMouseRef.value = e.target;
  });
});


const onMouseLeave = useDebounceFn((e) => {
  const targetEleClassList = Array.from((e?.toElement || e?.relatedTarget)?.classList || []);
  if (!popoverRef.value?.popperRef?.contentRef.contains(currentMouseRef.value) && (!(targetEleClassList?.includes('vft-tabs') || targetEleClassList.includes('user-popover')))) {
    hide();
  }
  currentMouseRef.value = null;
}, 100);

function onMouseEnter (e) {
  currentMouseRef.value = e.target;
  visible.value = true;
}

// color picker is show and click outside
function onClickOutside(e) {
  if (!popoverRef.value?.popperRef?.contentRef?.contains(e?.target)) {
    hide();
  }
}

function hide() {
  useTimeoutFn(() => {
    visible.value = false;
  }, 40);
}
</script>

<template>
  <vft-popover
    ref="popoverRef"
    :width="380"
    v-model:visible="visible"
    :showArrow="false"
    :offset="4"
    popperClass="user-popover"
    transition="vft-zoom-in-top"
    placement="bottom-start">
    <template #reference>
      <div ref="popoverReferenceRef" @mouseleave="onMouseLeave" @mouseenter="onMouseEnter">
        <user-info @click="go(LINK_PROFILE_ACCOUNT)"/>
      </div>
    </template>
    <div class="content">
      <div class="header">
        <div class="flex justify-between">
          <user-info :max-width="200" @click="go(LINK_PROFILE_ACCOUNT)">
            <vft-icon icon="ico-ep:arrow-right"/>
          </user-info>
          <div class="flex flex-col align-center">
            <theme-change/>
            <theme-color @color-change="hide" @click-outside="onClickOutside" ref="themeColorRef"
                         class="mt-5px" v-model:visible="visible"/>
          </div>
        </div>
        <div class="w-full">
          <div class="h-60px w-full flex-center">
            <vft-button @click="logout" :loading="loading" class="mt-10px">退出登录</vft-button>
          </div>
        </div>
      </div>
    </div>
  </vft-popover>
</template>

<style lang="scss">
.user-popover {
  padding: 0 !important;

  .content {
    padding: 10px !important;
  }
}
</style>
