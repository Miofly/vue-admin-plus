<template>
  <vft-button text @click="centerDialogVisible = true">
    Click to open the Dialog
  </vft-button>

  <vft-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <vft-button @click="centerDialogVisible = false">Cancel</vft-button>
        <vft-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </vft-button>
      </span>
    </template>
  </vft-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const centerDialogVisible = ref(false);
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
