<script setup lang="tsx">
import { useUserInfo } from '@/use/use-user-info';
// import PhoneCodeFormItem from '@/views/user/components/form-item/phone-code-form-item.vue';
// import UserFormItem from '@/views/user/components/form-item/user-form-item.vue';
import { phone_field } from '@/views/user/constants';
import { usePhoneVerifyCode } from '@/views/user/use/use-phone-verify-code';
import { useSubmit } from '@/views/user/use/use-submit';
import { formatPhoneHide, pick } from '@vft/utils';
import { FormSchema, useForm } from 'vft';
import { updatePhone } from '../../api';
import PhoneVerifyDialog from '../../components/phone-verify-dialog.vue';

const phoneVerifyVisible = ref(false);

const { getUserPhone } = useUserInfo();
const hasPhone = computed(() => !!getUserPhone.value);

function changePhone() {
  if (hasPhone.value) {
    phoneVerifyVisible.value = true;
  } else {
    dialogVisible.value = true;
  }
}

const dialogVisible = ref(false);

const { runAsync } = useRequest(updatePhone, {
  manual: true
});

const formRef = ref();

const phone = computed(() => getFieldValue('phone'));

const { phoneVerifyCodeItem } = usePhoneVerifyCode('updatePhone', phone, formRef);

const schemas: FormSchema[] = [
  phone_field,
  phoneVerifyCodeItem
];

const [register, {
  setFormItemError,
  validateField,
  setSubmitLoading,
  clearValidate,
  getFieldValue
}] = useForm({
  schemas,
  baseColProps: {
    span: 24
  },
  autoCleanErrorMessage: true,
  submitButtonOptions: {
    block: true,
    btnText: '修改'
  }
});

const { submit } = useSubmit();

const handleSubmit = async(values) => {
  const _params = pick(values, ['verifyCode']);
};

const close = () => {
  formRef.value?.clearValidate();
  dialogVisible.value = false;
};
</script>

<template>
  <div class="item">
    <div class="left">
      <span class="desc">手机号码</span>
      <div class="info">
        <span>{{ formatPhoneHide(getUserPhone) || '-' }}</span>
      </div>
    </div>
    <div class="action">
      <span class="common-link" @click="changePhone">
        {{ hasPhone ? '更换手机号' : '绑定手机号' }}
      </span>
    </div>
  </div>

  <phone-verify-dialog @pass-verify="dialogVisible=true" v-model:visible="phoneVerifyVisible"/>

  <vft-dialog
    v-model="dialogVisible"
    :title="hasPhone ? '更换手机号' : '绑定手机号'"
    width="500px"
    alignCenter
    destroy-on-close
    :open-delay="400"
    @close="close">
    <div class="mb-25px">
      <span>请输入手机号及验证码</span>
    </div>
    <vft-super-form ref="formRef" class="form-container" @register="register"
      @submit="handleSubmit" />
  </vft-dialog>
</template>
