<template>
  <vft-row class="block-col-2">
    <vft-col :span="8">
      <span class="demonstration">hover to trigger</span>
      <vft-dropdown>
        <span class="vft-dropdown-link">
          Dropdown List<vft-icon class="vft-icon--right" icon="ico-ep:arrow-down"/>
        </span>
        <template #dropdown>
          <vft-dropdown-menu>
            <vft-dropdown-item icon="ico-ep:plus">Action 1</vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep:circle-plus-filled">
              Action 2
            </vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep:circle-plus">Action 3</vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep:check">Action 4</vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep:circle-check">Action 5</vft-dropdown-item>
          </vft-dropdown-menu>
        </template>
      </vft-dropdown>
    </vft-col>
    <vft-col :span="8">
      <span class="demonstration">click to trigger</span>
      <vft-dropdown trigger="click">
        <span class="vft-dropdown-link">
          Dropdown List<vft-icon class="vft-icon--right" icon="ico-ep:arrow-down"/>
        </span>
        <template #dropdown>
          <vft-dropdown-menu>
            <vft-dropdown-item icon="ico-ep:plus">Action 1</vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep:circle-plus-filled">
              Action 2
            </vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep-circlePlus">Action 3</vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep-check">Action 4</vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep-circleCheck">Action 5</vft-dropdown-item>
          </vft-dropdown-menu>
        </template>
      </vft-dropdown>
    </vft-col>
    <vft-col :span="8">
      <span class="demonstration">right click to trigger</span>
      <vft-dropdown trigger="contextmenu">
        <span class="vft-dropdown-link">
          Dropdown List<vft-icon class="vft-icon--right" icon="ico-ep:arrow-down"/>
        </span>
        <template #dropdown>
          <vft-dropdown-menu>
            <vft-dropdown-item icon="ico-ep:plus">Action 1</vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep:circle-plus-filled">
              Action 2
            </vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep:circle-plus">Action 3</vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep:check">Action 4</vft-dropdown-item>
            <vft-dropdown-item icon="ico-ep:circle-check">Action 5</vft-dropdown-item>
          </vft-dropdown-menu>
        </template>
      </vft-dropdown>
    </vft-col>
  </vft-row>
</template>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--vft-text-secondary-color);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
