<script lang="ts" setup>
import { formatPhoneBlack, phoneAddBlank } from '@vft/utils';
import { pageCfg, rules } from '@/views/user/config';

interface Props {
  account: string;
  placeholder?: string;
  errorMess?: string;
}

const { account, placeholder = pageCfg.phonePlaceholder, errorMess } = defineProps<Props>();

const emit = defineEmits(['update:account', 'update:errorMess']);

const handleInput = (value) => {
  emit('update:account', phoneAddBlank(value));
};

const handleKeyUp = (e) => {
  emit('update:account', formatPhoneBlack(e));
};
</script>

<template>
  <vft-form-item prop="account" :rules="rules.phone" :error="errorMess">
    <vft-input class="input text-black" maxlength="13" minlength="13" :model-value="account" clearable type="text" prefix-icon="ico-ep:user
" :placeholder="placeholder" @input="handleInput" @keyup="handleKeyUp" />
  </vft-form-item>
</template>
