<script setup lang="ts">
import { LINK_PROFILE_ACCOUNT } from '@/router/routes/user';
import { useUserStore } from '@/store/modules/user';
import { useUserInfo } from '@/use/use-user-info';
import { generateCssVars } from 'vft';

const userStore = useUserStore();

const style = generateCssVars({
  'base-level-padding': 0,
  'item-height': '48px',
  'text-color': '#111'
}, 'menu');

const { getUserName, getUserAvatar } = useUserInfo();

console.log(getUserAvatar, '===');

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
      <div class="flex justify-start align-center user-info">
        <vft-avatar :src="getUserAvatar"
          :icon="{icon: 'ico-carbon:user-avatar-filled', color: 'white'}" :size="30" />
        <span class="name">{{ getUserName }}</span>
      </div>
    </template>
    <div class="content" :style="style">
      <div class="header">
        <div class="flex justify-between align-center header-top">
          <div class="flex justify-start">
            <vft-avatar :src="getUserAvatar"
              :icon="{icon: 'ico-carbon:user-avatar-filled', color: '#2196f3'}" :size="50" />
            <div class="ml-8px flex flex-col justify-center">
              <div class="flex align-center cursor-pointer" :title="getUserName" @click="go(LINK_PROFILE_ACCOUNT)">
                <span class="name">{{ getUserName }}</span>
                <vft-icon icon="ico-ep:arrow-right" />
              </div>
            </div>
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

.user-info {
  width: 111px;
  height: 40px;
  padding: 8px 12px;
  color: white;

  .name {
    font-weight: 400;
    font-size: 13px;
    margin-left: 6px;
    word-break: break-all;
    @include line-clamp
  }

  .vft-avatar {
    flex: none;
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
