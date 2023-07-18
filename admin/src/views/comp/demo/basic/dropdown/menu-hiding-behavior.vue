<template>
  <vft-dropdown :hide-on-click="false">
    <span class="vft-dropdown-link">
      Dropdown List<vft-icon class="vft-icon--right" icon="ico-ep:arrow-down"/>
    </span>
    <template #dropdown>
      <vft-dropdown-menu>
        <vft-dropdown-item>Action 1</vft-dropdown-item>
        <vft-dropdown-item>Action 2</vft-dropdown-item>
        <vft-dropdown-item>Action 3</vft-dropdown-item>
        <vft-dropdown-item disabled>Action 4</vft-dropdown-item>
        <vft-dropdown-item divided>Action 5</vft-dropdown-item>
        <vft-dropdown-item divided>Action 6</vft-dropdown-item>
      </vft-dropdown-menu>
    </template>
  </vft-dropdown>
</template>

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
