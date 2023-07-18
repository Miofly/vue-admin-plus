<script setup lang="ts">
import { FormCompEnum, FormSchema, useForm, useModalInner } from 'vft';

const schemas: FormSchema[] = [
  {
    field: 'name',
    type: FormCompEnum.INPUT,
    label: '昵称'
  }
];

const init_data = ref();

const [registerForm, { setFieldsValue }] = useForm({
  schemas,
  quickColSpan: 1,
  showCommonButton: true,
  commonButtonOptions: {
    onClick: () => closeModal()
  },
  watchDataIsChange: true
});

const [register, { closeModal }] = useModalInner(async (data) => {
  if (data.isUpdate) {
    init_data.value = data.data;
    await setFieldsValue(data.data);
  }
});

const submit = (values, isChange) => {
	console.log(isChange);
};
</script>

<template>
  <vft-modal destroy-on-close @register="register" width="500px" title="更新认证">
    <vft-super-form @register="registerForm" @submit="submit"/>
  </vft-modal>
</template>
