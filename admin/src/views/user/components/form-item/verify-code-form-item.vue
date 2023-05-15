<script setup lang="ts">
import type { FormInstance } from 'vft';
import { pageCfg, rules, checkVerifyCode } from '@/views/user/config';

interface Props {
  placeholder?: string;
  formRef?: FormInstance
}

const { placeholder = pageCfg.codePlaceholder, formRef } = defineProps<Props>();

const verifyCodeRef = ref();

const verifyCode = defineModel('verifyCode');

const onInput = (value) => {
  verifyCode.value = value;
};

watch(() => verifyCodeRef.value?.code, () => {
  if (formRef) {
    formRef?.clearValidate();
    verifyCode.value = '';
  }
});

defineExpose({
  code: computed(() => verifyCodeRef.value?.code),
  updateCode: computed(() => verifyCodeRef.value?.getImgCode)
});
</script>

<template>
  <vft-form-item prop="verifyCode" class="verify-code-form-item"
    :rules="[...rules.verifyCode, checkVerifyCode(verifyCodeRef?.code)]">
    <vft-input prefix-icon="ico-ant-design:safety-outlined" type="number" maxlength="4"
      :placeholder="placeholder" class="input" clearable
      :model-value="verifyCode" @input="onInput" />
    <vft-verify-code ref="verifyCodeRef" />
  </vft-form-item>
</template>

<style lang="scss" scoped>
.verify-code-form-item {
  :deep(.vft-form-item__content) {
    flex-wrap: nowrap;
    width: 100%;
  }

  .input {
    margin-right: 5px;
  }
}
</style>
