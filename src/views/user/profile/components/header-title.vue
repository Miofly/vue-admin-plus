<script setup lang="ts">
interface Props {
  title: string;
}

const {
  title
} = defineProps<Props>();
</script>

<template>
  <div class="container">
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  //display: flex;
  .title {
    height: 35px;
    line-height: 35px;
    font-weight: 500;
    font-size: 14px;
    background-color: getCssVar('bg-color');
    padding-left: 20px;
  }
}

</style>
