<template>
  <vft-form :inline="true" :model="formInline" class="demo-form-inline">
    <vft-form-item label="Approved by">
      <vft-input v-model="formInline.user" placeholder="Approved by" />
    </vft-form-item>
    <vft-form-item label="Activity zone">
      <vft-select v-model="formInline.region" placeholder="Activity zone">
        <!--<vft-option label="Zone one" value="shanghai" />-->
        <!--<vft-option label="Zone two" value="beijing" />-->
      </vft-select>
    </vft-form-item>
    <vft-form-item>
      <vft-button type="primary" @click="onSubmit">Query</vft-button>
    </vft-form-item>
  </vft-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const formInline = reactive({
  user: '',
  region: ''
});

const onSubmit = () => {
  console.log('submit!');
};
</script>
