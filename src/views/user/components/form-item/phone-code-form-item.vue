<script setup lang="ts">
import { sendSms, type SmsType } from '@/views/user/apis';
import { isAccountErrCode, isMsgErrCode, pageCfg, rules } from '@/views/user/config';
import { useVerifyCode } from '@/views/user/use';
import { trimBlank } from '@vft/utils';
import type { FormInstance, FormItemProps } from 'vft';

interface Props {
  form?: FormInstance;
  /** 手机号 */
  phone: string;
  /** 验证码 */
  verifyCode: string;
  /** 错误信息 */
  errorMess?: string;
  errorAccountMess?: string;
  smsType?: SmsType;
  formValidateField?: string[]
  showText?: boolean
}

const { form, showText, verifyCode, errorMess, phone, smsType = 'register', formValidateField = ['account', 'checked'] } = defineProps<Props>();

const emit = defineEmits(['update:verifyCode', 'update:errorAccountMess', 'update:errorMess', 'getSms']);

const { isDisabled, text } = useVerifyCode();

const isClickSend = ref(false);

const handleGetSms = async() => {
  form.clearValidate();

  if (formValidateField?.length) {
    await form.validateField(formValidateField, async(isValid: boolean) => {
      if (isValid) {
        await sendRequest();
      }
    });
  } else {
    await sendRequest();
  }
};

const sendRequest = async () => {
  await sendSms({
      phone: trimBlank(phone, 'all'),
      smsType
    })
  .then((res) => {
    if (res.code === 200) {
      isClickSend.value = true;
      form.clearValidate('verifyCode');
      useVerifyCode().start(60);
    } else {
      if (isMsgErrCode.includes(res.code)) {
        emit('update:errorMess', res.msg);
      } {
        emit('update:errorAccountMess', '');
        setTimeout(() => {
          emit('update:errorAccountMess', res.msg);
        });
      }
    }
  })
  .catch((err) => {
    emit('update:errorMess', err.message || err.msg);
  });
};

onBeforeUnmount(() => {
  useVerifyCode().end();
});

defineExpose({
  isClickSend
});
</script>

<template>
  <vft-form-item prop="verifyCode"
    :error="errorMess" :rules="rules.phoneCode">
    <div class="w-full flex justify-between align-center">
      <span v-if="showText" class="text-[#666666] text-14px w-100px flex-none">验证码</span>
      <vft-input
        prefix-icon="ico-ant-design:safety-outlined"
        type="number"
        maxlength="4"
        :placeholder="pageCfg.codePlaceholder"
        class="h-40px"
        clearable
        :model-value="verifyCode"
        @input="(value) => emit('update:verifyCode', value)"
      />
      <vft-button  :disabled="isDisabled" class="ml-2 h-40px" @click="handleGetSms">
        {{ text.length > 0 ? text + '秒后重新获取' : pageCfg.getCodeText }}
      </vft-button>
    </div>
  </vft-form-item>
</template>
