<template>
  <vft-row :gutter="20">
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
  </vft-row>
</template>

<style lang="scss">
@use 'index' as *;
.vft-row {
  margin-bottom: 20px;
}
.vft-row:last-child {
  margin-bottom: 0;
}
.vft-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
