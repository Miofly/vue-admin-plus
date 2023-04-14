<script setup lang="tsx">
import ThemeChange from '@/components/theme-change.vue';
import ThemeColor from '@/components/theme-color.vue';
import UserInfo from '@/components/user-info.vue';
import { LINK_PROFILE_ACCOUNT, LINK_PROFILE_SYSTEM_SETTING } from '@/router/routes/user';
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

function onMouseEnter(e) {
  currentMouseRef.value = e.target;
  visible.value = true;
}

// color picker is show and click outside
function onClickOutside(e) {
  if (!popoverRef.value?.popperRef?.contentRef?.contains(e?.target) && !popoverReferenceRef.value.contains(e?.target)) {
    hide();
  }
}

function onClickUserInfo() {
  visible.value = !visible.value;
  go(LINK_PROFILE_ACCOUNT);
}

const list = reactive([
  {
    leftIcon: 'ico-fa6-solid:user-pen',
    text: '账号信息',
    path: LINK_PROFILE_ACCOUNT
  },
  {
    leftIcon: 'ico-uiw:setting',
    text: '系统设置',
    path: LINK_PROFILE_SYSTEM_SETTING
  }
]);

const route = useRoute();

const activeIndex = computed(() => list.findIndex(item => item.path === route.path));

function handleItemClick(data) {
  hide();
  go(data.path);
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
        <user-info @click.stop="onClickUserInfo"/>
      </div>
    </template>
    <div class="content">
      <div class="header">
        <user-info :max-width="200" @click="go(LINK_PROFILE_ACCOUNT)">
          <vft-icon icon="ico-ep:arrow-right"/>
        </user-info>
        <div class="theme">
          <theme-change/>
          <theme-color @color-change="hide" @click-outside="onClickOutside" ref="themeColorRef"
                       class="mt-5px" v-model:visible="visible"/>
        </div>
      </div>
      <div class="w-full">
        <vft-list-cell :activeIndex="activeIndex" :list="list" @item-click="handleItemClick"/>
        <div class="h-60px w-full flex-center">
          <vft-button @click="logout" :loading="loading" class="mt-10px">退出登录</vft-button>
        </div>
      </div>
    </div>
  </vft-popover>
</template>

<style lang="scss">
.user-popover {
  padding: 0 !important;

  .content {
    padding: 15px !important;

    .header {
      display: flex;
      justify-content: space-between;
      border-bottom: getCssVar('border');
      padding-bottom: 10px;

      .user-info {
        padding-left: 0;
      }

      .theme {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
}
</style>
