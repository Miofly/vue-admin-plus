<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <span class="demonstration">Default</span>
      <vft-image :src="src" />
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      <vft-image :src="src">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </vft-image>
    </div>
  </div>
</template>

<script lang="ts" setup>
const src =
  'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
</script>

<style scoped>
.demo-image__placeholder .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--vft-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image__placeholder .demonstration {
  display: block;
  color: var(--vft-text-secondary-color);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__placeholder .vft-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}

.demo-image__placeholder.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--vft-fill-color-light);
  color: var(--vft-text-secondary-color);
  font-size: 14px;
}
.demo-image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>
