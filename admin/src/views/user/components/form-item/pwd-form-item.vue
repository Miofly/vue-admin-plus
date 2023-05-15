<script setup lang="ts">
import type { FormItemRule } from 'vft';
import { pageCfg, rules as _rules } from '@/views/user/config';

interface Props {
  propName?: string
  /** 错误信息 */
  errorMess?: string
  placeholder?: string
  rules?: FormItemRule | FormItemRule[]
}

const {
  errorMess,
  rules = _rules.regForgotPwd,
  placeholder = pageCfg.pwaRegPlaceholder,
  propName = 'password'
} = defineProps<Props>();

const password = defineModel('password');
const rePassword = defineModel('rePassword');

function onInput (value) {
  password.value = value;
  rePassword.value = value;
}
</script>

<template>
  <vft-form-item :prop="propName" :rules="rules" :error="errorMess">
    <vft-input class="input" type="password"
      :model-value="propName === 'password' ? password : rePassword" show-password clearable
      :placeholder="placeholder" prefix-icon="ico-ep:lock"
      @input="onInput"
    />
  </vft-form-item>
</template>
