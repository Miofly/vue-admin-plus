<template>
  <div>
    <div style="margin-bottom: 15px">
      direction:
      <vft-radio v-model="direction" label="horizontal">horizontal</vft-radio>
      <vft-radio v-model="direction" label="vertical">vertical</vft-radio>
    </div>
    <div style="margin-bottom: 15px"/>
    <vft-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 100%"
    >
      <vft-card v-for="i in 5" :key="i" class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <vft-button class="button" text>Operation button</vft-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </vft-card>
    </vft-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const direction = ref('horizontal');
const fillRatio = ref(30);
</script>
