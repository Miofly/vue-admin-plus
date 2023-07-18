<template>
  <vft-upload action="#" list-type="picture-card" :auto-upload="false">
    <vft-icon icon="ico-ep-plus"/>

    <template #file="{ file }">
      <div>
        <img class="vft-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="vft-upload-list__item-actions">
          <span
            class="vft-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <vft-icon icon="ico-ep-zoom-in"/>
          </span>
          <span
            v-if="!disabled"
            class="vft-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <vft-icon icon="ico-ep-download"/>
          </span>
          <span
            v-if="!disabled"
            class="vft-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <vft-icon icon="ico-ep-delete"/>
          </span>
        </span>
      </div>
    </template>
  </vft-upload>

  <vft-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </vft-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import type { UploadFile } from 'vft';

const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const disabled = ref(false);

const handleRemove = (file: UploadFile) => {
  console.log(file);
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const handleDownload = (file: UploadFile) => {
  console.log(file);
};
</script>
