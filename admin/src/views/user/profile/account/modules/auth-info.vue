<script setup lang="ts">
import { useModal } from 'vft';
import UpdateAuthModal from './update-auth-modal.vue';

const [register, { openModal }] = useModal();

const handleUpdateInfo = () => {
	openModal(true, {
    isUpdate: true,
    data: {
      name: 'test'
    }
  });
};
</script>

<template>
  <div class="item">
    <div class="left">
      <span class="desc">认证信息</span>
    </div>
    <div class="action">
      <span class="common-link" @click="openModal(true, { isUpdate: false })">
        新增认证
      </span>
      <span class="common-link" @click="handleUpdateInfo">
        更新认证
      </span>
    </div>
  </div>

  <update-auth-modal @register="register"/>
</template>

<style scoped lang="scss">

</style>
