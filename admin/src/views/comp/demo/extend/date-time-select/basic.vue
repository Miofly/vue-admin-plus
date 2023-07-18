<script setup lang="ts">
const list = reactive([
  [
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
  ],
  [
    {
      count: -1,
      text: '昨天',
      type: 'day',
      dateRange: false
    },
    {
      count: -2,
      text: '前天',
      type: 'day',
      format: 'YYYY-MM-DD',
      dateRange: false
    },
    {
      count: -1,
      text: '上周的今天到今天',
      type: 'week',
      dateRange: true
    },
    {
      count: -1,
      startOfType: 'week',
      text: '上周的第一天到今天',
      type: 'week',
      dateRange: true
    }
  ],
  [
    {
      count: -1,
      startOfType: 'week',
      endOfType: 'week',
      text: '上周的第一天到上周的最后一天',
      type: 'week',
      dateRange: true
    },
    {
      count: -1,
      endOfType: 'week',
      text: '上周的最后一天到今天',
      type: 'week',
      dateRange: true
    },
    {
      count: 0,
      text: '本周到目前为止',
      startOfType: 'week',
      type: 'week',
      dateRange: true
    },
    {
      count: 0,
      text: '今天到这周最后一天',
      endOfType: 'week',
      type: 'week',
      dateRange: true
    },
    {
      count: 0,
      startOfType: 'week',
      endOfType: 'week',
      text: '本周',
      type: 'week',
      dateRange: true
    },
    {
      count: -1,
      text: '上个月的今天到今天',
      type: 'month',
      dateRange: true
    },
    {
      count: -1,
      startOfType: 'month',
      text: '上个月的第一天到今天',
      type: 'month',
      dateRange: true
    }
  ],
  [
    {
      count: -1,
      startOfType: 'month',
      endOfType: 'month',
      text: '上个月的第一天到上个月的最后一天',
      type: 'month',
      dateRange: true
    },
    {
      count: -1,
      endOfType: 'month',
      text: '上个月的最后一天到今天',
      type: 'month',
      dateRange: true
    },
    {
      count: -1,
      text: '去年今天到今天',
      type: 'year',
      dateRange: true
    },
    {
      count: -1,
      startOfType: 'year',
      endOfType: 'year',
      text: '去年一整年',
      type: 'year',
      dateRange: true
    },

    {
      count: 2,
      text: '下下个月的今天到今天',
      type: 'month',
      dateRange: true
    },
    {
      count: 2,
      startOfType: 'month',
      text: '下下个月的第一天到今天',
      type: 'month',
      dateRange: true
    },
    {
      count: 2,
      startOfType: 'month',
      endOfType: 'month',
      text: '下下个月的第一天到下下个月的最后一天',
      type: 'month',
      dateRange: true
    }
  ],
  [
    {
      count: 2,
      endOfType: 'month',
      text: '下下个月的最后一天到今天',
      type: 'month',
      dateRange: true
    },
    {
      count: 0,
      text: '今年',
      startOfType: 'year',
      endOfType: 'year',
      type: 'year',
      dateRange: true
    },
    {
      count: 0,
      text: '今年到目前为止',
      startOfType: 'year',
      type: 'year',
      dateRange: true
    },
    {
      count: 0,
      text: '今天',
      startOfType: 'day',
      endOfType: 'day',
      type: 'day',
      dateRange: true
    },
    {
      count: 0,
      text: '今天到目前为止',
      startOfType: 'day',
      type: 'day',
      dateRange: true
    }
  ]
]);

function onChange (data) {
	console.log(data, '---');
}
</script>

<template>
  <vft-date-time-select
    @change="onChange"
    :dateList="list"/>
</template>
