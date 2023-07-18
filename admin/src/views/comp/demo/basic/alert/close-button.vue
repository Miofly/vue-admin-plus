<template>
  <vft-alert title="unclosable alert" type="success" :closable="false" />
  <vft-alert title="customized close-text" type="info" close-text="Gotcha" />
  <vft-alert title="alert with callback" type="warning" @close="hello" />
</template>

<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert('Hello World!');
};
</script>
<style scoped>
.vft-alert {
  margin: 20px 0 0;
}
.vft-alert:first-child {
  margin: 0;
}
</style>
