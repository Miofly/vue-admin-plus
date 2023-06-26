<script setup lang="tsx">
import { useLoginCommon } from '@/views/user/login/use-login-common';
import { type FormSchema, useForm } from 'vft';
import { encryptByMd5, trimBlank } from '@vft/utils';
import { LINK_LOGIN } from '@/router/constants';
import MainContainer from '../components/main.vue';
import { LoginTabEnum } from '../config';
import { phone_field, pwd_field } from '../constants';
import { usePhoneVerifyCode } from '../use/use-phone-verify-code';
import { useSubmit } from '../use/use-submit';

interface Props {
  activeName: string;
}

const { activeName } = defineProps<Props>();

const isSaveAccount = ref(true);
const formRef = ref();

const phone = computed(() => getFieldValue('phone'));

const { phoneVerifyCodeItem } = usePhoneVerifyCode('registry', phone, formRef);

const schemas: FormSchema[] = [
  phone_field,
  phoneVerifyCodeItem,
  pwd_field(),
  pwd_field(true)
];

const [register, {
  setFormItemError,
  validateField,
  setSubmitLoading,
  clearValidate,
  getFieldValue
}] = useForm({
  schemas: schemas,
  baseColProps: {
    span: 24
  },
  autoCleanErrorMessage: true,
  submitButtonOptions: {
    block: true,
    btnText: '修改密码'
  },
  beforeSubmitFunc: async() => {
    await validateField(['checked']);
  }
});

const { saveLoginInfo } = useLoginCommon(computed(() => activeName), clearValidate, LoginTabEnum.TAB_PHONE, isSaveAccount);

const { submit } = useSubmit();

const handleSubmit = async(values) => {
  await submit({
    params: {
      verifyCode: values.verifyCode,
      password: encryptByMd5(values.password),
      phone: trimBlank(values.phone, 'all')
    },
    loginType: 'loginPhone',
    setFormItemError,
    successCallback: () => {
      saveLoginInfo(isSaveAccount);
    },
    setSubmitLoading
  });
};
</script>

<template>
  <main-container>
    <p class="mb-22px text-left">忘记密码</p>
    <vft-super-form ref="formRef" class="form-container" @register="register"
      @submit="handleSubmit">
      <template #submitAfter>
        <vft-link type="primary" :route="LINK_LOGIN" :underline="false">返回登录</vft-link>
      </template>
    </vft-super-form>
  </main-container>
</template>

<style lang="scss" scoped>
.form-container {
  :deep(.vft-form-item) {
    .vft-form-item__content {
      display: flex;
      justify-content: space-between;

      .vft-button {
        width: 80%;
      }
    }
  }
}
</style>
