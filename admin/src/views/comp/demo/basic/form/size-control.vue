<template>
  <div>
    <vft-radio-group v-model="size" label="size control">
      <vft-radio-button label="large">large</vft-radio-button>
      <vft-radio-button label="default">default</vft-radio-button>
      <vft-radio-button label="small">small</vft-radio-button>
    </vft-radio-group>
    <vft-radio-group v-model="labelPosition" label="position control">
      <vft-radio-button label="left">Left</vft-radio-button>
      <vft-radio-button label="right">Right</vft-radio-button>
      <vft-radio-button label="top">Top</vft-radio-button>
    </vft-radio-group>
  </div>
  <br />
  <vft-form
    ref="form"
    :model="sizeForm"
    labvft-width="auto"
    :labvft-position="labelPosition"
    :size="size"
  >
    <vft-form-item label="Activity name">
      <vft-input v-model="sizeForm.name" />
    </vft-form-item>
    <vft-form-item label="Activity zone">
      <vft-select
        v-model="sizeForm.region"
        placeholder="please select your zone"
      >
        <!--<vft-option label="Zone one" value="shanghai" />-->
        <!--<vft-option label="Zone two" value="beijing" />-->
      </vft-select>
    </vft-form-item>
    <vft-form-item label="Activity time">
      <vft-col :span="11">
        <vft-date-picker
          v-model="sizeForm.date1"
          type="date"
          label="Pick a date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </vft-col>
      <vft-col class="text-center" :span="1" style="margin: 0 0.5rem">-</vft-col>
      <vft-col :span="11">
        <vft-time-picker
          v-model="sizeForm.date2"
          label="Pick a time"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </vft-col>
    </vft-form-item>
    <vft-form-item label="Activity type">
      <vft-checkbox-group v-model="sizeForm.type">
        <vft-checkbox-button label="Online activities" name="type" />
        <vft-checkbox-button label="Promotion activities" name="type" />
      </vft-checkbox-group>
    </vft-form-item>
    <vft-form-item label="Resources">
      <vft-radio-group v-model="sizeForm.resource">
        <vft-radio border label="Sponsor" />
        <vft-radio border label="Venue" />
      </vft-radio-group>
    </vft-form-item>
    <vft-form-item>
      <vft-button type="primary" @click="onSubmit">Create</vft-button>
      <vft-button>Cancel</vft-button>
    </vft-form-item>
  </vft-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const size = ref('default');
const labelPosition = ref('right');

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
});

function onSubmit() {
  console.log('submit!');
}
</script>

<style>
.vft-radio-group {
  margin-right: 12px;
}
</style>
