<template>
  <vft-form
    ref="formRef"
    :model="dynamicValidateForm"
    labvft-width="120px"
    class="demo-dynamic"
  >
    <vft-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        },
      ]"
    >
      <vft-input v-model="dynamicValidateForm.email" />
    </vft-form-item>
    <vft-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'Domain' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
      }"
    >
      <vft-input v-model="domain.value" />
      <vft-button class="mt-2" @click.prevent="removeDomain(domain)"
        >Delete</vft-button
      >
    </vft-form-item>
    <vft-form-item>
      <vft-button type="primary" @click="submitForm(formRef)">Submit</vft-button>
      <vft-button @click="addDomain">New domain</vft-button>
      <vft-button @click="resetForm(formRef)">Reset</vft-button>
    </vft-form-item>
  </vft-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance } from 'vft';

const formRef = ref<FormInstance>();
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: ''
    }
  ],
  email: ''
});

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item);
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1);
  }
};

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: ''
  });
};

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
