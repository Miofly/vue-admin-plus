<script setup lang="ts">
import { useUserInfo } from '@/use/use-user-info';
import { addUnit } from '@vft/utils';

interface UserAvatarProps {
  color?: string;
  textColor?: string;
  size?: number;
  maxWidth?: number | string
  cursor?: boolean
}

const {
  color = 'white',
  textColor = 'black',
  size = 30,
  maxWidth = 150,
  cursor = true
} = defineProps<UserAvatarProps>();

const { getUserAvatar, getUserName } = useUserInfo();

const _maxWidth = computed(() => addUnit(maxWidth));
</script>

<template>
  <div :class="['user-info', {'cursor-pointer': cursor}]">
    <vft-avatar :src="getUserAvatar"
      :icon="{icon: 'ico-carbon:user-avatar-filled', color}"
      :size="size"
    />
    <span class="name" :style="{color: textColor}">{{ getUserName }}</span>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.user-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: v-bind(_maxWidth);
  min-width: 100px;
  height: 40px;
  padding: 8px 12px;

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
</style>
