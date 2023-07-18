<template>
  <vft-tabs type="border-card" class="demo-tabs">
    <vft-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <vft-icon icon="ico-ep:calendar"/>
          <span>Route</span>
        </span>
      </template>
      Route
    </vft-tab-pane>
    <vft-tab-pane label="Config">Config</vft-tab-pane>
    <vft-tab-pane label="Role">Role</vft-tab-pane>
    <vft-tab-pane label="Task">Task</vft-tab-pane>
  </vft-tabs>
</template>

<style>
.demo-tabs > .vft-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .vft-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
