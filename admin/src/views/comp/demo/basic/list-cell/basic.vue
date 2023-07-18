<script setup lang="tsx">
import { generateCssVars } from 'vft';

const list = reactive([
  {
    leftIcon: 'ico-fa6-solid:user-pen',
    text: '账号信息'
  },
  {
    leftIcon: 'ico-uiw:setting',
    text: '系统设置'
  },
  {
    leftIcon: 'ico-uiw:setting',
    text: '主题设置',
    rightContent: <div onClick={customClick}>我是右侧自定义，点击试试</div>
  }
]);

function customClick() {
  alert(1);
}

const style = generateCssVars({
  'hover-bg-color': '#e5f3fd'
}, 'list-cell');

function handleItemClick(data, index) {
  console.log(data, index);
}
</script>

<template>
  <div :style="style">
    <vft-list-cell
      @item-click="handleItemClick"
      :cell-height="30"
      left-text-distance="15px"
      :activeIndex="1"
      :list="list"
    />
  </div>
  <br/>
</template>
