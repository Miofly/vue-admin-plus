<script lang="ts" setup>
const initArr = reactive([
  { car: 'active bg-blue-100', bit: [5, 6, 7, 8] },
  { car: 'active bg-pink-100', bit: [61, 62, 63] },
  { car: 'active bg-purple-100', bit: [55] },
  { car: 'active bg-green-100', bit: [47, 48, 49] },
  { car: 'active bg-red-100', bit: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] }
]);

const classes = computed(() => {
  const colorStr = (index, num) => initArr[num].bit.filter((i) => i === index)?.length ? initArr[num].car : '';

  return (index) => {
    const arr: any[] = [];
    for (let i = 0; i < initArr?.length; i++) {
      arr.push(colorStr(index, i));
    }

    return [
      'item',
      ...arr
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

const maxLength = 64;

const whetherToCross = ref();
const result_arr = ref<number[]>([]);
const isDrag = ref(false);

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

        const new_arr = initArr[i].bit.map((item) => {
          item = item + endIndex - startIndex;
          return item;
        });

        console.log(new_arr);

        if (!result_arr.value?.[0]) {
          result_arr.value[0] = new_arr;
        }
        result_arr.value[1] = result_arr.value[0];
        result_arr.value[0] = new_arr;

        initArr[i].bit = new_arr;

        whetherToCross.value = new_arr.some(item => {
          return result.includes(item) || item < 1 || item > maxLength;
        });
        return;
      }
    }
  }
}

watch(() => result_arr.value, (val, oldValue) => {
  console.log(val, oldValue);
}, {
  deep: true
});

const handleDragEnd = () => {
  isDrag.value = false;
};

</script>

<template>
  <div class="container">
    <div :class="classes(item)"
      :draggable="true"
      @dragenter="handleDragEnter"
      @dragend="handleDragEnd"
      v-for="(item, index) in maxLength" :key="index">
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
