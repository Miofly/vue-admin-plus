<script lang="ts" setup>
import { formatPhoneBlack, phoneAddBlank } from '@vft/utils';
import { pageCfg, rules } from '@/views/user/config';

interface Props {
  account: string;
  placeholder?: string;
}

const { placeholder = pageCfg.phonePlaceholder } = defineProps<Props>();

const account = defineModel('account');
const errorMess = defineModel('errorMess');

const handleInput = (value) => {
  account.value = phoneAddBlank(value);
};

const handleKeyUp = (e) => {
  account.value = formatPhoneBlack(e);
};
</script>

<template>
  <vft-form-item prop="account" :rules="rules.phone" :error="errorMess">
    <vft-input class="input text-black" maxlength="13" minlength="13" :model-value="account" clearable type="text" prefix-icon="ico-ep:user
" :placeholder="placeholder" @input="handleInput" @keyup="handleKeyUp" />
  </vft-form-item>
</template>
