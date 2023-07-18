<template>
  <vft-button text @click="dialogTableVisible = true">
    open a Table nested Dialog
  </vft-button>
  <vft-dialog v-model="dialogTableVisible" title="Shipping address">
    <vft-button>1</vft-button>
  </vft-dialog>
  <!-- Form -->
  <vft-button text @click="dialogFormVisible = true">
    open a Form nested Dialog
  </vft-button>

  <vft-dialog v-model="dialogFormVisible" title="Shipping address">
    <vft-form :model="form">
      <vft-form-item label="Promotion name" :labvft-width="formLabelWidth">
        <vft-input v-model="form.name" autocomplete="off" />
      </vft-form-item>
    </vft-form>
    <template #footer>
      <span class="dialog-footer">
        <vft-button @click="dialogFormVisible = false">Cancel</vft-button>
        <vft-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </vft-button>
      </span>
    </template>
  </vft-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = '140px';

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
});

const gridData = [
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
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  }
];
</script>
<style scoped>
.vft-button--text {
  margin-right: 15px;
}
.vft-select {
  width: 300px;
}
.vft-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
