<script setup lang="ts">
import { ACCOUNT_MESS } from '@/constants';
import { ls } from '@/utils';
import { useLoginCommon } from '@/views/user/login/use-login-common';
import { useSubmit } from '@/views/user/use/use-submit';
import { trimBlank } from '@vft/utils';
import { LoginTabEnum, pageCfg } from '@/views/user/config';
import { UserFormItem, PrivacyPolicyFormItem, PhoneCodeFormItem } from '@/views/user/components';
import type { FormInstance } from 'vft';

interface Props {
  activeName: string;
}

const { activeName } = defineProps<Props>();

const isSaveAccount = ref(true);

// 表单数据
const formData = reactive({
  account: ls.get(ACCOUNT_MESS) || '',
  verifyCode: '',
  checked: true
});

const ruleFormRef = ref<FormInstance>();
const phoneCodeRef = ref();

const { loading, errMess, handleClick } = useSubmit();

const { saveAccount } = useLoginCommon(computed(() => activeName), ruleFormRef, LoginTabEnum.TAB_PHONE, isSaveAccount);

const handleSubmit = async() => {
  return await handleClick({
    formEl: ruleFormRef.value,
    params: {
      smsVerifyCode: formData.verifyCode,
      phone: trimBlank(formData.account, 'all')
    },
    loginType: 'loginPhone',
    successCallback: () => {
      saveAccount(trimBlank(formData.account, 'all'));
    },
    extraValidCallback: () => {
    	if (phoneCodeRef.value.isClickSend) {
    		return true;
    	} else {
        errMess.code = '';
        setTimeout(() => {
          errMess.code = pageCfg.getPhoneCodeTip;
        });
      }
    }
  });
};
</script>

<template>
  <vft-form ref="ruleFormRef" :model="formData" @keypress.enter="handleSubmit">
    <!--account-->
    <user-form-item v-model:account="formData.account" :placeholder="pageCfg.phonePlaceholder"
      v-model:errorMess="errMess.account" />
    <!--code-->
    <phone-code-form-item
      ref="phoneCodeRef" :phone="formData.account" :form="ruleFormRef" v-model:verifyCode="formData.verifyCode"
      v-model:errorMess="errMess.code" v-model:errorAccountMess="errMess.account" smsType="login" />
    <!--submit-->
    <vft-form-item>
      <vft-button :loading="loading" block type="primary" @click="handleSubmit">登录</vft-button>
    </vft-form-item>
    <div class="flex justify-between">
      <vft-checkbox v-model="isSaveAccount" label="记住账号" />
      <privacy-policy-form-item v-model:checked="formData.checked" />
    </div>
  </vft-form>
</template>
