<template>
  <div>
    <vft-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </vft-input>
  </div>
  <div class="mt-4">
    <vft-input v-model="input2" placeholder="Please input">
      <template #append>.com</template>
    </vft-input>
  </div>
  <div class="mt-4">
    <vft-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <vft-select v-model="select" placeholder="Select" style="width: 115px">
          <!--<vft-option label="Restaurant" value="1" />-->
          <!--<vft-option label="Order No." value="2" />-->
          <!--<vft-option label="Tel" value="3" />-->
        </vft-select>
      </template>
      <template #append>
        <vft-button :icon="Search" />
      </template>
    </vft-input>
  </div>
  <div class="mt-4">
    <vft-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <vft-button :icon="Search" />
      </template>
      <template #append>
        <vft-select v-model="select" placeholder="Select" style="width: 115px">
          <!--<vft-option label="Restaurant" value="1" />-->
          <!--<vft-option label="Order No." value="2" />-->
          <!--<vft-option label="Tel" value="3" />-->
        </vft-select>
      </template>
    </vft-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const select = ref('');
</script>

<style>
.input-with-select .vft-input-group__prepend {
  background-color: var(--vft-fill-color-blank);
}
</style>
