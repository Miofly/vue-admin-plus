<script setup lang="ts">
import type { FormItemRule } from 'vft';
import { pageCfg, rules as _rules } from '@/views/user/config';

interface Props {
  propName?: string
  /** 密码 */
  password?: string | number
  /** 重复密码 */
  rePassword?: string | number
  /** 错误信息 */
  errorMess?: string
  placeholder?: string
  rules?: FormItemRule | FormItemRule[]
}

const {
  password,
  rePassword,
  errorMess,
  rules = _rules.regForgotPwd,
  placeholder = pageCfg.pwaRegPlaceholder,
  propName = 'password'
} = defineProps<Props>();

const emit = defineEmits(['update:password', 'update:rePassword']);

function onInput (value) {
  emit('update:password', value);
  emit('update:rePassword', value);
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
