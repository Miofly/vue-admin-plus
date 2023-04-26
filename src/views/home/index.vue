<script lang="ts" setup>
import { useSortable } from '@vft/use';
import { isNullOrUndefined } from '@vft/utils';

const containerRef = ref();

const initArr = reactive([
  { car: 'active bg-blue-100', bit: [5] },
  { car: 'active bg-pink-100', bit: [61] },
  { car: 'active bg-green-100', bit: [47, 48, 49] },
  { car: 'active bg-red-100', bit: [10, 11, 12, 13, 14] }
]);

const { initSortable } = useSortable(containerRef, {
  draggable: '.item',
  handle: '.active',
  fallbackTolerance: 3,
  selectedClass: 'selected',
  onChange: (evt) => {
    const { oldIndex, newIndex } = evt;

    console.log('这里执行了吗');
    for (let i = 0; i < initArr?.length; i++) {
      const _index = initArr[i].bit.findIndex((item) => item === oldIndex + 1);

      if (_index >= 0) {
        console.log(11233);

        initArr[i].bit = initArr[i].bit.map(item => {
          item = item + newIndex - oldIndex;
          return item;
        });
        return;
      }
    }
  },
  onEnd: (evt) => {
    const { oldIndex, newIndex } = evt;
    if (isNullOrUndefined(oldIndex) || isNullOrUndefined(newIndex) || oldIndex === newIndex) {
      return;
    }
  }
});

nextTick(() => {
  initSortable();
});

const classes = computed(() => {
  const colorStr = (index, num) => initArr[num].bit.filter((i) => i === index)?.length ? initArr[num].car : '';

	return (index) => {
    return [
      'item',
      colorStr(index, 0),
      colorStr(index, 1),
      colorStr(index, 2),
      colorStr(index, 3)
    ];
  };
});
</script>

<template>
  <div class="container" ref="containerRef">

    <div :class="classes(item)"
         v-for="(item, index) in 64" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(8, 50px);
  grid-auto-rows: 50px;

  .item {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
