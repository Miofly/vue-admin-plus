<template>
  <vft-radio-group v-model="size">
    <vft-radio label="large">Large</vft-radio>
    <vft-radio>Default</vft-radio>
    <vft-radio label="small">Small</vft-radio>
  </vft-radio-group>

  <vft-descriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <vft-descriptions-item label="Username">kooriookami</vft-descriptions-item>
    <vft-descriptions-item label="Telephone">18100000000</vft-descriptions-item>
    <vft-descriptions-item label="Place" :span="2">Suzhou</vft-descriptions-item>
    <vft-descriptions-item label="Remarks">
      <vft-tag size="small">School</vft-tag>
    </vft-descriptions-item>
    <vft-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </vft-descriptions-item>
  </vft-descriptions>

  <vft-descriptions
    title="Vertical list without border"
    :column="4"
    :size="size"
    direction="vertical"
    :style="blockMargin"
  >
    <vft-descriptions-item label="Username">kooriookami</vft-descriptions-item>
    <vft-descriptions-item label="Telephone">18100000000</vft-descriptions-item>
    <vft-descriptions-item label="Place" :span="2">Suzhou</vft-descriptions-item>
    <vft-descriptions-item label="Remarks">
      <vft-tag size="small">School</vft-tag>
    </vft-descriptions-item>
    <vft-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </vft-descriptions-item>
  </vft-descriptions>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const size = ref('');
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px'
  };
  return {
    marginTop: marginMap[size.value] || marginMap.default
  };
});
</script>

<style scoped>
.vft-descriptions {
  margin-top: 20px;
}
</style>
