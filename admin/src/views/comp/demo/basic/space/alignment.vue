<template>
  <div class="alignment-container">
    <vft-space>
      string
      <vft-button> button </vft-button>
      <vft-card>
        <template #header> header </template>
        body
      </vft-card>
    </vft-space>
  </div>
  <div class="alignment-container">
    <vft-space alignment="flex-start">
      string
      <vft-button> button </vft-button>
      <vft-card>
        <template #header> header </template>
        body
      </vft-card>
    </vft-space>
  </div>
  <div class="alignment-container">
    <vft-space alignment="flex-end">
      string
      <vft-button> button </vft-button>
      <vft-card>
        <template #header> header </template>
        body
      </vft-card>
    </vft-space>
  </div>
</template>

<style>
.alignment-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid var(--vft-border-color);
}
</style>
