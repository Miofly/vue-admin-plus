<template>
 <div>
   1
 </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(true);

const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  }
];
</script>

<style>
body {
  margin: 0;
}
.example-showcase .vft-loading-mask {
  z-index: 9;
}
</style>
