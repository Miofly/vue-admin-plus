<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <vft-button>top-start</vft-button>
      </vft-tooltip>
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <vft-button>top</vft-button>
      </vft-tooltip>
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <vft-button>top-end</vft-button>
      </vft-tooltip>
    </div>
    <div class="row">
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <vft-button>left-start</vft-button>
      </vft-tooltip>
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <vft-button>right-start</vft-button>
      </vft-tooltip>
    </div>
    <div class="row">
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <vft-button class="mt-3 mb-3">left</vft-button>
      </vft-tooltip>
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <vft-button>right</vft-button>
      </vft-tooltip>
    </div>
    <div class="row">
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <vft-button>left-end</vft-button>
      </vft-tooltip>
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <vft-button>right-end</vft-button>
      </vft-tooltip>
    </div>
    <div class="row center">
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <vft-button>bottom-start</vft-button>
      </vft-tooltip>
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <vft-button>bottom</vft-button>
      </vft-tooltip>
      <vft-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <vft-button>bottom-end</vft-button>
      </vft-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
