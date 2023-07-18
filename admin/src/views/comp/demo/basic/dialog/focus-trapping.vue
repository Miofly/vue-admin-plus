<template>
  <vft-button text @click="dialogVisible = true">
    click to open the Dialog
  </vft-button>

  <div>
    <p>Close dialog and the input will be focused</p>
    <vft-input ref="inputRef" placeholder="Please input" />
  </div>

  <vft-dialog
    v-model="dialogVisible"
    destroy-on-close
    title="Tips"
    width="30%"
    @close-auto-focus="handleCloseAutoFocus"
  >
    <span>This is a message</span>
    <vft-divider />
    <vft-input placeholder="Initially focused" />
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
const inputRef = ref();

const handleCloseAutoFocus = () => {
  inputRef.value?.focus();
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
