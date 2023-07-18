<script setup lang="ts">
import { generateCssVars } from 'vft';
import { recursion } from '@vft/utils';

const menuList = reactive([
  {
    id: '10',
    name: '一级菜单-1.0',
    status: 1,
    functions: [
      {
        id: '1020',
        name: '二级菜单-1.0-2.0',
        url: '',
        status: 1,
        functions: [
          {
            id: '102030',
            name: '三级菜单-1.0-2.0-3.0',
            url: '',
            status: 0
          },
          {
            id: '102031',
            name: '三级菜单-1.0-2.0-.3.1',
            url: '',
            status: 0
          }
        ]
      },
      {
        id: '1021',
        name: '二级菜单-1.0-2.1',
        url: '',
        status: 0
      },
      {
        id: '1022',
        name: '二级菜单-1.0-2.2',
        url: '',
        status: 0,
        functions: [
          {
            id: '102230',
            name: '三级菜单-1.0-2.2-3.0',
            url: '',
            status: 1
          },
          {
            id: '102231',
            name: '三级菜单-1.0-2.2-.3.1',
            url: '',
            status: 0
          }
        ]
      }
    ]
  },
  {
    id: '11',
    name: '一级菜单-1.1',
    status: 0,
    functions: [
      {
        id: '1120',
        name: '二级菜单-1.1-2.0',
        url: '',
        status: 0,
        functions: [
          {
            id: '112030',
            name: '三级菜单-1.1-2.0-3.0',
            url: '',
            status: 0
          },
          {
            id: '112031',
            name: '三级菜单-1.1-2.0-.3.1',
            url: '',
            status: 0
          }
        ]
      },
      {
        id: '1121',
        name: '二级菜单-1.1-2.1',
        url: '',
        status: 0
      }
    ]
  },
  {
    id: '12',
    name: '一级菜单-1.2',
    status: 1
  },
  {
    id: '13',
    name: '一级菜单-1.3',
    status: 0
  },
  {
    id: '14',
    name: '一级菜单-1.4',
    status: 1
  },
  {
    id: '15',
    name: '一级菜单-1.5',
    status: 0,
    functions: [
      {
        id: '1520',
        name: '二级菜单-1.5-2.0',
        url: '',
        status: 0
      },
      {
        id: '1521',
        name: '二级菜单-1.5-2.1',
        url: '',
        status: 0
      },
      {
        id: '1522',
        name: '二级菜单-1.5-2.2',
        url: '',
        status: 0
      },
      {
        id: '1523',
        name: '二级菜单-1.5-2.3',
        url: '',
        status: 0
      },
      {
        id: '1524',
        name: '二级菜单-1.5-2.4',
        url: '',
        status: 0
      },
      {
        id: '1525',
        name: '二级菜单-1.5-2.5',
        url: '',
        status: 0
      },
      {
        id: '1526',
        name: '二级菜单-1.5-2.6',
        url: '',
        status: 0
      },
      {
        id: '1527',
        name: '二级菜单-1.5-2.7',
        url: '',
        status: 0
      }
    ]
  },
  {
    id: '16',
    name: '一级菜单-1.6',
    status: 1,
    functions: [
      {
        id: '1620',
        name: '二级菜单-1.6-2.0',
        url: '',
        status: 1
      },
      {
        id: '1621',
        name: '二级菜单-1.6-2.1',
        url: '',
        status: 1
      },
      {
        id: '1622',
        name: '二级菜单-1.6-2.2',
        url: '',
        status: 1
      },
      {
        id: '1623',
        name: '二级菜单-1.6-2.3',
        url: '',
        status: 0
      },
      {
        id: '1624',
        name: '二级菜单-1.6-2.4',
        url: '',
        status: 0
      },
      {
        id: '1625',
        name: '二级菜单-1.6-2.5',
        url: '',
        status: 0
      },
      {
        id: '1626',
        name: '二级菜单-1.6-2.6',
        url: '',
        status: 0
      },
      {
        id: '1627',
        name: '二级菜单-1.6-2.7',
        url: '',
        status: 0
      }
    ]
  }
]);

function handleSelect(data) {
  console.log(data);
}

