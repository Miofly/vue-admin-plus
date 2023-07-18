<template>
  <vft-button text @click="outerVisible = true">
    open the outer Dialog
  </vft-button>

  <vft-dialog v-model="outerVisible" title="Outer Dialog">
    <template #default>
      <vft-dialog
        v-model="innerVisible"
        width="30%"
        title="Inner Dialog"
        append-to-body
      />
    </template>
    <template #footer>
      <div class="dialog-footer">
        <vft-button @click="outerVisible = false">Cancel</vft-button>
        <vft-button type="primary" @click="innerVisible = true">
          open the inner Dialog
        </vft-button>
      </div>
    </template>
  </vft-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const outerVisible = ref(false);
const innerVisible = ref(false);
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
