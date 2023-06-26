<script setup lang="tsx">
import { LINK_LOGIN } from '@/router/constants';
import { type FormSchema, useForm } from 'vft';
import { encryptByMd5, trimBlank } from '@vft/utils';
import MainContainer from '../components/main.vue';
import { phone_field, privacy_policy_field, pwd_field } from '../constants';
import { usePhoneVerifyCode } from '../use/use-phone-verify-code';
import { useSubmit } from '../use/use-submit';

const formRef = ref();

const phone = computed(() => getFieldValue('phone'));
const loading = ref(false);

const { phoneVerifyCodeItem } = usePhoneVerifyCode('register', phone, formRef);

const schemas: FormSchema[] = [
  phone_field,
  phoneVerifyCodeItem,
  pwd_field(false, true),
  pwd_field(true, true),
  {
    field: 'custom',
    render: () => <div class="flex justify-between">
      <vft-button type="primary" block loading={loading.value} onClick={() => handleSubmit()}>注册</vft-button>
      <vft-link class="ml-10px" type="primary" underline={false} route={LINK_LOGIN}>返回登录</vft-link>
    </div>
  },
  privacy_policy_field
];

const [register, {
  setFormItemError,
  validate,
  getFieldValue
}] = useForm({
  schemas: schemas,
  baseColProps: {
    span: 24
  },
  autoCleanErrorMessage: true,
  showActionButtonGroup: false
});

const { submit } = useSubmit();

const handleSubmit = async() => {
  await validate().then(async (res)=> {
    loading.value = true;
    await submit({
      params: {
        verifyCode: res.verifyCode,
        password: encryptByMd5(res.password),
        phone: trimBlank(res.phone, 'all')
      },
      loginType: 'reg',
      setFormItemError
    }).catch(() => {
      loading.value = false;
    });
  });
};
</script>

<template>
  <main-container>
    <p class="mb-22px text-left">注册</p>
    <vft-super-form ref="formRef" class="form-container" @register="register" />
  </main-container>
</template>

<style lang="scss" scoped>
.form-container {
  :deep(.vft-link) {
    white-space: nowrap;
    vertical-align: initial;
  }

  :deep(.vft-form-item) {
    &.privacy-policy-item {
      .vft-super-form__content {
        flex: none;
      }
    }
  }
}
</style>
