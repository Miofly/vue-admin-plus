<script lang="ts" setup>
import { computed } from 'vue';

export interface IconProps {
  /** 图标名称或图片链接 */
  icon: string;
  /** 图标大小 */
  size?: string | number;
  /** 图标颜色 */
  color?: string;
  rotate?: boolean;
  rotateSpeed?: number;
  pointer?: boolean;
  hoverColor?: string
}

const {
  color,
  size,
  icon,
  rotate,
  pointer,
  rotateSpeed = 2,
  hoverColor
} = defineProps<IconProps>();

const ns = /* hoist-static*/ 'test';

defineOptions({
  name: ns
});

const isImage = (name?: string) => name?.includes('/');
const isImageIcon = computed(() => isImage(icon));
</script>

<template>
  <div>test</div>
</template>
