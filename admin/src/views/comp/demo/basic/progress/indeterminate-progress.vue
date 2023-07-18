<template>
  <div class="demo-progress">
    <vft-progress :percentage="50" :indeterminate="true" />
    <vft-progress :percentage="100" :format="format" :indeterminate="true" />
    <vft-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5"
    />
    <vft-progress
      :percentage="100"
      status="warning"
      :indeterminate="true"
      :duration="1"
    />
    <vft-progress :percentage="50" status="exception" :indeterminate="true" />
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
