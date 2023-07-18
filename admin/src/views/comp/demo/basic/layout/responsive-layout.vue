<template>
  <vft-row :gutter="10">
    <vft-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content ep-bg-purple"
    /></vft-col>
    <vft-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content ep-bg-purple-light"
    /></vft-col>
    <vft-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content ep-bg-purple"
    /></vft-col>
    <vft-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content ep-bg-purple-light"
    /></vft-col>
  </vft-row>
</template>

<style>
.vft-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
