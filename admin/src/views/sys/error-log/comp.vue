<script setup lang="ts">
const emit = defineEmits(['click']);
</script>

<template>
  <div @click="emit('click')">
    21312
    <slot/>
  </div>
</template>
