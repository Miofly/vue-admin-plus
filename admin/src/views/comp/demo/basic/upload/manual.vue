<template>
  <vft-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <vft-button type="primary">select file</vft-button>
    </template>

    <vft-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </vft-button>

    <template #tip>
      <div class="vft-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </vft-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const uploadRef = ref();

const submitUpload = () => {
  uploadRef.value!.submit();
};
</script>
