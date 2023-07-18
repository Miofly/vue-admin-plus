<template>
  <vft-dropdown @command="handleCommand">
    <span class="vft-dropdown-link">
      Dropdown List<vft-icon class="vft-icon--right" icon="ico-ep:arrow-down"/>
    </span>
    <template #dropdown>
      <vft-dropdown-menu>
        <vft-dropdown-item command="a">Action 1</vft-dropdown-item>
        <vft-dropdown-item command="b">Action 2</vft-dropdown-item>
        <vft-dropdown-item command="c">Action 3</vft-dropdown-item>
        <vft-dropdown-item command="d" disabled>Action 4</vft-dropdown-item>
        <vft-dropdown-item command="e" divided>Action 5</vft-dropdown-item>
      </vft-dropdown-menu>
    </template>
  </vft-dropdown>
</template>

<script lang="ts" setup>

const handleCommand = (command: string | number | object) => {
  Message(`click on item ${command}`);
};
</script>
<style scoped>
.example-showcase .vft-dropdown-link {
  cursor: pointer;
  color: var(--vft-primary-color);
  display: flex;
  align-items: center;
}
</style>
