<template>
  <vft-container class="layout-container-demo" style="height: 500px">
    <vft-aside width="200px">
      <vft-scrollbar>
        <vft-menu :default-openeds="['1', '3']">
          <vft-sub-menu index="1">
            <template #title>
              <vft-icon icon="ico-ep:message"/>Navigator One
            </template>
            <vft-menu-item-group>
              <template #title>Group 1</template>
              <vft-menu-item index="1-1">Option 1</vft-menu-item>
              <vft-menu-item index="1-2">Option 2</vft-menu-item>
            </vft-menu-item-group>
            <vft-menu-item-group title="Group 2">
              <vft-menu-item index="1-3">Option 3</vft-menu-item>
            </vft-menu-item-group>
            <vft-sub-menu index="1-4">
              <template #title>Option4</template>
              <vft-menu-item index="1-4-1">Option 4-1</vft-menu-item>
            </vft-sub-menu>
          </vft-sub-menu>
          <vft-sub-menu index="2">
            <template #title>
              <vft-icon icon="ico-ep-menu"/>Navigator Two
            </template>
            <vft-menu-item-group>
              <template #title>Group 1</template>
              <vft-menu-item index="2-1">Option 1</vft-menu-item>
              <vft-menu-item index="2-2">Option 2</vft-menu-item>
            </vft-menu-item-group>
            <vft-menu-item-group title="Group 2">
              <vft-menu-item index="2-3">Option 3</vft-menu-item>
            </vft-menu-item-group>
            <vft-sub-menu index="2-4">
              <template #title>Option 4</template>
              <vft-menu-item index="2-4-1">Option 4-1</vft-menu-item>
            </vft-sub-menu>
          </vft-sub-menu>
          <vft-sub-menu index="3">
            <template #title>
              <vft-icon icon="ico-ep:setting"/>Navigator Three
            </template>
            <vft-menu-item-group>
              <template #title>Group 1</template>
              <vft-menu-item index="3-1">Option 1</vft-menu-item>
              <vft-menu-item index="3-2">Option 2</vft-menu-item>
            </vft-menu-item-group>
            <vft-menu-item-group title="Group 2">
              <vft-menu-item index="3-3">Option 3</vft-menu-item>
            </vft-menu-item-group>
            <vft-sub-menu index="3-4">
              <template #title>Option 4</template>
              <vft-menu-item index="3-4-1">Option 4-1</vft-menu-item>
            </vft-sub-menu>
          </vft-sub-menu>
        </vft-menu>
      </vft-scrollbar>
    </vft-aside>

    <vft-container>
      <vft-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <vft-dropdown>
            <vft-icon icon="ico-ep:setting" style="margin-right: 8px; margin-top: 1px"
              >
            /></vft-icon>
            <template #dropdown>
              <vft-dropdown-menu>
                <vft-dropdown-item>View</vft-dropdown-item>
                <vft-dropdown-item>Add</vft-dropdown-item>
                <vft-dropdown-item>Delete</vft-dropdown-item>
              </vft-dropdown-menu>
            </template>
          </vft-dropdown>
          <span>Tom</span>
        </div>
      </vft-header>

<!--      <vft-main>-->
<!--        <vft-scrollbar>-->
<!--          <vft-table :data="tableData">-->
<!--            <vft-table-column prop="date" label="Date" width="140" />-->
<!--            <vft-table-column prop="name" label="Name" width="120" />-->
<!--            <vft-table-column prop="address" label="Address" />-->
<!--          </vft-table>-->
<!--        </vft-scrollbar>-->
<!--      </vft-main>-->
    </vft-container>
  </vft-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles'
};
const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<style lang="scss" scoped>
@import "./common-layout";

:deep(.layout-container-demo) {
  .vft-header {
    position: relative;
    background-color: var(--vft-primary-color-light-7);
    color: var(--vft-text-primary-color);
  }
}

.vft-header {
  position: relative;
  background-color: var(--vft-primary-color-light-7);
  color: var(--vft-text-primary-color);
}

.layout-container-demo .vft-aside {
  color: var(--vft-text-primary-color);
  background: var(--vft-primary-color-light-8);
}
.layout-container-demo .vft-menu {
  border-right: none;
}
.layout-container-demo .vft-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
