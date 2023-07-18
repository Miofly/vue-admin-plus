<template>
  <vft-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <div v-else class="flex-center avatar-uploader-icon">
      <vft-icon icon="ico-ep:plus" :size="30"/>
    </div>
  </vft-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const imageUrl = ref('');

const handleAvatarSuccess = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    Message.error('Avatar picture must be JPG format!');
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    Message.error('Avatar picture size can not exceed 2MB!');
    return false;
  }
  return true;
};
</script>

<style scoped>
.avatar-uploader .avatar {
  display: block;
}
</style>

<style>
.avatar-uploader .vft-upload {
  border: 1px dashed var(--vft-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--vft-transition-duration-fast);
}

.avatar-uploader .vft-upload:hover {
  border-color: var(--vft-primary-color);
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
