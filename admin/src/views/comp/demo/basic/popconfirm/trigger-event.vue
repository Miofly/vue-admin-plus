<template>
  <vft-popconfirm
    confirm-button-text="Yes"
    cancvft-button-text="No"
    icon="ico-ep:info-filled"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
  >
    <template #reference>
      <vft-button>Delete</vft-button>
    </template>
  </vft-popconfirm>
</template>

<script setup lang="ts">

const confirmEvent = () => {
  console.log('confirm!');
};
const cancelEvent = () => {
  console.log('cancel!');
};
</script>
