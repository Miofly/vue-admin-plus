<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';
import { useUserInfo } from '@/use/use-user-info';
import PhoneCodeFormItem from '@/views/user/components/form-item/phone-code-form-item.vue';
import UserFormItem from '@/views/user/components/form-item/user-form-item.vue';
import { pageCfg } from '@/views/user/config';
import { useErrorMess } from '@/views/user/use';
import { formatPhoneHide, trimBlank } from '@vft/utils';
import { type FormInstance } from 'vft';
import { updatePhone } from '../../api';
import PhoneVerifyDialog from '../../components/phone-verify-dialog.vue';

const phoneVerifyVisible = ref(false);

const { getUserPhone } = useUserInfo();
const userStore = useUserStore();
const smsType = ref('updatePhone');
const hasPhone = computed(() => !!getUserPhone.value);

function changePhone() {
  if (hasPhone.value) {
    phoneVerifyVisible.value = true;
  } else {
    dialogVisible.value = true;
  }
}

const formRef = ref<FormInstance>();
const dialogVisible = ref(false);
const updatePhoneCodeRef = ref();
const formData = reactive({
  account: '',
  verifyCode: ''
});

const errMess = reactive({
  pwd: '',
  code: '',
  account: ''
});

const { cleanMess, handleError } = useErrorMess(errMess);

const { runAsync: handleUpdatePhone, loading: updateLoading } = useRequest(updatePhone, {
  manual: true
});

const handleSubmit = async () => {
  if (!updatePhoneCodeRef.value.isClickSend) {
    errMess.code = '';
    setTimeout(() => {
      errMess.code = pageCfg.getPhoneCodeTip;
    });
    return;
  }
  await formRef.value!.validate(async (valid) => {
    if (valid) {
      cleanMess();
      handleUpdatePhone({
        smsVerifyCode: formData.verifyCode,
        phone: trimBlank(formData.account, 'all')
      }).then((res) => {
        if (res.code === 200 && res.data) {
          Message.success('修改成功');
          userStore.setUserInfo({
            ...userStore.getUserInfo,
            phone: trimBlank(formData.account, 'all')
          });
          close();
        } else {
          handleError(res);
        }
      })
      .catch((error) => {
        handleError(error);
      });
    }
  });
};

const close = () => {
  formData.account = '';
  formData.verifyCode = '';
  formRef.value?.clearValidate();
  cleanMess();
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
    <vft-form ref="formRef" :model="formData"
              @keypress.enter="handleSubmit">
      <user-form-item v-model:account="formData.account"
                      :placeholder="pageCfg.phonePlaceholder"
                      v-model:errorMess="errMess.account"/>
      <phone-code-form-item ref="updatePhoneCodeRef"
                            :phone="formData.account" :form="formRef"
                            v-model:verifyCode="formData.verifyCode"
                            v-model:errorMess="errMess.code"
                            v-model:errorAccountMess="errMess.account" :smsType="smsType"
                            :formValidateField="['account']"/>
      <vft-form-item class="fr">
        <vft-button @click="close">取消</vft-button>
        <vft-button :loading="updateLoading" type="primary" @click="handleSubmit">
          确定
        </vft-button>
      </vft-form-item>
    </vft-form>
  </vft-dialog>
</template>
