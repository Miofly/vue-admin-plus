<script setup lang="ts">
import { useUserInfo } from '@/use/use-user-info';
import { changePw } from '@/views/user/apis';
import PwdFormItem from '@/views/user/components/form-item/pwd-form-item.vue';
import { checkPwdSame, pageCfg, rules } from '@/views/user/config';
import { useErrorMess } from '@/views/user/use';
import { encryptByMd5, trimBlank } from '@vft/utils';
import { type FormInstance } from 'vft';
import PhoneVerifyDialog from '../../components/phone-verify-dialog.vue';

const phoneVerifyVisible = ref(false);

const { getUserPhone } = useUserInfo();
const hasPwd = computed(() => !!getUserPhone.value);

function changePhone() {
  if (hasPwd.value) {
    phoneVerifyVisible.value = true;
  } else {
    dialogVisible.value = true;
  }
}

const formRef = ref<FormInstance>();
const dialogVisible = ref(false);
const formData = reactive({
  account: getUserPhone.value,
  password: '',
  rePassword: ''
});

const errMess = reactive({
  pwd: '',
  code: '',
  account: ''
});

const { cleanMess, handleError } = useErrorMess(errMess);

const { runAsync, loading } = useRequest(changePw, {
  manual: true
});

const handleSubmit = async () => {
  await formRef.value!.validate(async (valid) => {
    if (valid) {
      cleanMess();
      runAsync({
        password: encryptByMd5(formData.password),
        phone: trimBlank(formData.account, 'all'),
        smsVerifyCode: ''
      }).then((res) => {
        if (res.code === 200 && res.data) {
          Message.success('修改成功');
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
  formData.password = '';
  formData.rePassword = '';
  cleanMess();
  dialogVisible.value = false;
};
</script>

<template>
  <div class="item">
    <div class="left">
      <span class="desc">账号密码</span>
      <div class="info">
        <span>*****</span>
      </div>
    </div>
    <div class="action">
      <span class="common-link" @click="changePhone">
        {{ hasPwd ? '修改密码' : '设置密码' }}
      </span>
    </div>
  </div>

  <phone-verify-dialog @pass-verify="dialogVisible=true" v-model:visible="phoneVerifyVisible"/>

  <vft-dialog
    v-model="dialogVisible"
    :title="hasPwd ? '修改密码' : '设置密码'"
    width="500px"
    alignCenter
    destroy-on-close
    :open-delay="400"
    @close="close">
    <div class="mb-25px">
      <span>请输入你的新密码</span>
    </div>
    <vft-form ref="formRef" :model="formData" @keypress.enter="handleSubmit">
      <pwd-form-item class="pwd-input" v-model:password="formData.password"/>
      <pwd-form-item class="pwd-input" v-model:rePassword="formData.rePassword"
                     propName="rePassword"
                     :rules="[...rules.regForgotPwd, checkPwdSame(formData.password)]"
                     :placeholder="pageCfg.rePwaPlaceholder"/>
      <vft-form-item class="fr">
        <vft-button @click="close">取消</vft-button>
        <vft-button :loading="loading" type="primary" @click="handleSubmit">
          确定
        </vft-button>
      </vft-form-item>
    </vft-form>
  </vft-dialog>
</template>
