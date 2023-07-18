<script setup lang="ts">
interface Props {
	color: string
  bgColor: string
  name: string
}

const {
  color,
  bgColor,
  name
} = defineProps<Props>();

const style = computed(() => {
	return {
    color,
    backgroundColor: bgColor
  };
});
</script>

<template>
  <b class="status-container" :style="style">
    <b class="status-container-text">{{ name }}</b>
  </b>
</template>

<style scoped lang="scss">
.status-container{
  padding: 2px 3px;
  border-radius: 8px;
  margin-left: 1px;
  //transform: translateY(-1px);
  display: inline-block;
  @include flex-center(true);
  &-text {
    font-weight: 700;
    font-size: 12px;
    line-height: 8px;
    transform: scale(0.8);
    display: inline-block;
  }
}
</style>
