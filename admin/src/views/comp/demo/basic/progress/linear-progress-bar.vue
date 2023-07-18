<template>
  <div class="demo-progress">
    <vft-progress :percentage="50" />
    <vft-progress :percentage="100" :format="format" />
    <vft-progress :percentage="100" status="success" />
    <vft-progress :percentage="100" status="warning" />
    <vft-progress :percentage="50" status="exception" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`);
</script>

<style scoped>
.demo-progress .vft-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
