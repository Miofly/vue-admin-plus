<script setup lang="ts">
import { useUserInfo } from '@/use/use-user-info';
import { sendSms, type SmsType } from '@/views/user/apis';
import { isMsgErrCode, pageCfg, rules } from '@/views/user/config';
import { useVerifyCode } from '@/views/user/use';
import { trimBlank } from '@vft/utils';
import type { FormInstance } from 'vft';

interface Props {
  form?: FormInstance;
  /** 手机号 */
  phone: string;
  smsType?: SmsType;
  formValidateField?: string[]
  showText?: boolean
}

const { form, showText, phone, smsType = 'register', formValidateField } = defineProps<Props>();

const emit = defineEmits(['getSms']);

const verifyCode = defineModel('verifyCode');
const errorAccountMess = defineModel('errorAccountMess');
const errorMess = defineModel('errorMess');

const { isDisabled, text } = useVerifyCode();

const { getUserPhone } = useUserInfo();

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
  if (smsType === 'updatePhone' && getUserPhone.value === trimBlank(phone, 'all')) {
    errorAccountMess.value = '';
    useTimeoutFn(() => {
      errorAccountMess.value = '当前手机号与原手机号码一致';
    }, 0);
    return;
  }

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
        errorMess.value = res.msg;
      } {
        errorAccountMess.value = '';
        setTimeout(() => {
          errorAccountMess.value = res.msg;
        });
      }
    }
  })
  .catch((err) => {
    errorMess.value = err.message || err.msg;
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
      <span v-if="showText" class="text-14px w-100px flex-none">验证码</span>
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
