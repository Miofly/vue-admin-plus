<template>
  <div class="demo-progress">
    <vft-progress :percentage="50">
      <vft-button text>Content</vft-button>
    </vft-progress>
    <vft-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </vft-progress>
    <vft-progress type="circle" :percentage="100" status="success">
      <vft-button type="success" icon="ico-ep:check" circle />
    </vft-progress>
    <vft-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </vft-progress>
  </div>
</template>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .vft-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .vft-progress--circle {
  margin-right: 15px;
}
</style>
