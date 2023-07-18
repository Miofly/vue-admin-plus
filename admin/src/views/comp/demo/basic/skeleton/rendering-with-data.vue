<template>
  <vft-space direction="vertical" alignment="flex-start">
    <vft-button @click="setLoading">Click me to reload</vft-button>
    <vft-skeleton style="width: 240px" :loading="loading" animated :count="3">
      <template #template>
        <vft-skeleton-item variant="image" style="width: 400px; height: 267px" />
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
        <vft-card
          v-for="item in lists"
          :key="item.name"
          :body-style="{ padding: '0px', marginBottom: '1px' }"
        >
          <img :src="item.imgUrl" class="image multi-content" />
          <div style="padding: 14px">
            <span>{{ item.name }}</span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <vft-button text class="button">Operation button</vft-button>
            </div>
          </div>
        </vft-card>
      </template>
    </vft-skeleton>
  </vft-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

interface ListItem {
  imgUrl: string
  name: string
}

const loading = ref(true);
const lists = ref<ListItem[]>([]);
const currentDate = new Date().toDateString();

const setLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

onMounted(() => {
  loading.value = false;
  lists.value = [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: 'Deer'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: 'Horse'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'Mountain Lion'
    }
  ];
});
</script>
