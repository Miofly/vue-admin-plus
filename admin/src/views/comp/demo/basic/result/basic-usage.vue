<template>
  <vft-row>
    <vft-col :sm="12" :lg="6">
      <vft-result
        icon="success"
        title="Success Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <vft-button type="primary">Back</vft-button>
        </template>
      </vft-result>
    </vft-col>
    <vft-col :sm="12" :lg="6">
      <vft-result
        icon="warning"
        title="Warning Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <vft-button type="primary">Back</vft-button>
        </template>
      </vft-result>
    </vft-col>
    <vft-col :sm="12" :lg="6">
      <vft-result
        icon="error"
        title="Error Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <vft-button type="primary">Back</vft-button>
        </template>
      </vft-result>
    </vft-col>
    <vft-col :sm="12" :lg="6">
      <vft-result icon="info" title="Info Tip">
        <template #sub-title>
          <p>Using slot as subtitle</p>
        </template>
        <template #extra>
          <vft-button type="primary">Back</vft-button>
        </template>
      </vft-result>
    </vft-col>
  </vft-row>
</template>
