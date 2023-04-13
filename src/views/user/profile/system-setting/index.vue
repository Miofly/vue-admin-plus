<script setup lang="ts">

</script>

<template>
  <div class="system-setting-container">
    <span>message</span>
  </div>
</template>

<style lang="scss">
.system-setting-container {
  padding: 30px 0 0 50px;
  width: 700px;

  .item {
    height: 50px;
    font-size: 14px;
    border-bottom: getCssVar('border');
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .desc {
        color: getCssVar('text-regular-color');
        width: 100px;
      }
    }
  }
}
</style>
