<template>
  <vft-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <vft-button type="primary">Click to upload</vft-button>
    <template #tip>
      <div class="vft-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </vft-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import type { UploadProps, UploadUserFile } from 'vft';

const fileList = ref<UploadUserFile[]>([
  {
    name: 'vft-logo.svg',
    url: 'https://vft.org/images/vft-logo.svg'
  },
  {
    name: 'vft-logo2.svg',
    url: 'https://vft.org/images/vft-logo.svg'
  }
]);

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  Message.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  // return ElMessageBox.confirm(
  //   `Cancel the transfer of ${uploadFile.name} ?`
  // ).then(
  //   () => true,
  //   () => false
  // );
};
</script>
