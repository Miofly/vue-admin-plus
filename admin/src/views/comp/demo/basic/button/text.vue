<template>
  <p>Basic text button</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    <vft-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      >{{ button.text }}</vft-button
    >
  </div>

  <p>Background color always on</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    <vft-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      bg
      >{{ button.text }}</vft-button
    >
  </div>

  <p>Disabled text button</p>
  <div class="flex justify-space-between flex-wrap gap-4">
    <vft-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      disabled
      >{{ button.text }}</vft-button
    >
  </div>
</template>

<script setup lang="ts">
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' }
] as const;
</script>
