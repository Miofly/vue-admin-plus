<template>
  <div>
    <vft-link :underline="false">Without Underline</vft-link>
    <vft-link>With Underline</vft-link>
  </div>
</template>
<style scoped>
.vft-link {
  margin-right: 8px;
}
.vft-link .vft-icon--right.vft-icon {
  vertical-align: text-bottom;
}
</style>
