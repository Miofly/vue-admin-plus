<template>
  <vft-space direction="vertical" alignment="flex-start">
    <div>
      <label style="margin-right: 16px">Switch Loading</label>
      <vft-switch v-model="loading" />
    </div>
    <vft-skeleton
      style="width: 240px"
      :loading="loading"
      animated
      :throttle="500"
    >
      <template #template>
        <vft-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <vft-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <vft-skeleton-item variant="text" style="margin-right: 16px" />
            <vft-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <vft-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Delicious hamburger</span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <vft-button text class="button">operation button</vft-button>
            </div>
          </div>
        </vft-card>
      </template>
    </vft-skeleton>
  </vft-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(false);
const currentDate = new Date().toDateString();
</script>
