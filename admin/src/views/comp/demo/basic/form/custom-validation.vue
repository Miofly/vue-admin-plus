<template>
  <vft-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    labvft-width="120px"
    class="demo-ruleForm"
  >
    <vft-form-item label="Password" prop="pass">
      <vft-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </vft-form-item>
    <vft-form-item label="Confirm" prop="checkPass">
      <vft-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </vft-form-item>
    <vft-form-item label="Age" prop="age">
      <vft-input v-model.number="ruleForm.age" />
    </vft-form-item>
    <vft-form-item>
      <vft-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</vft-button
      >
      <vft-button @click="resetForm(ruleFormRef)">Reset</vft-button>
    </vft-form-item>
  </vft-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'vft';

const ruleFormRef = ref<FormInstance>();

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'));
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'));
      } else {
        callback();
      }
    }
  }, 1000);
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'));
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField('checkPass', () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'));
  } else if (value !== ruleForm.pass) {
    callback(new Error('Two inputs don\'t match!'));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: ''
});

const rules = reactive<FormRules>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }]
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
