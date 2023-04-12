<script setup lang="ts">
import { useUserInfo } from '@/use/use-user-info';
import { userEdit } from '@/views/user/profile/api';
import { useUserStore } from '@/store/modules/user';

const { getUserName } = useUserInfo();

let editNameStatus = ref(false);

const userName = ref(getUserName.value);

function cancelEditName() {
  editNameStatus.value = false;
  userName.value = getUserName.value;
}

const userStore = useUserStore();

const { run: requestUserEdit, loading } = useRequest(userEdit, {
  manual: true,
  onSuccess: (res) => {
    userStore.setUserInfo(res);
    editNameStatus.value = false;
    Message.success('修改成功');
  }
});

function confirmEditName() {
  if (userName.value === getUserName.value) {
    editNameStatus.value = false;
    return;
  }
  if (userName.value) {
    requestUserEdit({ username: userName.value });
  } else {
    Message.warning('输入的昵称不能为空!');
  }
}
</script>

<template>
  <div class="item">
    <div class="left">
      <span class="desc">昵称</span>
      <div class="info">
        <span v-if="!editNameStatus">{{ getUserName }}</span>
        <vft-input v-else class="w-200px" maxlength="20" minlength="1" v-model="userName"/>
      </div>
    </div>
    <div class="action">
      <span v-if="!editNameStatus" class="common-link"
            @click="editNameStatus = true">修改昵称</span>
      <div v-else>
        <vft-button size="small" @click="cancelEditName">取消</vft-button>
        <vft-button size="small" :loading="loading" type="primary" @click="confirmEditName">确定
        </vft-button>
      </div>
    </div>
  </div>
</template>
