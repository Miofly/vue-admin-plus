<script setup lang="ts">
import type { FormInstance } from 'vft';
import { pageCfg, rules, checkVerifyCode } from '@/views/user/config';

interface Props {
  verifyCode: string;
  placeholder?: string;
  ruleFormRef?: FormInstance
}

const { verifyCode, placeholder = pageCfg.codePlaceholder, ruleFormRef } = defineProps<Props>();

const verifyCodeRef = ref();

const emit = defineEmits(['update:verifyCode']);

const onInput = (value) => {
  emit('update:verifyCode', value);
};

watch(() => verifyCodeRef.value?.code, () => {
  if (ruleFormRef) {
    ruleFormRef?.clearValidate();
    emit('update:verifyCode', '');
  }
});

defineExpose({
  code: computed(() => verifyCodeRef.value?.code),
  updateCode: computed(() => verifyCodeRef.value?.getImgCode)
});
</script>

<template>
  <vft-form-item prop="verifyCode"
    :rules="[...rules.verifyCode, checkVerifyCode(verifyCodeRef?.code)]">
    <div class="w-full flex justify-between">
      <vft-input prefix-icon="ico-ant-design:safety-outlined" type="number" maxlength="4"
        :placeholder="placeholder" class="input mr-5px" clearable
        :model-value="verifyCode" @input="onInput" />
      <vft-verify-code ref="verifyCodeRef" />
    </div>
  </vft-form-item>
</template>
