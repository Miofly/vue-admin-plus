<template>
  <div>
    <vft-checkbox-group v-model="checkboxGroup1" size="large">
      <vft-checkbox-button v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </vft-checkbox-button>
    </vft-checkbox-group>
  </div>
  <div class="demo-button-style">
    <vft-checkbox-group v-model="checkboxGroup2">
      <vft-checkbox-button v-for="city in cities" :key="city" :value="city">{{
        city
      }}</vft-checkbox-button>
    </vft-checkbox-group>
  </div>
  <div class="demo-button-style">
    <vft-checkbox-group v-model="checkboxGroup3" size="small">
      <vft-checkbox-button
        v-for="city in cities"
        :key="city"
        :value="city"
        :disabled="city === 'Beijing'"
        >{{ city }}</vft-checkbox-button
      >
    </vft-checkbox-group>
  </div>
  <div class="demo-button-style">
    <vft-checkbox-group v-model="checkboxGroup4" size="small" disabled>
      <vft-checkbox-button v-for="city in cities" :key="city" :value="city">{{
        city
      }}</vft-checkbox-button>
    </vft-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const checkboxGroup1 = ref(['Shanghai']);
const checkboxGroup2 = ref(['Shanghai']);
const checkboxGroup3 = ref(['Shanghai']);
const checkboxGroup4 = ref(['Shanghai']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
</script>

<style scoped>
.demo-button-style {
  margin-top: 24px;
}
</style>
