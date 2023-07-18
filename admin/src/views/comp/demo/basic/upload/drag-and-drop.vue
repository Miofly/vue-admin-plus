<template>
  <vft-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
  >
    <vft-icon class="vft-icon--upload" icon="ico-ep:upload-filled"/>
    <div class="vft-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="vft-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </vft-upload>
</template>
