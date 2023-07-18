<template>
  <vft-row class="demo-avatar demo-basic">
    <vft-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <vft-avatar :size="50" :src="circleUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <vft-avatar :size="size" :src="circleUrl" />
        </div>
      </div>
    </vft-col>
    <vft-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <vft-avatar shape="square" :size="50" :src="squareUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <vft-avatar shape="square" :size="size" :src="squareUrl" />
        </div>
      </div>
    </vft-col>
  </vft-row>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue';

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const
});

const { circleUrl, squareUrl, sizeList } = toRefs(state);
</script>

<style scoped>
.demo-basic {
  text-align: center;
}
.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--vft-text-secondary-color);
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-basic .block:not(:last-child) {
  border-right: 1px solid var(--vft-border-color);
}
.demo-basic .block {
  flex: 1;
}
.demo-basic .vft-col:not(:last-child) {
  border-right: 1px solid var(--vft-border-color);
}
</style>
