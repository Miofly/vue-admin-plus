<script setup lang="ts">
import { APP_SEARCH_HISTORY } from '@/constants';
import { getAllUrlList } from '@/constants/navigation-urls/utils';
import { ls } from '@/utils';
import { EVENT_CODE } from '@vft/constants';
import { VNode, pick, highlight } from '@vft/utils';
import SearchRecord from './record.vue';

interface Props {
  searchValue: string;
  visible: boolean;
}

const {
  searchValue
} = defineProps<Props>();

const emit = defineEmits(['update:visible']);

const route = useRoute();

let activeIndex = $ref(0);
let loading = $ref(false);

const { allRoutesInfo, go } = useRouterHelper();

const allSearchList = [...allRoutesInfo, ...getAllUrlList()];

const isMatch = (value) => value.toUpperCase().includes(searchValue.toUpperCase());

const highlightContent = (value) => highlight(value, [searchValue]);
// const highlightContent = (value) => highlight(value, [...searchValue.split(''), searchValue]);

const searchList = computed(() => {
  return searchValue ? allSearchList.filter(item => {
    if (item.sourceType === 'url') {
      return isMatch(item.title) || isMatch(item.path);
    }

    return isMatch(item.title);
  }) : [];
});

let his_list_storage = ls.get(APP_SEARCH_HISTORY);

const his_list = ref(his_list_storage);

watch(() => his_list.value, (val) => {
  ls.set(APP_SEARCH_HISTORY, val);
}, {
  deep: true
});

function handleJump (itemInfo, index) {
  activeIndex = index;
  go(itemInfo.path);
  emit('update:visible', false);
  const storageItem = pick(itemInfo, ['path', 'title']);

  const currentIndex = his_list.value?.findIndex(item => {
    return item.path === itemInfo.path;
  });

  if (currentIndex && currentIndex !== -1) {
    his_list.value.splice(currentIndex, 1);
  } else if (currentIndex === 0) {
    return;
  }

  if (!his_list.value?.length) {
    his_list.value = [storageItem];
  }

  if (his_list.value?.length >= 10) {
    his_list.value.splice(his_list.value?.length - 1, 1);
  }

  his_list.value.unshift(storageItem);
}

const changeTab = (e: KeyboardEvent) => {
  const code = e.code;
  const { up, down, left, right, enter } = EVENT_CODE;
  if (![up, down, left, right, enter].includes(code)) return;

  const searchItem = document.querySelectorAll<HTMLDivElement>('.search-item');
  const tabList = Array.from(searchItem);

  if (tabList?.length) {
    if (code === enter) {
      handleJump(searchList.value[activeIndex], activeIndex);
      return;
    }
    // 左右上下键更换tab
    if (code === left || code === up) {
      if (activeIndex === 0) {
        activeIndex = tabList.length - 1;
      } else {
        activeIndex--;
      }
    } else {
      if (activeIndex < tabList.length - 1) {
        // not last
        activeIndex++;
      } else {
        activeIndex = 0;
      }
    }
    searchItem[activeIndex].scrollIntoView(false);
  }
};

watch(() => searchValue, () => {
  loading = true;
  setTimeout(() => {
    loading = false;
  }, 200);
  activeIndex = 0;
});

function handleClose (index) {
  his_list.value.splice(index, 1);
}

defineExpose({
  changeTab
});
</script>

<template>
  <div @keydown="changeTab">
    <template v-if="searchList?.length">
      <div class="search-content-container" v-spin="loading">
        <div :class="['search-item', {'active': activeIndex === index}]"
          @click="handleJump(item, index)" v-for="(item, index) in searchList" :key="index">
          <div class="title">
            <v-node :content="highlightContent(item.title)" />
          </div>
          <div class="url" v-if="item.sourceType === 'url'">
            <v-node :content="highlightContent(item.path)" />
          </div>
          <vft-tag class="tag" size="small"
            v-for="(sub_item, sub_index) in item.category" :key="sub_index">
            {{ sub_item }}
          </vft-tag>
        </div>
      </div>
    </template>
    <template v-else-if="searchValue && !searchList?.length">
      <vft-empty desc="没有相关数据，换一个关键词试试" />
    </template>
    <template v-else>
      <search-record showEmpty @close="handleClose" :list="his_list" :key="route.fullPath"
        @click="handleJump" />
      <search-record class="mt-15px" title="热门搜索" :showEmpty="false" :closable="false"
        @click="handleJump" :list="his_list" :key="route.fullPath" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.search-content-container {
  height: 500px;
  @include overlay();
  padding-right: 15px;

  .search-item {
    padding: 15px;
    border-bottom: getCssVar('border');
    box-shadow: getCssVar('box-shadow-lighter');
    margin-bottom: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover, &.active {
      background-color: $primary-color;
      box-shadow: getCssVar('box-shadow-light');

      .title,.url {
        color: getCssVar('theme-color');
      }
    }

    .title {
      margin-bottom: 10px;

      &:hover {
        text-decoration: underline;
      }
    }

    .url {
      color: getCssVar('text-secondary-color');
      @include line-clamp;
      margin-bottom: 10px;

      &:hover {
        text-decoration: underline;
      }
    }

    .tag {
      margin-right: 5px;
    }
  }
}
</style>
