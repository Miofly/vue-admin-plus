<script setup lang="tsx">
import { commonTestApi, getTableData } from '@/apis/root';
import { ACTION_FIELD, TableProps, useModal, useTable } from 'vft';
import ActionModal from './action-modal.vue';
import { columns } from './constants';

const searchValue = ref();

const [registerModal, { openModal }] = useModal();


const { runAsync: deleteItem } = useRequest(commonTestApi, {
  manual: true,
  onSuccess() {
    Message.success('删除成功');
  }
});

const [
  registerTable, { reload, deleteTableDataRecord, insertTableDataRecord, updateTableDataRecord }
] = useTable({
  columns: [
    ...columns,
    ACTION_FIELD({
      leftCallback: (row => {
        openModal(true, {
          isUpdate: true,
          data: row
        });
      }),
      rightCallback: ((row) => {
        return deleteItem(row.id).then(() => {
          deleteTableDataRecord(row);
        });
      })
    })
  ],
  api: getTableData,
  beforeFetch: () => searchValue.value
} as TableProps);

const handleChange = (data) => {
  reload({
    searchValue: data,
    page: 1
  });
};

const handleAdd = () => {
  openModal(true, { isUpdate: false });
};
</script>

<template>
  <div class="p-20px w-full h-full">
    <div class="flex justify-end mb-10px">
      <vft-search v-model="searchValue" @change="handleChange" />
      <vft-button size="small" class="ml-10px" type="primary" @click="handleAdd">新增</vft-button>
    </div>
    <vft-table @register="registerTable" />
  </div>
  <action-modal @register="registerModal"
    :updateTableDataRecord="updateTableDataRecord"
    :insertTableDataRecord="insertTableDataRecord"/>
</template>
