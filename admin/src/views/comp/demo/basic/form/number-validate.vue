<template>
  <vft-form
    ref="formRef"
    :model="numberValidateForm"
    labvft-width="100px"
    class="demo-ruleForm"
  >
    <vft-form-item
      label="age"
      prop="age"
      :rules="[
        { required: true, message: 'age is required' },
        { type: 'number', message: 'age must be a number' },
      ]"
    >
      <vft-input
        v-model.number="numberValidateForm.age"
        type="text"
        autocomplete="off"
      />
    </vft-form-item>
    <vft-form-item>
      <vft-button type="primary" @click="submitForm(formRef)">Submit</vft-button>
      <vft-button @click="resetForm(formRef)">Reset</vft-button>
    </vft-form-item>
  </vft-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance } from 'vft';

const formRef = ref<FormInstance>();

const numberValidateForm = reactive({
  age: ''
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
