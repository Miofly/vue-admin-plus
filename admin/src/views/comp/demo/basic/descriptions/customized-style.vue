<template>
  <vft-descriptions title="Customized style list" :column="3" border>
    <vft-descriptions-item
      label="Username"
      labvft-align="right"
      align="center"
      labvft-class-name="my-label"
      class-name="my-content"
      width="150px"
      >kooriookami</vft-descriptions-item
    >
    <vft-descriptions-item label="Telephone" labvft-align="right" align="center"
      >18100000000</vft-descriptions-item
    >
    <vft-descriptions-item label="Place" labvft-align="right" align="center"
      >Suzhou</vft-descriptions-item
    >
    <vft-descriptions-item label="Remarks" labvft-align="right" align="center">
      <vft-tag size="small">School</vft-tag>
    </vft-descriptions-item>
    <vft-descriptions-item label="Address" labvft-align="right" align="center"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</vft-descriptions-item
    >
  </vft-descriptions>
</template>
<style scoped>
.my-label {
  background: var(--vft-success-color-light-9);
}
.my-content {
  background: var(--vft-danger-color-light-9);
}
</style>
