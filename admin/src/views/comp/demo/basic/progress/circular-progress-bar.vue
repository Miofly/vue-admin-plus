<template>
  <div class="demo-progress">
    <vft-progress type="circle" :percentage="0" />
    <vft-progress type="circle" :percentage="25" />
    <vft-progress type="circle" :percentage="100" status="success" />
    <vft-progress type="circle" :percentage="70" status="warning" />
    <vft-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>
<style scoped>
.demo-progress .vft-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .vft-progress--circle {
  margin-right: 15px;
}
</style>
