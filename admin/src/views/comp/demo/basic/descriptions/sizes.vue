<template>
  <vft-radio-group v-model="size">
    <vft-radio label="large">Large</vft-radio>
    <vft-radio>Default</vft-radio>
    <vft-radio label="small">Small</vft-radio>
  </vft-radio-group>

  <vft-descriptions
    class="margin-top"
    title="With border"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <vft-button type="primary">Operation</vft-button>
    </template>
    <vft-descriptions-item>
      <template #label>
        <div class="cell-item">
          <vft-icon icon="ico-ep:user" :style="iconStyle"/>
          Username
        </div>
      </template>
      kooriookami
    </vft-descriptions-item>
    <vft-descriptions-item>
      <template #label>
        <div class="cell-item">
          <vft-icon icon="ico-ep:iphone" :style="iconStyle"/>
          Telephone
        </div>
      </template>
      18100000000
    </vft-descriptions-item>
    <vft-descriptions-item>
      <template #label>
        <div class="cell-item">
          <vft-icon icon="ico-ep:location" :style="iconStyle"/>
          Place
        </div>
      </template>
      Suzhou
    </vft-descriptions-item>
    <vft-descriptions-item>
      <template #label>
        <div class="cell-item">
          <vft-icon icon="ico-ep:tickets" :style="iconStyle"/>
          Remarks
        </div>
      </template>
      <vft-tag size="small">School</vft-tag>
    </vft-descriptions-item>
    <vft-descriptions-item>
      <template #label>
        <div class="cell-item">
          <vft-icon icon="ico-ep:office-building" :style="iconStyle"/>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </vft-descriptions-item>
  </vft-descriptions>

  <vft-descriptions
    class="margin-top"
    title="Without border"
    :column="3"
    :size="size"
    :style="blockMargin"
  >
    <template #extra>
      <vft-button type="primary">Operation</vft-button>
    </template>
    <vft-descriptions-item label="Username">kooriookami</vft-descriptions-item>
    <vft-descriptions-item label="Telephone">18100000000</vft-descriptions-item>
    <vft-descriptions-item label="Place">Suzhou</vft-descriptions-item>
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
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px'
  };
  return {
    marginRight: marginMap[size.value] || marginMap.default
  };
});
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
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
