<template>
  <vft-row class="row-bg">
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple-light" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
  </vft-row>
  <vft-row class="row-bg" justify="center">
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple-light" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
  </vft-row>
  <vft-row class="row-bg" justify="end">
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple-light" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
  </vft-row>
  <vft-row class="row-bg" justify="space-between">
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple-light" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
  </vft-row>
  <vft-row class="row-bg" justify="space-around">
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple-light" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
  </vft-row>
  <vft-row class="row-bg" justify="space-evenly">
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple-light" /></vft-col>
    <vft-col :span="6"><div class="grid-content ep-bg-purple" /></vft-col>
  </vft-row>
</template>

<style lang="scss" scoped>
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
