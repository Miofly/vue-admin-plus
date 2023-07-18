<template>
  <vft-form :model="form" labvft-width="120px">
    <vft-form-item label="Activity name">
      <vft-input v-model="form.name" />
    </vft-form-item>
    <vft-form-item label="Activity zone">
      <vft-select v-model="form.region" placeholder="please select your zone">
        <!--<vft-option label="Zone one" value="shanghai" />-->
        <!--<vft-option label="Zone two" value="beijing" />-->
      </vft-select>
    </vft-form-item>
    <vft-form-item label="Activity time">
      <vft-col :span="11">
        <vft-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </vft-col>
      <vft-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </vft-col>
      <vft-col :span="11">
        <vft-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </vft-col>
    </vft-form-item>
    <vft-form-item label="Instant delivery">
      <vft-switch v-model="form.delivery" />
    </vft-form-item>
    <vft-form-item label="Activity type">
      <vft-checkbox-group v-model="form.type">
        <vft-checkbox label="Online activities" name="type" />
        <vft-checkbox label="Promotion activities" name="type" />
        <vft-checkbox label="Offline activities" name="type" />
        <vft-checkbox label="Simple brand exposure" name="type" />
      </vft-checkbox-group>
    </vft-form-item>
    <vft-form-item label="Resources">
      <vft-radio-group v-model="form.resource">
        <vft-radio label="Sponsor" />
        <vft-radio label="Venue" />
      </vft-radio-group>
    </vft-form-item>
    <vft-form-item label="Activity form">
      <vft-input v-model="form.desc" type="textarea" />
    </vft-form-item>
    <vft-form-item>
      <vft-button type="primary" @click="onSubmit">Create</vft-button>
      <vft-button>Cancel</vft-button>
    </vft-form-item>
  </vft-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
});

const onSubmit = () => {
  console.log('submit!');
};
</script>
