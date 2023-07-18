<script setup lang="ts">
const list = reactive([
  {
    count: 5,
    text: '还剩5分钟',
    type: 'minute',
    dateRange: true
  },
  {
    count: 3,
    text: '还剩3天',
    type: 'day',
    dateRange: true
  },
  {
    count: 10,
    text: '还剩10月',
    type: 'month',
    dateRange: true
  },
  {
    count: 2,
    text: '还剩2年',
    type: 'year',
    dateRange: true
  }
]);

function onChange(data) {
  console.log(data, '---');
}
</script>

<template>
  <vft-date-time-select
    @change="onChange"
    :dateList="list"/>
</template>
