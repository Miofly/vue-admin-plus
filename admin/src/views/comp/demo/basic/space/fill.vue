<template>
  <div>
    <div style="margin-bottom: 15px">fill: <vft-switch v-model="fill" /></div>
    <vft-space :fill="fill" wrap>
      <vft-card v-for="i in 3" :key="i" class="box-card">
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

const fill = ref(true);
</script>
