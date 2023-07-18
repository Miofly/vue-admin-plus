<template>
  <vft-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon
  />
  <vft-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon
  />
  <vft-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon
  />
  <vft-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon
  />
</template>
<style scoped>
.vft-alert {
  margin: 20px 0 0;
}
.vft-alert:first-child {
  margin: 0;
}
</style>