const sideWidth = ref(210);
const collapse = ref(false);

const rotateNum = computed(() => collapse.value ? '180deg' : 0);

const initIcon = 'ico-clarity:star-line';
const starIcon = ref(initIcon);
const iconColor = ref('');

const activeIndex = ref();
const handleMouseEnter = (data) => {
  activeIndex.value = data.id;
};
const handleMouseLeave = () => {
  activeIndex.value = '';
};

const handleIconMouseEnter = () => {
  iconColor.value = 'rgb(1, 113, 246)';
};

const handleIconMouseLeave = () => {
  iconColor.value = '';
  starIcon.value = initIcon;
};

const handleIconClick = () => {
  if (starIcon.value === initIcon) {
    iconColor.value = 'rgb(255, 214, 11)';
    starIcon.value = 'ico-clarity:star-solid';
  } else {
    starIcon.value = initIcon;
    iconColor.value = '';
  }
};

recursion(menuList, (item => {
  if (item?.functions?.length) {

  } else {
    item.disabled = !item.url;
  }
}), 'functions');

console.log(menuList);

const menuStyle = generateCssVars({
  'item-height': '30px',
  'sub-item-height': '30px',
  'hover-bg-color': 'transparent'
}, 'menu');
</script>

<template>
  <vft-side-menu
    :style="menuStyle"
    class="hb-side-menu"
    @select="handleSelect"
    dragWidthCfg
    v-model:width="sideWidth"
    v-model:collapse="collapse"
    :collapse-width="0"
    :isFixedLeft="false"
    :unique-opened="false"
    :menus="menuList"
    height="400px"
    :openMenuCollapse="false"
    :open-disabled="false"
    :attrMapping="{
      path: 'url',
      children: 'functions',
      title: 'name',
      index: 'id',
    }"
    @menuItemMouseenter="handleMouseEnter"
    @menuItemMouseleave="handleMouseLeave"
  >
    <template #menuItem="{item}">
      <div class="menu-item">
        <div class="menu-item-text">{{ item.name }}</div>
<!--        <vft-icon-->
<!--          v-show="activeIndex === item.id"-->
<!--          class="star-icon"-->
<!--          :color="iconColor"-->
<!--          :icon="starIcon"-->
<!--          @click="handleIconClick"-->
<!--          @mouseenter.stop="handleIconMouseEnter"-->
<!--          @mouseleave.stop="handleIconMouseLeave"-->
<!--        >{{ item.name }}-->
<!--        </vft-icon>-->
      </div>
    </template>
    <div class="collapse" @click="collapse = !collapse"/>
  </vft-side-menu>
</template>

<style scoped lang="scss">
.vft-side-menu {
  .collapse {
    width: 11px;
    height: 59px;
    border: 1px solid rgb(225, 225, 225);
    background: rgb(242, 242, 242);
    position: absolute;
    top: 50%;
    right: -11px;
    transform: translateY(-50%);
    z-index: 19;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

    &::after {
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      top: 50%;
      left: 1px;
      right: 2px;
      transform: translateY(-50%) rotate(v-bind('rotateNum'));
      border-width: 5px 6px 5px 0;
      border-style: solid;
      border-color: transparent rgb(134, 148, 174) transparent transparent;
    }
  }

  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;

    .menu-item-text {
      margin-left: 14px;
      @include line-clamp;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        background-color: rgb(223, 223, 223);
        border-radius: 50%;
      }
    }
  }

  .star-icon {
    color: v-bind(iconColor) !important;
  }

  :deep(.vft-side-menu__con) {
    .vft-sub-menu__title, .vft-menu-item {
      font-size: 13px;
    }

    .vft-menu-item:not(.is-disabled) {
      &:hover {
        color: $primary-color;
      }
    }

    .vft-sub-menu:not(.is-disabled) {
      .vft-sub-menu__title {
        &:hover {
          color: $primary-color;
        }
      }
    }

    .vft-sub-menu__icon-arrow {
      font-size: 14px;
      color: rgb(192, 192, 192);
    }

    .is-opened.is-active {
      .vft-sub-menu__icon-arrow {
        color: $primary-color;
      }
    }
  }
}
</style>
