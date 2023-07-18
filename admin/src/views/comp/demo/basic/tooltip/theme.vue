<template>
  <vft-tooltip content="Top center" placement="top">
    <vft-button>Dark</vft-button>
  </vft-tooltip>
  <vft-tooltip content="Bottom center" placement="bottom" effect="light">
    <vft-button>Light</vft-button>
  </vft-tooltip>

  <vft-tooltip content="Bottom center" effect="customized">
    <vft-button>Customized theme</vft-button>
  </vft-tooltip>
</template>

<style>
.vft-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.vft-popper.is-customized .vft-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
