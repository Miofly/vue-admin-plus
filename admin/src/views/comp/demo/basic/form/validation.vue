<template>
  <vft-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    labvft-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <vft-form-item label="Activity name" prop="name">
      <vft-input v-model="ruleForm.name" />
    </vft-form-item>
    <vft-form-item label="Activity zone" prop="region">
      <vft-select v-model="ruleForm.region" placeholder="Activity zone">
        <!--<vft-option label="Zone one" value="shanghai" />-->
        <!--<vft-option label="Zone two" value="beijing" />-->
      </vft-select>
    </vft-form-item>
    <vft-form-item label="Activity count" prop="count">
      <vft-select
        v-model="ruleForm.count"
        placeholder="Activity count"
        :options="options"
      />
    </vft-form-item>
    <vft-form-item label="Activity time" required>
      <vft-col :span="11">
        <vft-form-item prop="date1">
          <vft-date-picker
            v-model="ruleForm.date1"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </vft-form-item>
      </vft-col>
      <vft-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </vft-col>
      <vft-col :span="11">
        <vft-form-item prop="date2">
          <vft-time-picker
            v-model="ruleForm.date2"
            label="Pick a time"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </vft-form-item>
      </vft-col>
    </vft-form-item>
    <vft-form-item label="Instant delivery" prop="delivery">
      <vft-switch v-model="ruleForm.delivery" />
    </vft-form-item>
    <vft-form-item label="Activity type" prop="type">
      <vft-checkbox-group v-model="ruleForm.type">
        <vft-checkbox label="Online activities" name="type" />
        <vft-checkbox label="Promotion activities" name="type" />
        <vft-checkbox label="Offline activities" name="type" />
        <vft-checkbox label="Simple brand exposure" name="type" />
      </vft-checkbox-group>
    </vft-form-item>
    <vft-form-item label="Resources" prop="resource">
      <vft-radio-group v-model="ruleForm.resource">
        <vft-radio label="Sponsorship" />
        <vft-radio label="Venue" />
      </vft-radio-group>
    </vft-form-item>
    <vft-form-item label="Activity form" prop="desc">
      <vft-input v-model="ruleForm.desc" type="textarea" />
    </vft-form-item>
    <vft-form-item>
      <vft-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </vft-button>
      <vft-button @click="resetForm(ruleFormRef)">Reset</vft-button>
    </vft-form-item>
  </vft-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'vft';

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change'
    }
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change'
    }
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change'
    }
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change'
    }
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' }
  ]
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`
}));
</script>
