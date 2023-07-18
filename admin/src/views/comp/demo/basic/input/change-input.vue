<script lang="ts" setup>
import { ref } from 'vue';
const input = ref('');

const handleChange = (value) => {
	console.log(value, 'handleChange');
};

const handleInput = (value) => {
  console.log(value, 'handleInput');
};
</script>

<template>
  <vft-input @change="handleChange" @input="handleInput" v-model="input" placeholder="Please input" />
</template>
