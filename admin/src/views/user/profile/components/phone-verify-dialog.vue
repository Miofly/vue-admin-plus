<script setup lang="ts">
import { useUserInfo } from '@/use/use-user-info';
import PhoneCodeFormItem from '@/views/user/components/form-item/phone-code-form-item.vue';
import { pageCfg } from '@/views/user/config';
import { formatPhoneHide, trimBlank } from '@vft/utils';
import { type FormInstance } from 'vft';
import { checkVerifyCode } from '../api';

interface Props {
	visible: boolean
}

const {
	visible
} = defineProps<Props>();

const emit = defineEmits(['update:visible', 'pass-verify']);

const { getUserPhone } = useUserInfo();

const formData = reactive({
  verifyCode: ''
});
const formRef = ref<FormInstance>();
const phoneCodeErrMess = ref();

const close = () => {
  formRef.value?.clearValidate('verifyCode');
  phoneCodeErrMess.value = '';
  formData.verifyCode = '';
  emit('update:visible', false);
};

const phoneCodeRef = ref();

const { runAsync, loading } = useRequest(checkVerifyCode, {
  manual: true
});

const handleSubmit = async () => {
  if (!phoneCodeRef.value.isClickSend) {
    phoneCodeErrMess.value = '';
    setTimeout(() => {
      phoneCodeErrMess.value = pageCfg.getPhoneCodeTip;
    });
    return;
  }
  await formRef.value!.validate(async (valid) => {
    if (valid) {
      runAsync({
        smsVerifyCode: formData.verifyCode,
        phone: trimBlank(getUserPhone.value, 'all'),
        smsType: ''
      }).then((res) => {
        if (res.data) {
          close();
          emit('pass-verify');
          // updatePhoneDialogVisible.value = true;
        } else {
          Message.error('验证码输入错误');
        }
      });
    } else {
      return false;
    }
  });
};

defineExpose({
  verifyCode: formData.verifyCode
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
    <vft-form ref="formRef" @submit.prevent :model="formData" @keypress.enter="handleSubmit">
      <phone-code-form-item ref="phoneCodeRef" :phone="getUserPhone" :form="formRef"
                            v-model:verifyCode="formData.verifyCode"
                            v-model:errorMess="phoneCodeErrMess"
                            :formValidateField="[]"/>
      <vft-form-item class="fr">
        <vft-button @click="close">取消</vft-button>
        <vft-button :loading="loading" type="primary" @click="handleSubmit">下一步</vft-button>
      </vft-form-item>
    </vft-form>
  </vft-dialog>
</template>
