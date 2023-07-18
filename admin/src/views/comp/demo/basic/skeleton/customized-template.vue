<template>
  <vft-skeleton style="width: 240px">
    <template #template>
      <vft-skeleton-item variant="image" style="width: 240px; height: 240px" />
      <div style="padding: 14px">
        <vft-skeleton-item variant="p" style="width: 50%" />
        <div
          style="
            display: flex;
            align-items: center;
            justify-items: space-between;
          "
        >
          <vft-skeleton-item variant="text" style="margin-right: 16px" />
          <vft-skeleton-item variant="text" style="width: 30%" />
        </div>
      </div>
    </template>
  </vft-skeleton>
</template>
