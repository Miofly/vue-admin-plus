<template>
  <div v-if="data?.items?.length">
    <vxe-grid v-bind="gridOptions" :data="data?.items" :columns="columns">
      <template #toolbar_buttons>
        <vft-button @click="gridOptions.align = 'left'">居左</vft-button>
        <vft-button @click="gridOptions.align = 'center'">居中</vft-button>
        <vft-button @click="gridOptions.align = 'right'">居右</vft-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue';
import type { VxeGridProps } from 'vxe-table';
import { getTableData } from '@/apis/root';


const columns = ref([
  {
    field: 'nickname',
    title: '名称',
    align: 'center',
    sortable: true
  },
  { field: 'account', title: '账户id' },
  {
    field: 'avatar', title: '头像',
    slots: {
      default: ({ row }) => <img src={row.avatar} width="50" height="50" />
    }
  },
  { field: 'password', title: '密码' },
  {
    field: 'birthdate', title: '生日', align: 'center'
  },
  {
    field: 'registeredAt', title: '注册时间'
  },
  { field: 'email', title: '邮箱' }
]);
const PAGE_SIZE = 50;

const pageNum = ref(1);
const requestParams = reactive({
  page: pageNum,
  pageSize: PAGE_SIZE
});


const { data, run, loading, error } = useRequest(getTableData, {
  defaultParams: [{ ...requestParams }],
  onSuccess(res) {
    console.log(res);
  }
});

const gridOptions = reactive({
  border: true,
  height: 300,
  align: null,
  columnConfig: {
    resizable: true
  },
  toolbarConfig: {
    slots: {
      buttons: 'toolbar_buttons'
    }
  }
});
</script>
