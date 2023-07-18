<template>
  <div class="demo-progress">
    <vft-progress :percentage="50" :stroke-width="15" striped />
    <vft-progress
      :percentage="30"
      :stroke-width="15"
      status="warning"
      striped
      striped-flow
    />
    <vft-progress
      :percentage="100"
      :stroke-width="15"
      status="success"
      striped
      striped-flow
      :duration="10"
    />
    <vft-progress
      :percentage="percentage"
      :stroke-width="15"
      status="exception"
      striped
      striped-flow
      :duration="duration"
    />
    <vft-button-group>
      <vft-button icon="ico-ep:minus" @click="decrease" />
      <vft-button icon="ico-ep:plus" @click="increase" />
    </vft-button-group>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const percentage = ref<number>(70);
const duration = computed(() => Math.floor(percentage.value / 10));

const increase = () => {
  percentage.value += 10;
  if (percentage.value > 100) {
    percentage.value = 100;
  }
};
const decrease = () => {
  percentage.value -= 10;
  if (percentage.value < 0) {
    percentage.value = 0;
  }
};
</script>

<style scoped>
.demo-progress .vft-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
