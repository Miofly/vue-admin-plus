<script setup lang="tsx">
import { LINK_FORGOT, LINK_REG } from '@/router/constants';
import { useLoginCommon } from '@/views/user/login/use-login-common';
import { encryptByMd5, pick } from '@vft/utils';
import { FormCompEnum, type FormSchema, useForm, VftVerifyCode } from 'vft';
import { LoginTabEnum, pageCfg } from '../config';
import { pwd_field } from '../constants';
import { useSubmit } from '../use/use-submit';

interface Props {
  activeName: string;
}

const { activeName } = defineProps<Props>();

const isSaveAccount = ref(true);
const verifyCodeRef = ref();

const schemas: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: FormCompEnum.INPUT,
    required: true,
    showLabel: false,
    componentProps: {
      maxlength: 20,
      prefixIcon: 'ico-ep:user'
    },
    defaultValue: ls.get(LoginTabEnum.TAB_USER),
    rules: [
      { min: 2, max: 20 }
    ]
  },
  pwd_field(),
  {
    field: 'verifyCode',
    label: '验证码',
    component: FormCompEnum.INPUT_NUMBER,
    rules: [{ len: 4, message: '验证码格式不对' }, {
      validator: (rule, value) => {
        if (value && value !== verifyCodeRef.value?.code) {
          return Promise.reject('验证码输入错误');
        } else {
          return Promise.resolve();
        }
      }
    }],
    required: true,
    showLabel: false,
    componentProps: {
      maxlength: 4,
      prefixIcon: 'ico-ant-design:safety-outlined'
    },
    suffix: () => <VftVerifyCode ref={verifyCodeRef} onClick={handleVerifyCodeClick} radius={4} class="ml-5px"
      height={40}></VftVerifyCode>
  },
  {
    field: 'custom',
    renderColContent: () =>
      <vft-form-item>
        <div class="flex justify-between w-full">
          <vft-checkbox label={'记住账号'} v-model={isSaveAccount.value} />
          <vft-link type="primary" route={LINK_FORGOT} underline={false}>
            {pageCfg.forgotText}
          </vft-link>
        </div>
      </vft-form-item>
  }
];

const handleVerifyCodeClick = () => {
  resetFields(['verifyCode']);
};

const [register, { setFormItemError, setSubmitLoading, clearValidate, resetFields }] = useForm({
  schemas: schemas,
  quickColSpan: 1,
  autoCleanErrorMessage: true,
  submitButtonOptions: {
    block: true,
    btnText: '登录'
  }
});

const { saveLoginInfo } = useLoginCommon(computed(() => activeName), clearValidate,LoginTabEnum.TAB_USER, isSaveAccount);

const { submit } = useSubmit();

const handleSubmit = async(values) => {
  const _params = pick(values, ['account', 'verifyCode']);
  await submit({
    params: {
      ..._params,
      password: encryptByMd5(values.password)
    },
    loginType: 'login',
    setFormItemError,
    successCallback: () => {
      saveLoginInfo(values.account);
    },
    errorCallBack: () => {
      verifyCodeRef.value?.getCode();
    },
    setSubmitLoading
  });
};
</script>

<template>
  <vft-super-form class="login-account-form" @register="register" @submit="handleSubmit" />
  <div class="flex-center">
    <span class="text-14px text-[#434343]">没有账号？</span>
    <vft-link type="primary" :route="LINK_REG" :underline="false">立即注册</vft-link>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  :deep(.vft-checkbox) {
    .vft-checkbox__input:not(.is-checked) {
      .vft-checkbox__label {
        color: #434343;
      }
    }
  }
}
</style>
