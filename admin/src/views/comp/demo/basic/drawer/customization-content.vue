<template>
  <vft-button text @click="table = true"
    >Open Drawer with nested table</vft-button
  >
  <vft-button text @click="dialog = true"
    >Open Drawer with nested form</vft-button
  >
  <vft-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
    1
  </vft-drawer>

  <vft-drawer
    ref="drawerRef"
    v-model="dialog"
    title="I have a nested form inside!"
    :before-close="handleClose"
    direction="ltr"
    class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <vft-form :model="form">
        <vft-form-item label="Name" :labvft-width="formLabelWidth">
          <vft-input v-model="form.name" autocomplete="off" />
        </vft-form-item>
        <vft-form-item label="Area" :labvft-width="formLabelWidth">
          <!--<vft-select-->
          <!--  v-model="form.region"-->
          <!--  placeholder="Please select activity area"-->
          <!--&gt;-->
          <!--  <vft-option label="Area1" value="shanghai" />-->
          <!--  <vft-option label="Area2" value="beijing" />-->
          <!--</vft-select>-->
        </vft-form-item>
      </vft-form>
      <div class="demo-drawer__footer">
        <vft-button @click="cancelForm">Cancel</vft-button>
        <vft-button type="primary" :loading="loading" @click="onClick">{{
          loading ? 'Submitting ...' : 'Submit'
        }}</vft-button>
      </div>
    </div>
  </vft-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const formLabelWidth = '80px';
let timer;

const table = ref(false);
const dialog = ref(false);
const loading = ref(false);

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

const gridData = [
  {
    date: '2016-05-02',
    name: 'Peter Parker',
    address: 'Queens, New York City'
  },
  {
    date: '2016-05-04',
    name: 'Peter Parker',
    address: 'Queens, New York City'
  },
  {
    date: '2016-05-01',
    name: 'Peter Parker',
    address: 'Queens, New York City'
  },
  {
    date: '2016-05-03',
    name: 'Peter Parker',
    address: 'Queens, New York City'
  }
];

const drawerRef = ref();
const onClick = () => {
  console.log(11);
  drawerRef.value!.close();
};

const handleClose = (done) => {
  if (loading.value) {
    return;
  }
  // ElMessageBox.confirm('Do you want to submit?')
  //   .then(() => {
  //     loading.value = true
  //     timer = setTimeout(() => {
  //       done()
  //       // 动画关闭需要一定的时间
  //       setTimeout(() => {
  //         loading.value = false
  //       }, 400)
  //     }, 2000)
  //   })
  //   .catch(() => {
  //     // catch error
  //   })
};

const cancelForm = () => {
  loading.value = false;
  dialog.value = false;
  clearTimeout(timer);
};
</script>
