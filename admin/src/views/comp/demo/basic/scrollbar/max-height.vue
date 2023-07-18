<template>
  <vft-button @click="add">Add Item</vft-button>
  <vft-button @click="onDelete">Delete Item</vft-button>
  <vft-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </vft-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const count = ref(3);

const add = () => {
  count.value++;
};
const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--vft-primary-color-light-9);
  color: var(--vft-primary-color);
}
</style>
