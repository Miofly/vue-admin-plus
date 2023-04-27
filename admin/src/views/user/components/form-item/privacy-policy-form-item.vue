<script setup lang="ts">
import { rules } from '@/views/user/config';
import { openWindow } from '@vft/utils';

import { LINK_AGREEMENT_USER, LINK_AGREEMENT_PRIVACY } from '@/router/constants';
interface Props {
  checked?: boolean;
}

const {
  checked
} = defineProps<Props>();

const emit = defineEmits(['update:checked']);

const initStyle = {
  '--vft-checkbox-text-color': 'rgba(0,0,0,0.85)'
};
</script>

<template>
  <vft-form-item :rules="rules.privacy" prop="checked">
    <vft-checkbox :style="initStyle" :model-value="checked"
      @change="(value) => emit('update:checked', value)">
      已阅读并同意
    </vft-checkbox>
    <vft-link :underline="false" type="primary" @click="openWindow(LINK_AGREEMENT_USER)">
      用户协议
    </vft-link>
    、
    <vft-link :underline="false" type="primary" @click="openWindow(LINK_AGREEMENT_PRIVACY)">
      隐私政策
    </vft-link>
  </vft-form-item>
</template>
