<template>
  <div>
    <vft-button size="large">Large</vft-button>
    <vft-button>Default</vft-button>
    <vft-button size="small">Small</vft-button>
    <vft-button size="large" :icon="Search">Search</vft-button>
    <vft-button :icon="Search">Search</vft-button>
    <vft-button size="small" :icon="Search">Search</vft-button>
  </div>
  <div class="my-4">
    <vft-button size="large" round>Large</vft-button>
    <vft-button round>Default</vft-button>
    <vft-button size="small" round>Small</vft-button>
    <vft-button size="large" :icon="Search" round>Search</vft-button>
    <vft-button :icon="Search" round>Search</vft-button>
    <vft-button size="small" :icon="Search" round>Search</vft-button>
  </div>

</template>

<script setup lang="ts">
</script>
