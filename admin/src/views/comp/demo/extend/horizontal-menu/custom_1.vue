<script lang="tsx" setup>
import { generateCssVars } from 'vft';
import MenuData from './menu.json';

const data = MenuData.data.filter((item) => {
  return item.pid !== 0;
});

function addPidToChildren(data) {
  // 遍历JSON数据
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const pid = item.id;

    // 将pid放到对应的子级中
    for (let j = 0; j < data.length; j++) {
      const child = data[j];
      if (child.pid === pid) {
        if (!item.children) {
          item.children = [];
        }
        child.pid = pid;
        item.children.push(child);
      }
    }
  }

  return data;
}

const newData = addPidToChildren(data).filter((item) => item.pid === 1);

const menuStyle = generateCssVars({
  'bg-color': 'transparent',
  'sub-menu-bg-color': 'transparent',
  'border-bottom': 'none'
}, 'menu');
</script>

<template>
  <div class="header-menu h-40px flex align-center" :style="{...menuStyle,
   '--vft-popper-border-radius': '10px'}">
    <vft-horizontal-menu :menus="newData"
      :style="menuStyle"
      :subMenuCfg="{
        toolTipCfg: {
          showArrow: true
        }
      }"
      :attr-mapping="{
         index: 'id',
         title: 'name'
      }"/>
  </div>

</template>
