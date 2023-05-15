<script lang="tsx" setup>
import SearchContent from '@/components/search/search-content.vue';
import { LINK_HOME } from '@/router/constants';
import setting from '@/setting';
import User from './components/user.vue';
import { generateCssVars } from 'vft';

const headerProps = computed(() => {
  return {
    logoCfg: {
      logo: setting.logo.src,
      title: setting.logo.title,
      jumpPath: LINK_HOME
    }
  };
});

const searchValue = ref('');
const visible = ref(false);

const searchContentRef = ref();
const horizontalMenuRef = ref();

function handleChangeTab(e) {
  searchContentRef.value.changeTab(e);
}

const isInSubMenu = computed(() => horizontalMenuRef.value?.isInSubMenu);

const headerList = [
  {
    title: 'Vft',
    children: [
      { title: '01.开发流程', path: '/pages/4989447221' }
    ]
  },
  // {
  //   title: '前端',
  //   children: [
  //     { title: 'JavaScript', path: '/pages/e73371' },
  //     { title: 'HTML', path: '/pages/a590ef' },
  //     { title: 'CSS', path: '/pages/68df9f' },
  //     { title: 'Vue', path: '/pages/35cea8' },
  //     { title: 'Vite', path: '/pages/62d680' },
  //     { title: 'Uniapp', path: '/pages/d32c2a' },
  //     { title: 'Node', path: '/pages/77cd19' },
  //     { title: '小程序', path: '/pages/8b11c4' },
  //     { title: 'TypeScript', path: '/pages/b08520' },
  //     { title: 'Git', path: '/pages/4d49c0' },
  //     { title: '打包工具', path: '/pages/4d49c0' },
  //     { title: 'windiCss', path: '/pages/312c48' },
  //     { title: '其他', path: '/pages/0ad63e' }
  //   ]
  // },
  // {
  //   title: '技术工具',
  //   children: [
  //     { title: '开发工具', path: '/pages/3568fb' },
  //     { title: '实用技巧', path: '/pages/20bced' },
  //     { title: 'MAC 相关', path: '/pages/fd06b6' },
  //     { title: 'LINUX 相关', path: '/pages/d1f07c' },
  //     { title: 'windows相关', path: '/pages/679724' },
  //     { title: 'chrome 相关', path: '/pages/3c6e64' },
  //     { title: '博客相关', path: '/pages/6221cb ' },
  //     { title: '资源管理', path: '/pages/ee80ca' }
  //   ]
  // },
  // {
  //   title: '数据结构与算法',
  //   children: [
  //     { title: '算法基础', path: '/pages/28cd14' },
  //     { title: 'leetCode题目示例', path: '/pages/944228' }
  //   ]
  // },
  // {
  //   title: '面试',
  //   children: [
  //     { title: 'js基础', path: '/pages/6ac22c' },
  //     { title: 'css基础', path: '/pages/770db6' }
  //   ]
  // },
  // {
  //   title: '数据库',
  //   path: '/database',
  //   children: [
  //     { title: 'mongoDB', path: '/pages/893f93' }
  //   ]
  // },
  // {
  //   title: '索引',
  //   children: [
  //     { title: '分类', path: '/category' },
  //     { title: '标签', path: '/tags' },
  //     { title: '归档', path: '/archives' }
  //   ]
  // },
  // {
  //   title: '网站',
  //   path: '/pages/website/'
  // },
  {
    title: '留言板',
    path: '/blog/message-boards'
  }
  // {
  //   title: '关于',
  //   path: '/pages/about/'
  // }
];

const menuStyle = generateCssVars({
  'bg-color': 'transparent',
  'sub-menu-bg-color': 'transparent',
  'border-bottom': 'none'
}, 'menu');
</script>

<template>
  <vft-header-layout v-bind="headerProps">
    <template #left>
       <vft-horizontal-menu :style="menuStyle" :subMenuCfg="{showArrow: false}" :menus="headerList"/>
    </template>
    <template #right>
      <div class="search-content" @keydown="handleChangeTab">
        <vft-search
          v-model:model-value="searchValue"
          :popoverCfg="{'popper-class': 'app-search-popover'}"
          :width="200"
          :active-width="300"
          placeholder="请输入关键字"
        >
          <search-content ref="searchContentRef" v-model:visible="visible"
            :search-value="searchValue"/>
        </vft-search>
      </div>
      <user class="user"/>
    </template>
    <template #bottom>
      <vft-multiple-tabs :tabsStyle="generateCssVars({
      'item-hover-bg-color': 'white',
      'item-active-color': 'black',
      'item-active-bg-color': 'white',
      }, 'tabs')"
        :canDrag="setting.multiTabsSetting.canDrag"
      />
    </template>
  </vft-header-layout>
  <vft-overlay :mask="isInSubMenu" onlyNode class="!z-99"/>
</template>

<style lang="scss" scoped>
.header-menu {
  :deep(.vft-horizontal-menu) {
    .vft-horizontal-menu__tile {
      margin-left: -4px;
      box-shadow: none;
      border: none;
      border-bottom: getCssVar('border');
      border-radius: 0;
    }

    .vft-horizontal-menu__normal {
      box-shadow: none;
      border: none;
      border-radius: 0;
    }

    .vft-sub-menu__text {
      padding-right: 5px;
    }

    .vft-menu-popup-item:not(.is-disabled) {
      &:hover {
        color: $primary-color;
      }
    }

    .item-con {
      white-space: normal;
    }

    .vft-menu-popup-item {
      color: black;
    }

    .item-con {
      white-space: normal;
    }

    .vft-sub-menu {
      .vft-sub-menu__title {
        line-height: 1;

        .vft-sub-menu__text {
          font-size: 16px;
        }
      }
    }


    .vft-sub-menu.is-in-popup {
      .vft-sub-menu__title {
        .vft-sub-menu__text {
          color: black;
          font-size: 14px;
        }
      }
    }


    .vft-sub-menu__0.is-opened {
      background-color: white;

      > .vft-sub-menu__title {
        color: $primary-color !important;
      }
    }

    .vft-menu-popup-item * {
      vertical-align: middle;
    }
  }
}
</style>
