<script setup lang="ts">
import { generateCssVars } from 'vft';
import MenuItem from './menu-item.vue';
import './menu.scss';

export interface ListItemProps {
  title: string;
  path?: string;
  children: ListItemProps[];
}

export interface MenuHorizontalProps {
  list: ListItemProps[];
  showDir?: boolean;
  maxRowLength?: false | number;
  dirItemOrder?: number[][];
}

const {
  list,
  showDir = true,
  maxRowLength = 8,
  dirItemOrder = [[0], [1], [2], [3, 4], [5, 6], [7, 8]]
} = defineProps<MenuHorizontalProps>();

const menuStyle = generateCssVars({
  bgColor: 'transparent',
  'sub-menu-bg-color': 'transparent',
  textColor: 'white',
  activeColor: 'white',
  'border-bottom': 'none',
  'hover-bg-color': 'white',
  'focus-bg-color': 'transparent',
  'focus-text-color': 'white'
}, 'menu');

const gridStyle = computed(() => {
  return (item) => {
    return { 'grid-template-rows': `repeat(${Math.min(list?.[item]?.children?.length || 0, maxRowLength ? maxRowLength : list?.[item]?.children?.length)}, auto)` };
  };
});

const { go } = useRouterHelper();

const _list = computed(() => showDir ? [{ title: '目录' }].concat(list) : list);

const handeleItemClick = (item) => {
  go(item.path);
};
</script>

<template>
  <vft-menu mode="horizontal" class="h-full" :style="menuStyle">
    <template v-for="(item, index) in _list" :key="index">
      <vft-sub-menu
        v-if="(showDir && index === 0) || item.children?.length"
        :toolTipCfg="{ showArrow: true }" :showArrow="false" :index="item.title"
        :popper-class="[showDir && index === 0 ? 'unique-menu-popover-dir': '', 'unique-menu-popover']"
      >
        <template #title>{{ item.title }}</template>
        <template v-if="showDir && index === 0">
          <div v-for="(sub_item, sub_index) in dirItemOrder" :key="sub_index" class="content-main">
            <template v-for="(child_item, child_index) in sub_item" :key="child_index">
              <div class="content-col" v-if="list?.[child_item]">
                <span class="title">{{ list[child_item]?.title }}</span>
                <div v-if="list[child_item]?.children?.length" class="content"
                  :style="gridStyle(child_item)">
                  <menu-item is-dir :list="list[child_item].children"
                    :parentId="list?.[child_item]?.title" />
                </div>
              </div>
            </template>
          </div>
        </template>
        <menu-item v-else :list="item.children || []" />
      </vft-sub-menu>
      <vft-menu-item v-else className="item" :index="item.title"
        @click="() => handeleItemClick(item)">
        {{ item.title }}
      </vft-menu-item>
    </template>
  </vft-menu>
</template>

