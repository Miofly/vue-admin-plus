<script setup lang="tsx">
import type { MenuHorizontalProps } from './index.vue';

interface Props {
  list: MenuHorizontalProps;
  isDir?: boolean
  showDisable?: boolean
  parentId?: number | string
}

const {
  list,
  isDir = false,
  parentId = ''
} = defineProps<Props>();

const { go } = useRouterHelper();

const handeleItemClick = (item) => {
  go(item.path);
};
</script>

<template>
  <template v-for="item in list" :key="isDir ? parentId + item.path : item.path">
    <vft-menu-item
      @click="() => handeleItemClick(item)"
      className="item" :index="isDir ? parentId + item.title : item.title"
    >
      {{ item?.title }}
    </vft-menu-item>
  </template>
</template>
