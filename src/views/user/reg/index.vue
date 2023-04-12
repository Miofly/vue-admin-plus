<script lang="ts" setup>
import { LINK_LOGIN } from '@/router/constants';
import { usePageTitle } from '@/use';
import { PrivacyPolicyFormItem, PwdFormItem, UserFormItem } from '@/views/user/components';
import { useSubmit } from '@/views/user/use/use-submit';
import { trimBlank, encryptByMd5 } from '@vft/utils';
import type { FormInstance } from 'vft';
import MainContainer from '../components/main.vue';
import { PhoneCodeFormItem } from '@/views/user/components';
import { checkPwdSame, pageCfg, rules } from '../config';

usePageTitle();

// 表单数据
const formData = reactive({
  account: '',
  password: '',
  rePassword: '',
  verifyCode: ''
});

const formRef = ref<FormInstance>();

const phoneCodeRef = ref();

const { loading, errMess, handleClick } = useSubmit();

/** 提交 */
const handleSubmit = async() => {
  return await handleClick({
    formEl: formRef.value,
    params: {
      password: encryptByMd5(formData.password),
      phone: trimBlank(formData.account, 'all'),
      smsVerifyCode: formData.verifyCode
    },
    loginType: 'reg',
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
  <main-container>
    <p class="mb-22px text-left">注册</p>
    <vft-form ref="formRef" :model="formData" @keypress.enter="handleSubmit">
      <!--account-->
      <user-form-item v-model:account="formData.account" v-model:errorMess="errMess.account" />
      <!--code-->
      <phone-code-form-item ref="phoneCodeRef" :form="formRef"
        v-model:verifyCode="formData.verifyCode" :phone="formData.account"
        v-model:errorMess="errMess.code"
        v-model:errorAccountMess="errMess.account" />
      <!--pwd-->
      <pwd-form-item v-model:password="formData.password" />
      <pwd-form-item v-model:rePassword="formData.rePassword" propName="rePassword"
        :rules="[...rules.regForgotPwd, checkPwdSame(formData.password)]"
        :placeholder="pageCfg.rePwaPlaceholder" />
      <!--submit-->
      <vft-form-item>
        <div class="w-full flex justify-between">
          <vft-button :loading="loading" class="w-[80%]" type="primary" @click="handleSubmit">注册
          </vft-button>
          <vft-link type="primary" :route="LINK_LOGIN" :underline="false">返回登录</vft-link>
        </div>
      </vft-form-item>
      <privacy-policy-form-item v-model:checked="formData.checked" />
    </vft-form>
  </main-container>
</template>
