<template>
  <vft-radio-group v-model="direction">
    <vft-radio label="ltr">left to right</vft-radio>
    <vft-radio label="rtl">right to left</vft-radio>
    <vft-radio label="ttb">top to bottom</vft-radio>
    <vft-radio label="btt">bottom to top</vft-radio>
  </vft-radio-group>

  <vft-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </vft-button>
  <vft-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
    with footer
  </vft-button>

  <vft-drawer
    v-model="drawer"
    title="I am the title"
    :direction="direction"
  >
    <span>Hi, there!</span>
  </vft-drawer>
  <vft-drawer v-model="drawer2" :direction="direction">
    <template #header>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <vft-radio v-model="radio1" label="Option 1" size="large"
          >Option 1</vft-radio
        >
        <vft-radio v-model="radio1" label="Option 2" size="large"
          >Option 2</vft-radio
        >
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <vft-button @click="cancelClick">cancel</vft-button>
        <vft-button type="primary" @click="confirmClick">confirm</vft-button>
      </div>
    </template>
  </vft-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref(false);
const drawer2 = ref(false);
const direction = ref('rtl');
const radio1 = ref('Option 1');
const handleClose = (done: () => void) => {
  // ElMessageBox.confirm('Are you sure you want to close this?')
  //   .then(() => {
  //     done()
  //   })
  //   .catch(() => {
  //     // catch error
  //   })
};
function cancelClick() {
  drawer2.value = false;
}
function confirmClick() {
  Message.success(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false;
    })
    .catch(() => {
      // catch error
    });
}
</script>
