<script lang="ts" setup>
import { usePageTitle } from '@/use';
import { useSubmit } from '@/views/user/use/use-submit';
import { trimBlank, encryptByMd5 } from '@vft/utils';
import type { FormInstance } from 'vft';
import { rules, checkPwdSame, pageCfg } from '../config';
import { LINK_LOGIN } from '@/router/constants';
import { UserFormItem, PhoneCodeFormItem, PwdFormItem, MainContainer } from '@/views/user/components';
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
    <p class="mb-22px text-left">忘记密码</p>
    <vft-form ref="formRef" :model="formData" @keypress.enter="handleSubmit(formRef)">
      <!--account-->
      <user-form-item v-model:account="formData.account" v-model:errorMess="errMess.account" />
      <!--code-->
      <phone-code-form-item
        :form="formRef"
        ref="phoneCodeRef"
        v-model:verifyCode="formData.verifyCode"
        :phone="formData.account"
        smsType="changePw"
        v-model:errorMess="errMess.code"
        v-model:errorAccountMess="errMess.account"
      />
      <!--pwd-->
      <pwd-form-item v-model:password="formData.password" />
      <pwd-form-item v-model:rePassword="formData.rePassword" propName="rePassword" :rules="[...rules.regForgotPwd, checkPwdSame(formData.password)]" :placeholder="pageCfg.rePwaPlaceholder" />
      <!--submit-->
      <vft-form-item>
        <div class="w-full flex justify-between">
          <vft-button :loading="loading" class="w-[80%]" type="primary" @click="handleSubmit(formRef)">修改密码</vft-button>
          <vft-link type="primary" :route="LINK_LOGIN" :underline="false">返回登录</vft-link>
        </div>
      </vft-form-item>
    </vft-form>
  </main-container>
</template>
