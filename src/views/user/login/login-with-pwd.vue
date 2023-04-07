<script setup lang="ts">
import { ACCOUNT_MESS } from '@/constants';
import { LINK_FORGOT, LINK_REG } from '@/router/constants';
import { ls } from '@/utils';
import { PwdFormItem, UserFormItem, VerifyCodeFormItem } from '@/views/user/components';
import { useLoginCommon } from '@/views/user/login/use-login-common';
import { useSubmit } from '@/views/user/use/use-submit';
import { encryptByMd5, trimBlank } from '@vft/utils';
import type { FormInstance } from 'vft';
import { LoginTabEnum, pageCfg, rules } from '../config';

interface Props {
  activeName: string;
}

const { activeName } = defineProps<Props>();

// 表单数据
const formData = reactive({
  account: ls.get(ACCOUNT_MESS) || '',
  password: '',
  verifyCode: ''
});

const ruleFormRef = ref<FormInstance>();

const isSaveAccount = ref(true);

const verifyCodeRef = ref();

const { loading, errMess, handleClick } = useSubmit();

const { saveAccount } = useLoginCommon(computed(() => activeName), ruleFormRef, LoginTabEnum.TAB_USER, isSaveAccount);

/** 提交 */
const handleSubmit = async() => {
  return await handleClick({
    formEl: ruleFormRef.value,
    params: {
      verifyCode: formData.verifyCode,
      password: encryptByMd5(formData.password),
      phone: trimBlank(formData.account, 'all')
    },
    loginType: 'login',
    successCallback: () => {
      saveAccount(trimBlank(formData.account, 'all'));
    },
    errorCallBack: () => {
      verifyCodeRef.value.updateCode();
    }
  });
};

</script>

<template>
  <vft-form ref="ruleFormRef" :model="formData" @keypress.enter="handleSubmit">
    <!--account-->
    <user-form-item v-model:account="formData.account" :errorMess="errMess.account" />
    <!--pwd-->
    <pwd-form-item v-model:password="formData.password" :rules="rules.loginPwd"
      :placeholder="pageCfg.pwaPlaceholder" :errorMess="errMess.pwd" />
    <!--code-->
    <verify-code-form-item ref="verifyCodeRef" v-model:verify-code="formData.verifyCode"
      :ruleFormRef="ruleFormRef" />
    <vft-form-item>
      <div class="flex justify-between w-full">
        <vft-checkbox v-model="isSaveAccount" label="记住账号" />
        <vft-link type="primary" :route="LINK_FORGOT" :underline="false">{{ pageCfg.forgotText }}
        </vft-link>
      </div>
    </vft-form-item>
    <!--submit-->
    <vft-form-item>
      <vft-button :loading="loading" block type="primary" @click="handleSubmit">登录</vft-button>
    </vft-form-item>
    <div class="flex-center">
      <span class="text-14px text-black">没有账号？</span>
      <vft-link type="primary" :route="LINK_REG" :underline="false">立即注册</vft-link>
    </div>
  </vft-form>
</template>
