<template>
  <div class="flex flex-wrap items-center">
    <vft-dropdown>
      <vft-button type="primary">
        Dropdown List<vft-icon class="vft-icon--right" icon="ico-ep:arrow-down"/>
      </vft-button>
      <template #dropdown>
        <vft-dropdown-menu>
          <vft-dropdown-item>Action 1</vft-dropdown-item>
          <vft-dropdown-item>Action 2</vft-dropdown-item>
          <vft-dropdown-item>Action 3</vft-dropdown-item>
          <vft-dropdown-item>Action 4</vft-dropdown-item>
          <vft-dropdown-item>Action 5</vft-dropdown-item>
        </vft-dropdown-menu>
      </template>
    </vft-dropdown>
    <vft-dropdown split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <vft-dropdown-menu>
          <vft-dropdown-item>Action 1</vft-dropdown-item>
          <vft-dropdown-item>Action 2</vft-dropdown-item>
          <vft-dropdown-item>Action 3</vft-dropdown-item>
          <vft-dropdown-item>Action 4</vft-dropdown-item>
          <vft-dropdown-item>Action 5</vft-dropdown-item>
        </vft-dropdown-menu>
      </template>
    </vft-dropdown>
  </div>
</template>

<script lang="ts" setup>
const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click');
};
</script>
<style scoped>
.example-showcase .vft-dropdown + .vft-dropdown {
  margin-left: 15px;
}
.example-showcase .vft-dropdown-link {
  cursor: pointer;
  color: var(--vft-primary-color);
  display: flex;
  align-items: center;
}
</style>
