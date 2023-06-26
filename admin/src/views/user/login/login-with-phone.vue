<script setup lang="tsx">
import { useLoginCommon } from '@/views/user/login/use-login-common';
import { type FormSchema, useForm } from 'vft';
import { pick, trimBlank } from '@vft/utils';
import { LoginTabEnum } from '../config';
import { phone_field, privacy_policy_field } from '../constants';
import { usePhoneVerifyCode } from '../use/use-phone-verify-code';
import { useSubmit } from '../use/use-submit';

interface Props {
  activeName: string;
}

const { activeName } = defineProps<Props>();

const isSaveAccount = ref(true);
const formRef = ref();

const phone = computed(() => getFieldValue('phone'));

const { phoneVerifyCodeItem } = usePhoneVerifyCode('login', phone, formRef);

const schemas: FormSchema[] = [
  {
    ...phone_field,
    defaultValue: ls.get(LoginTabEnum.TAB_PHONE)
  },
  phoneVerifyCodeItem,
  {
    ...privacy_policy_field,
    prefix: () => <vft-checkbox v-model={isSaveAccount.value} label="记住账号" />
  }
];

const [register, { setFormItemError, validateField,setSubmitLoading, clearValidate, getFieldValue }] = useForm({
  schemas,
  baseColProps: {
    span: 24
  },
  autoCleanErrorMessage: true,
  submitButtonOptions: {
    block: true,
    btnText: '登录'
  },
  beforeSubmitFunc: async () => {
    await validateField(['checked']);
  }
});

const { saveLoginInfo } = useLoginCommon(computed(() => activeName), clearValidate, LoginTabEnum.TAB_PHONE, isSaveAccount);

const { submit } = useSubmit();

const handleSubmit = async(values) => {
  const _params = pick(values, ['verifyCode']);
  await submit({
    params: {
      ..._params,
      phone: trimBlank(values.phone, 'all')
    },
    loginType: 'loginPhone',
    setFormItemError,
    successCallback: () => {
      saveLoginInfo(values.phone);
    },
    setSubmitLoading
  });
};
</script>

<template>
  <vft-super-form ref="formRef" class="form-container" @register="register" @submit="handleSubmit"/>
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
  :deep(.vft-link) {
    vertical-align: initial;
  }
}
</style>
