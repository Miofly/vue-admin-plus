<script setup lang="tsx">
import { FormCompEnum, useForm, useModalInner } from 'vft';
import { commonTestApi } from '@/apis/modules';

interface Props {
  insertTableDataRecord: any
  updateTableDataRecord: any
}

const {
  insertTableDataRecord,
  updateTableDataRecord
} = defineProps<Props>();

const isUpdate = ref(false);
const updateData = ref();

const schemas = [
  {
    field: 'account',
    type: FormCompEnum.INPUT,
    label: 'Id',
    required: true
  },
  {
    field: 'status',
    type: FormCompEnum.SELECT,
    label: '状态',
    componentProps: {
      options: [
        { label: '使用中', value: 1 },
        { label: '禁用', value: 0 }
      ]
    }
  }
];

const [registerModal, { closeModal }] = useModalInner(async (data) => {
  isUpdate.value = data?.isUpdate;
  updateData.value = data.data;
  if (data.isUpdate) {
    await setFieldsValue(data.data);
  }
});

const [register, { setFieldsValue, setSubmitLoading }] = useForm({
  schemas: schemas,
  quickColSpan: 2,
  watchDataIsChange: true,
  showCommonButton: true,
  commonButtonOptions: {
    onClick: () => {
      closeModal();
    }
  }
});

const { runAsync: addRecord } = useRequest(commonTestApi, {
  manual: true,
  onSuccess() {
    Message.success('新增成功');
    closeModal();
  },
  onAfter() {
    setSubmitLoading(false);
  }
});

const { runAsync: updateRecord } = useRequest(commonTestApi, {
  manual: true,
  onSuccess() {
    Message.success('修改成功');
    closeModal();
  },
  onAfter() {
    setSubmitLoading(false);
  }
});

const handleSubmit = (values, isChange) => {
  if (isChange) {
    setSubmitLoading();
    if (isUpdate.value) {
      const id = updateData.value.id;
      updateRecord({ ...values, id }).then(() => {
        updateTableDataRecord(updateData.value._X_ROW_KEY, values);
      });
    } else {
      addRecord(values).then(() => {
        insertTableDataRecord(values);
      });
    }
  } else {
    closeModal();
  }
};
</script>

<template>
  <vft-modal
    :title="isUpdate ? '编辑' : '新增'"
    width="700px"
    destroy-on-close
    @register="registerModal"
  >
    <vft-super-form @register="register" @submit="handleSubmit" />
  </vft-modal>
</template>
