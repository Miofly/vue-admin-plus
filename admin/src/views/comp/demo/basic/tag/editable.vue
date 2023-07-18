<template>
  <vft-tag
    v-for="tag in dynamicTags"
    :key="tag"
    class="mx-1"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </vft-tag>
  <vft-input
    v-if="inputVisible"
    ref="InputRef"
    v-model="inputValue"
    class="ml-1 w-20"
    size="small"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
  />
  <vft-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
    + New Tag
  </vft-button>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';

const inputValue = ref('');
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const InputRef = ref();

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};
</script>
