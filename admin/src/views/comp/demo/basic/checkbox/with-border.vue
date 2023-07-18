<template>
  <div>
    <vft-checkbox v-model="checked1" value="Option1" size="large" border />
    <vft-checkbox v-model="checked2" value="Option2" size="large" border />
  </div>
  <div class="mt-4">
    <vft-checkbox v-model="checked3" value="Option1" border />
    <vft-checkbox v-model="checked4" value="Option2" border />
  </div>
  <div class="mt-4">
    <vft-checkbox-group v-model="checkboxGroup1" size="small">
      <vft-checkbox value="Option1" border />
      <vft-checkbox value="Option2" border />
    </vft-checkbox-group>
  </div>
  <div class="mt-4">
    <vft-checkbox-group v-model="checkboxGroup1" size="small">
      <vft-checkbox value="Option1" border disabled />
      <vft-checkbox value="Option2" border disabled />
    </vft-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(true);
const checkboxGroup1 = ref(['Option1']);
</script>
