<template>
  <vft-space wrap :size="size">
    <vft-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref(20);
</script>
