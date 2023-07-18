<template>
  <vft-checkbox-group v-model="checkList">
    <vft-checkbox value="Option A">123123</vft-checkbox>
    <vft-checkbox value="Option B"/>
    <vft-checkbox value="Option C"/>
    <vft-checkbox value="disabled" disabled/>
    <vft-checkbox value="selected and disabled" disabled/>
  </vft-checkbox-group>

  <vft-checkbox-group v-model="checkList1"
    :options="[
      {
        label: '选项1',
        value: '1',
      },
      {
        label: '选项2',
        value: '2',
      },
    ]"/>

  <vft-checkbox-group v-model="checkList1" useButton
    :options="[
      {
        label: '选项1',
        value: '1',
      },
      {
        label: '选项2',
        value: '2',
      },
    ]"/>

  <vft-checkbox-group v-model="checkList1"
    :options="[
      {
        label: '选项1',
        value: '1',
        border: true
      },
      {
        label: '选项2',
        value: '2',
        border: true
      },
    ]"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkList = ref(['selected and disabled', 'Option A']);
const checkList1 = ref(['1']);
</script>
