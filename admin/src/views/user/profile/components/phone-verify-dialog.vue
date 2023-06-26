<script setup lang="ts">
import { useUserInfo } from '@/use/use-user-info';
import { usePhoneVerifyCode } from '@/views/user/use/use-phone-verify-code';
import { formatPhoneHide, trimBlank } from '@vft/utils';
import { FormSchema, useForm } from 'vft';
import { checkVerifyCode } from '../api';

interface Props {
  visible: boolean;
}

const {
  visible
} = defineProps<Props>();

const emit = defineEmits(['update:visible', 'pass-verify']);

const { getUserPhone } = useUserInfo();

const close = () => {
  emit('update:visible', false);
};

const { runAsync } = useRequest(checkVerifyCode, {
  manual: true
});

const handleSubmit = async() => {
  console.log(111);
  await setSubmitLoading();
  runAsync({
    phone: trimBlank(getUserPhone.value, 'all'),
    smsType: ''
  }).then((res) => {
    if (res.data) {
      close();
      emit('pass-verify');
    } else {
      Message.error('验证码输入错误');
    }
  }).finally(() => {
    setSubmitLoading();
  });
};

const formRef = ref();

const { phoneVerifyCodeItem } = usePhoneVerifyCode('updatePhone', getUserPhone, formRef, true);

const schemas: FormSchema[] = [
  phoneVerifyCodeItem
];

const [register, { setSubmitLoading }] = useForm({
  schemas,
  baseColProps: {
    span: 24
  },
  autoCleanErrorMessage: true,
  submitButtonOptions: {
    btnText: '下一步'
  }
});
</script>

<template>
  <vft-dialog
    :modelValue="visible"
    title="手机号验证"
    width="500px"
    alignCenter
    destroy-on-close
    @close="close"
  >
    <div class="mb-25px">
      <span class="w-100px inline-block">当前手机号</span>
      <span>{{ formatPhoneHide(getUserPhone) }}</span>
    </div>
    <vft-super-form ref="formRef" class="form-container" @register="register"
      @submit="handleSubmit">
      <template #submitBefore>
        <vft-button @click="close()">取消</vft-button>
      </template>
    </vft-super-form>
  </vft-dialog>
</template>
