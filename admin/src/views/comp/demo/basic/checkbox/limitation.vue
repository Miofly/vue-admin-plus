<template>
  <vft-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <vft-checkbox v-for="city in cities" :key="city" :value="city">{{
      city
    }}</vft-checkbox>
  </vft-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
</script>
