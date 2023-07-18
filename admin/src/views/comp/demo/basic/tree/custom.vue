<script lang="ts" setup>
import { useContextMenu } from 'vft';
import { generateCssVars } from 'vft';


const handleNodeClick = (data) => {
  console.log(data);
};

const data = [
  {
    'id': 1,
    'name': 'ECU',
    'displayName': 'ECU第一代',
    'domain': '动力域',
    'status': '1',
    'updateTime': '2023-04-10T21:02:59',
    'updateUser': '测试人'
  },
  {
    'id': 2,
    'name': 'TBox',
    'displayName': 'Tbox4G',
    'domain': '座舱域',
    'status': '1',
    'updateTime': '2023-04-13T14:46:49',
    'updateUser': null
  },
  {
    'id': 3,
    'name': 'TCU',
    'displayName': 'TCU自动挡',
    'domain': '动力域',
    'status': '1',
    'updateTime': '2023-04-13T14:49:08',
    'updateUser': null
  },
  {
    'id': 42,
    'name': 'VCU',
    'displayName': 'VCU',
    'domain': '底盘域',
    'status': '1',
    'updateTime': '2023-05-08T14:17:45',
    'updateUser': null
  },
  {
    'id': 53,
    'name': 'test',
    'displayName': '的撒',
    'domain': '动力域',
    'status': '1',
    'updateTime': '2023-05-08T16:25:00',
    'updateUser': null
  },
  {
    'id': 54,
    'name': 'test11',
    'displayName': '',
    'domain': '',
    'status': '1',
    'updateTime': '2023-05-10T11:03:00',
    'updateUser': null
  }
];

const defaultProps = {
  children: 'children',
  label: 'label'
};

const [createContextMenu] = useContextMenu();

function handleNodeContextMenu (e) {
  createContextMenu({
    event: e,
    items: [
      {
        iconCfg: { icon: 'ico-ep:refresh-right' },
        text: '刷新'
      },
      {
        iconCfg: { icon: 'ico-carbon:new-tab' },
        text: '新页面打开',
        divider: true
      },
      {
        iconCfg: { icon: 'ico-zondicons:close' },
        text: '关闭标签页'
      },
      {
        iconCfg: { icon: 'ico-line-md:arrow-close-left' },
        text: '关闭左侧标签页'
      },
      {
        iconCfg: { icon: 'ico-line-md:arrow-close-right' },
        text: '关闭右侧标签页',
        divider: true
      },
      {
        iconCfg: { icon: 'ico-mdi:close-box-multiple-outline' },
        text: '关闭其它标签页'
      },
      {
        iconCfg: { icon: 'ico-mdi:vector-square-delete' },
        text: '关闭所有标签页'
      }
    ],
    styles: generateCssVars({
      'sub-item-height': '30px',
      'item-min-width': '140px',
      'base-level-padding': '10px'
    }, 'menu')
  });
}
</script>

<template>
  <vft-container>
    <vft-aside :width="200">
      <vft-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        @node-contextmenu="handleNodeContextMenu"
      />
    </vft-aside>
  </vft-container>
</template>
