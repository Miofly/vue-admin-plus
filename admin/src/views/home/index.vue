<template>
    <FlowChart :data="demoData" />
</template>

<script lang="ts" setup>
import FlowChart from '@/components/FlowChart/src/FlowChart.vue';

import demoData from './dataTurbo.json';
</script>
