<script setup lang="tsx">
import { getTableData } from '@/apis/root';
import {
  STATUS_FIELD,
  SEQ_FIELD,
  CREATE_TIME_FIELD,
  DATE_FIELD, NAME_FIELD
} from 'vft';

const PAGE_SIZE = 10;

const pageNum = ref(1);

const columns = ref([
  SEQ_FIELD,
  { ...NAME_FIELD, field: 'nickname' },
  { field: 'account', title: '账户id', width: 300 },
  {
    field: 'avatar', title: '头像', minWidth: 100,
    slots: {
      default: ({ row }) => <img src={row.avatar} width="50" height="50"/>
    }
  },
  { field: 'password', title: '密码', minWidth: 150 },
  STATUS_FIELD(),
  DATE_FIELD({ field: 'birthdate', title: '生日' }),
  CREATE_TIME_FIELD({ field: 'registeredAt', title: '注册时间' }),
  { field: 'email', minWidth: 100, title: '邮箱', fixed: 'right' }
]);


const handlePageChange = (data) => {
  console.log(data, '-');

};

const requestParams = reactive({
  page: pageNum,
  pageSize: PAGE_SIZE
});

const { data, run, loading } = useRequest(getTableData, {
  defaultParams: [{ ...requestParams }],
  onSuccess(res) {
    console.log(res);
  }
});

const tableRef = ref();
setTimeout(() => {
  console.log(tableRef.value, '===');
}, 1500);
</script>

<template>
  <div class="p-20px">
    <vft-table
      :pagination="{
        pageSizes: [PAGE_SIZE, 20, 30, 50]
      }"
      ref="tableRef"
      border
      :loading="loading"
      :data="data?.items"
      :columns="columns"
      v-model:page-num="pageNum"
      :total="data?.total"
      :pageSize="PAGE_SIZE"
      @pageChange="handlePageChange"
    />
  </div>
</template>
