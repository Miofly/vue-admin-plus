<script setup lang="ts">
interface Props {
  list?: Array<any>;
  title?: string
  emptyDesc?: string;
  showEmpty?: boolean
  closable?: boolean
}

const {
  list,
  title = '历史记录',
  emptyDesc = '暂无搜索记录',
  showEmpty = true,
  closable = true
} = defineProps<Props>();

const emit = defineEmits(['close', 'click']);
</script>

<template>
  <div class="search-infos" v-if="list?.length">
    <p class="title">{{ title }}</p>
    <span class="record-list">
      <vft-tag type="info" @click="emit('click', item)"
        class="tag-item" @close.stop="emit('close', index)" :closable="closable" v-for="(item, index) in list"
        :key="index">{{ item.title }}
      </vft-tag>
    </span>
  </div>
  <vft-empty v-else-if="showEmpty" :desc="emptyDesc" />
</template>

<style scoped lang="scss">
.search-infos {
  .title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .record-list {
    :deep(.tag-item) {
      cursor: pointer;
      margin: 0 10px 10px 0;

      .vft-tag__content {
        &:hover {
          color: $primary-color
        }
      }
    }
  }
}
</style>
