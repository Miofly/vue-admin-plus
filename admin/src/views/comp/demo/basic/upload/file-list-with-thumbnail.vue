<template>
  <vft-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    list-type="picture"
  >
    <vft-button type="primary">Click to upload</vft-button>
    <template #tip>
      <div class="vft-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </vft-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import type { UploadProps, UploadUserFile } from 'vft';

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  }
]);

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePreview: UploadProps['onPreview'] = (file) => {
  console.log(file);
};
</script>
