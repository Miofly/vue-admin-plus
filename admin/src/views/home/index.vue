<script lang="ts" setup>
const containerRef = ref();

const initArr = reactive([
  { car: 'active bg-blue-100', bit: [5, 6, 7, 8] },
  { car: 'active bg-pink-100', bit: [61] },
  { car: 'active bg-green-100', bit: [47, 48, 49] },
  { car: 'active bg-red-100', bit: [20, 21, 22, 23, 24] }
]);

const startIndex = ref();
const endIndex = ref();

watch(()=> endIndex.value, () => {
  changeArr(startIndex.value, endIndex.value);
});

function changeArr (oldIndex, newIndex) {
  for (let i = 0; i < initArr?.length; i++) {
    const _index = initArr[i].bit.findIndex((item) => Number(item) === Number(oldIndex));

    console.log(_index, '===', newIndex, oldIndex);

    if (_index >= 0) {
      initArr[i].bit = initArr[i].bit.map((item) => {
        item = item + newIndex - oldIndex;
        return item;
      });
      console.log(initArr);
      return;
    }
  }
}

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


function handleDargEnter (data) {

  if (data.fromElement?.innerText || data.target?.innerText !== data.toElement.innerText) {
    startIndex.value = Number(data.fromElement?.innerText || data.target?.innerText);
    endIndex.value = Number(data.toElement?.innerText);
  }

}
</script>

<template>
  <div class="container" ref="containerRef">
    <div :class="classes(item)"  draggable="true" @dragenter="handleDargEnter"
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
