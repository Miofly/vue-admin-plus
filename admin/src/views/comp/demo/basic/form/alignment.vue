<template>
  <vft-radio-group v-model="labelPosition" label="label position">
    <vft-radio-button label="left">Left</vft-radio-button>
    <vft-radio-button label="right">Right</vft-radio-button>
    <vft-radio-button label="top">Top</vft-radio-button>
  </vft-radio-group>
  <div style="margin: 20px" />
  <vft-form
    :labvft-position="labelPosition"
    labvft-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <vft-form-item label="Name">
      <vft-input v-model="formLabelAlign.name" />
    </vft-form-item>
    <vft-form-item label="Activity zone">
      <vft-input v-model="formLabelAlign.region" />
    </vft-form-item>
    <vft-form-item label="Activity form">
      <vft-input v-model="formLabelAlign.type" />
    </vft-form-item>
  </vft-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const labelPosition = ref('right');

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: ''
});
</script>
