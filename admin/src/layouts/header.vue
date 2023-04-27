<script lang="ts" setup>
import { LINK_HOME } from '@/router/constants';
import setting from '@/setting';
import { isNumber } from '@vft/utils';
// import HeaderMenu from './components/menu/index.vue';
import User from './components/user.vue';

let menuRef = ref();

const headerProps = computed(() => {
  return {
    logoCfg: {
      logo: setting.logo.src,
      title: setting.logo.title,
      jumpPath: LINK_HOME
    }
  };
});

const showMask = computed(() => {
  return isNumber(menuRef.value?.activeIndex);
});

// const headerList = [
//   {
//     title: '前端',
//     children: [
//       { title: 'JavaScript', path: '/pages/e73371' },
//       { title: 'HTML', path: '/pages/a590ef' },
//       { title: 'CSS', path: '/pages/68df9f' },
//       { title: 'Vue', path: '/pages/35cea8' },
//       { title: 'Vite', path: '/pages/62d680' },
//       { title: 'Uniapp', path: '/pages/d32c2a' },
//       { title: 'Node', path: '/pages/77cd19' },
//       { title: '小程序', path: '/pages/8b11c4' },
//       { title: 'TypeScript', path: '/pages/b08520' },
//       { title: 'Git', path: '/pages/4d49c0' },
//       { title: '打包工具', path: '/pages/4d49c0' },
//       { title: 'windiCss', path: '/pages/312c48' },
//       { title: '其他', path: '/pages/0ad63e' }
//     ]
//   },
//   {
//     title: '技术工具',
//     children: [
//       { title: '开发工具', path: '/pages/3568fb' },
//       { title: '实用技巧', path: '/pages/20bced' },
//       { title: 'MAC 相关', path: '/pages/fd06b6' },
//       { title: 'LINUX 相关', path: '/pages/d1f07c' },
//       { title: 'windows相关', path: '/pages/679724' },
//       { title: 'chrome 相关', path: '/pages/3c6e64' },
//       { title: '博客相关', path: '/pages/6221cb ' },
//       { title: '资源管理', path: '/pages/ee80ca' }
//     ]
//   },
//   {
//     title: '数据结构与算法',
//     children: [
//       { title: '算法基础', path: '/pages/28cd14' },
//       { title: 'leetCode题目示例', path: '/pages/944228' }
//     ]
//   },
//   {
//     title: '面试',
//     children: [
//       { title: 'js基础', path: '/pages/6ac22c' },
//       { title: 'css基础', path: '/pages/770db6' }
//     ]
//   },
//   {
//     title: '数据库',
//     path: '/database',
//     children: [
//       { title: 'mongoDB', path: '/pages/893f93' }
//     ]
//   },
//   {
//     title: '索引',
//     children: [
//       { title: '分类', path: '/category' },
//       { title: '标签', path: '/tags' },
//       { title: '归档', path: '/archives' }
//     ]
//   },
//   {
//     title: '网站',
//     path: '/pages/website/'
//   },
//   {
//     title: '留言板',
//     path: '/blog/message-boards'
//   },
//   {
//     title: '关于',
//     path: '/pages/about/'
//   }
// ];

const searchContentRef = ref();

function handleChangeTab (e) {
  searchContentRef.value.changeTab(e);
}
</script>

<template>
  <vft-overlay :mask="showMask" onlyNode class="fixed left-0 right-0 z-12">
    <vft-header-layout v-bind="headerProps" :showMask="showMask">
      <template #left>
<!--        <header-menu class="!ml-10px" :list="headerList" />-->
      </template>
      <div class="flex align-center h-40px">
        <div class="search-content" @keydown="handleChangeTab">
          Todo
        </div>
        <user class="user" />
      </div>
      <template #bottom v-if="setting.multiTabsSetting.show">
        <vft-multiple-tabs :canDrag="setting.multiTabsSetting.canDrag" />
      </template>
    </vft-header-layout>
  </vft-overlay>
</template>

<style lang="scss">
.vft-header-layout__left {
  min-width: $header-left-min-width;
}
</style>

<style lang="scss" scoped>
:deep(.vft-header-layout__right) {
  //align-items: center;
  //flex-shrink: 0;
}
</style>
