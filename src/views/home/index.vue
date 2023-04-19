<template>
  主页
</template>

<style lang="scss" scoped>
.container {
  .tabs {
    margin: 7px 0 9px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 22px;

    .text {
      font-size: 12px;
      margin-right: 15px;
      line-height: 22px;
      font-weight: 500;
    }

    .date {
      margin-left: 36px;
    }
  }

  :deep(.enterprise-dynamics-menu) {
    border-bottom: none;
    margin-top: -2px;

    .vc-menu-item, .vc-sub-menu__title {
      font-size: 12px;
      border-bottom: none;
      //height: 20px;
    }
  }

  :deep(.tabs) {
    .vc-datepicker__title {
      color: black;
      margin-left: 36px;
      font-size: 12px;
      margin-right: 8px;
      line-height: 22px;
      font-weight: 500;
    }

    .vc-datepicker__title.is-hasValue {
      color: #409eff
    }
  }
}
</style>

