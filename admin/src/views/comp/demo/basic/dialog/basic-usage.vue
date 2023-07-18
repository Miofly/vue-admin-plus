<template>
  <vft-button text @click="dialogVisible = true">
    click to open the Dialog
  </vft-button>

  <vft-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <vft-button @click="dialogVisible = false">Cancel</vft-button>
        <vft-button type="primary" @click="dialogVisible = false">
          Confirm
        </vft-button>
      </span>
    </template>
  </vft-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  // MessageBox.confirm('Are you sure to close this dialog?')
  //   .then(() => {
  //     done()
  //   })
  //   .catch(() => {
  //     // catch error
  //   })
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
