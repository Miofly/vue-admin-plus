<template>
  <vft-dropdown size="large" split-button type="primary">
    Large
    <template #dropdown>
      <vft-dropdown-menu>
        <vft-dropdown-item>Action 1</vft-dropdown-item>
        <vft-dropdown-item>Action 2</vft-dropdown-item>
        <vft-dropdown-item>Action 3</vft-dropdown-item>
        <vft-dropdown-item>Action 4</vft-dropdown-item>
      </vft-dropdown-menu>
    </template>
  </vft-dropdown>

  <vft-dropdown split-button type="primary">
    Default
    <template #dropdown>
      <vft-dropdown-menu>
        <vft-dropdown-item>Action 1</vft-dropdown-item>
        <vft-dropdown-item>Action 2</vft-dropdown-item>
        <vft-dropdown-item>Action 3</vft-dropdown-item>
        <vft-dropdown-item>Action 4</vft-dropdown-item>
      </vft-dropdown-menu>
    </template>
  </vft-dropdown>

  <vft-dropdown size="small" split-button type="primary">
    Small
    <template #dropdown>
      <vft-dropdown-menu>
        <vft-dropdown-item>Action 1</vft-dropdown-item>
        <vft-dropdown-item>Action 2</vft-dropdown-item>
        <vft-dropdown-item>Action 3</vft-dropdown-item>
        <vft-dropdown-item>Action 4</vft-dropdown-item>
      </vft-dropdown-menu>
    </template>
  </vft-dropdown>
</template>
<style scoped>
.example-showcase .vft-dropdown + .vft-dropdown {
  margin-left: 15px;
}
</style>
