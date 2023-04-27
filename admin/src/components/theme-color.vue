<script setup lang="ts">
import setting from '@/setting';
import { useSetting } from '@/use';
import { setCssVar } from 'vft';
import { isNumber } from '@vft/utils';

const emit = defineEmits(['click-outside', 'color-change']);

const { getThemeColor, changeThemeColor } = useSetting();

const activeIndex = ref(0);

const initColor = computed(() => setting.themeColorPalette[activeIndex.value]);

const defaultColor = ref(getThemeColor.value || initColor.value);

function onChangeColor (color, index) {
  if (isNumber(index)) {
    activeIndex.value = index;
    changeThemeColor(color);
  }
  if (!color) {
    color = initColor.value;
  }
  defaultColor.value = initColor.value;
  setCssVar('primary-color', color);
}

const colorPickerRef = ref();

function clickOutside (e) {
  emit('click-outside', e);
}

function onColorChange (color) {
  changeThemeColor(color);
  defaultColor.value = color || initColor.value;
  emit('color-change');
}

defineExpose({
  colorPickerRef
});
</script>

<template>
  <div class="color-container">
    <span class="color-item" @click="onChangeColor(item, index)"
      :style="{backgroundColor: item}"
      v-for="(item, index) in setting.themeColorPalette" :key="index" />
    <vft-color-picker @click-outside="clickOutside" @change="onColorChange"
      ref="colorPickerRef" popper-class="vft-color-picker-popover"
      @active-change="onChangeColor" v-model="defaultColor" size="small" />
  </div>
</template>

<style scoped lang="scss">
.color-container {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .color-item {
    width: 16px;
    height: 16px;
    display: block;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 2px;
  }

  :deep(.#{$namespace}-color-picker) {
    .#{$namespace}-color-picker__trigger {
      border: none;
      margin: 0 -4px;
    }

    .#{$namespace}-color-picker__color-inner {
      border-radius: 2px;
    }
  }
}
</style>
