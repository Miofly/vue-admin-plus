<script setup lang="ts">
import { LINK_PROFILE_ACCOUNT } from '@/router/routes/user';
import { useUserStore } from '@/store/modules/user';
import { generateCssVars } from 'vft';
import UserInfo from '@/components/user-info.vue';
import ThemeChange from '@/components/theme-change.vue';

const userStore = useUserStore();

const style = generateCssVars({
  'base-level-padding': 0,
  'item-height': '48px',
  'text-color': '#111'
}, 'menu');

const { go } = useRouterHelper();

const loading = ref(false);

function logout () {
  loading.value = true;
  userStore.logout().finally(() => loading.value = false);
}
</script>

<template>
  <vft-popover
    :width="380"
    :showArrow="false"
    :offset="4"
    popperClass="user-popover"
    transition="vft-zoom-in-top"
    placement="bottom-start">
    <template #reference>
      <user-info @click="go(LINK_PROFILE_ACCOUNT)"/>
    </template>
    <div class="content" :style="style">
      <div class="header">
        <div class="flex justify-between">
          <user-info :max-width="200" @click="go(LINK_PROFILE_ACCOUNT)">
            <vft-icon icon="ico-ep:arrow-right" />
          </user-info>
          <theme-change/>
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

<style scoped lang="scss">
.content {
  .name {
    max-width: 145px;
    color: #333;
    font-weight: 500;
    font-size: 14px;
    word-break: break-all;
    @include line-clamp(1)
  }

  .header-top {
    padding-bottom: 15px;
    border-bottom: 1px solid #F6F6F6;
  }

  .link-top-infos {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #F6F6F6;

    .item {
      cursor: pointer;

      .title {
        margin-top: 10px;
        font-weight: 400;
        font-size: 14px;
        color: #111;
      }
    }

  }

  .link-infos {
    .item {
      cursor: pointer;
      height: 53px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #F6F6F6;
      transition: all 0.2s;
      padding: 0 10px;

      .title {
        font-weight: 400;
        font-size: 14px;
        color: #111;
        margin-left: 16px;
      }

      &:hover {
        background-color: #e8f3fe;
      }
    }
  }
}

.compTitle {
  font-weight: 400;
  font-size: 12px;
  margin-top: 4px;
  color: #8B8C8C;
  max-width: 145px;
  word-break: break-all;
  @include line-clamp(1);
}
</style>
