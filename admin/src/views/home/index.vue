<script lang="ts" setup>
const initArr = reactive([
  { car: 'active bg-blue-100', bit: [5, 6, 7, 8] },
  { car: 'active bg-pink-100', bit: [61] },
  { car: 'active bg-green-100', bit: [47, 48, 49] },
  { car: 'active bg-red-100', bit: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] }
]);

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

function differenceArr(arr1: any[], arr2: any[]): any {
  // 判断参数
  if (arr1.length === 0) {
    return [];
  }
  if (arr2.length === 0) {
    return arr1.slice();
  }
  return arr1.filter((item) => !arr2.includes(item));
}

const isDrag = ref(false);
const isDragIndex = ref();

function handleDragEnter(data) {
  isDrag.value = true;
  const startIndex = Number(data.fromElement?.innerText || data.target?.innerText);
  const endIndex = Number(data.toElement.innerText);

  if (startIndex !== endIndex) {
    let otherBits: number[] = [];

    for (const item of initArr) {
      for (const subitem of item.bit) {
        otherBits.push(subitem);
      }
    }

    for (let i = 0; i < initArr?.length; i++) {

      const _index = initArr[i].bit.findIndex((item) => item === startIndex);
      if (_index >= 0) {
        const result = differenceArr(otherBits, initArr[i].bit);

        console.log(result, endIndex, result.includes(endIndex));
        if (result.includes(endIndex)) {
          isDrag.value = false;
        	return;
        }

        const new_arr = initArr[i].bit.map((item) => {
          item = item + endIndex - startIndex;
          return item;
        });

        const whetherToCross = new_arr.some(item => {
          return result.includes(item);
        });

        if (!whetherToCross) {
          isDragIndex.value = endIndex;

          initArr[i].bit = new_arr;
        }
        return;
      }
    }
  }
}

function handleDragEnd () {
  isDrag.value = false;
}
</script>

<template>
  <div class="container">
    <div :class="classes(item)" :draggable="!isDrag"
      @dragenter.prevent="handleDragEnter"
      @dragend="handleDragEnd"
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
    cursor: move;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
