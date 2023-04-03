<template>
  <template v-for="src in imgList" :key="src">
    <img :src="src" v-show="false" />
  </template>
  <vft-button @click="fireVueError" type="primary">
    点击触发vue错误
  </vft-button>
  <vft-button @click="fireScriptError" type="primary">
    点击触发异步语法错误
  </vft-button>
  <vft-button @click="fireResourceError" type="primary">
    点击触发资源加载错误
  </vft-button>
</template>

<script lang="tsx" setup>
import { h, reactive, render } from 'vue';
import { useErrorLogStore } from '@vft/store';
import { VNode } from '@vft/utils';

// vue 报错演示
function fireVueError () {
  // null.a = 3;
  // throw new Error('fire vue error!');
}


// 资源报错演示
const imgList = ref<string[]>([]);

function fireResourceError () {
  imgList.value.push(`${new Date().getTime()}.png`);
}

// script 错误演示
// setTimeout(() => {
//   fireScriptError();
// }, 1500);
//
// function fireScriptError () {
//   a.concat(111);
// }

function fireScriptError () {
  new Promise((resolve) => {
    // @ts-ignore
    a.concat(111);
    resolve(true);
  });
}

let test = ref('测试');

function handleClick () {
  console.log(1223);
}
const errorLogStore = useErrorLogStore();
</script>
