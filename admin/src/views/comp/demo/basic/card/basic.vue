<template>
  <vft-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <vft-button class="button" text>Operation button</vft-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </vft-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
