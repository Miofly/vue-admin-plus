<template>
  <vft-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <vft-radio-button label="top">top</vft-radio-button>
    <vft-radio-button label="right">right</vft-radio-button>
    <vft-radio-button label="bottom">bottom</vft-radio-button>
    <vft-radio-button label="left">left</vft-radio-button>
  </vft-radio-group>

  <vft-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <vft-tab-pane label="User">User</vft-tab-pane>
    <vft-tab-pane label="Config">Config</vft-tab-pane>
    <vft-tab-pane label="Role">Role</vft-tab-pane>
    <vft-tab-pane label="Task">Task</vft-tab-pane>
  </vft-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const tabPosition = ref('left');
</script>
<style>
.demo-tabs > .vft-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.vft-tabs--right .vft-tabs__content,
.vft-tabs--left .vft-tabs__content {
  height: 100%;
}
</style>
