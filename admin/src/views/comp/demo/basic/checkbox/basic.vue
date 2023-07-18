<template>
  <div>
    <vft-checkbox v-model="checked1" value="Option 1" size="large" />
    <vft-checkbox v-model="checked2" value="Option 2" size="large" />
  </div>
  <div>
    <vft-checkbox v-model="checked3" value="Option 1" />
    <vft-checkbox v-model="checked4" value="Option 2" />
  </div>
  <div>
    <vft-checkbox v-model="checked5" value="Option 1" size="small" />
    <vft-checkbox v-model="checked6" value="Option 2" size="small" />
  </div>
  <div>
    <vft-checkbox v-model="checked5" value="Option 1" size="small" disabled />
    <vft-checkbox v-model="checked6" value="Option 2" size="small" disabled />
  </div>

  <vft-checkbox @change="onChange" v-model="checked5" true-value="111" value="测试" false-value="222"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);

const onChange = (data) => {
	console.log(data);
};
</script>
