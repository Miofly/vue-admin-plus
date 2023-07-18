<template>
  <vft-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </vft-button>

  <vft-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
    <div>
      <vft-button @click="innerDrawer = true">Click me!</vft-button>
      <vft-drawer
        v-model="innerDrawer"
        title="I'm inner Drawer"
        :append-to-body="true"
      >
        <p>_(:зゝ∠)_</p>
      </vft-drawer>
    </div>
  </vft-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import { ElMessageBox } from 'vft'

const drawer = ref(false);
const innerDrawer = ref(false);

const handleClose = (done: () => void) => {
  // ElMessageBox.confirm('You still have unsaved data, proceed?')
  //   .then(() => {
  //     done()
  //   })
  //   .catch(() => {
  //     // catch error
  //   })
};
</script>
