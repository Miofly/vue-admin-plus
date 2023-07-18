<template>
  <vft-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <vft-tab-pane label="User" name="first">User</vft-tab-pane>
    <vft-tab-pane label="Config" name="second">Config</vft-tab-pane>
    <vft-tab-pane label="Role" name="third">Role</vft-tab-pane>
    <vft-tab-pane label="Task" name="fourth">Task</vft-tab-pane>
  </vft-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from 'vft';

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style>
.demo-tabs > .vft-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
