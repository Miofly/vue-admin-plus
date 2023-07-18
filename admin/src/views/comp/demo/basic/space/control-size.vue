<template>
  <vft-space direction="vertical" alignment="start" :size="30">
    <vft-radio-group v-model="size">
      <vft-radio :label="'large'">large</vft-radio>
      <vft-radio :label="'default'">default</vft-radio>
      <vft-radio :label="'small'">small</vft-radio>
    </vft-radio-group>

    <vft-space wrap :size="size">
      <vft-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
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
  </vft-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const size = ref('default');
</script>
