<script lang="ts" setup>
import { pageCfg } from '../config';
</script>

<template>
  <div class="container login-main">
    <div class="content">
      <h3 class="title">{{ pageCfg.title }}</h3>
      <div class="form-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../index.scss';
</style>

<style lang="scss">
.login-main {
  .input {
    height: 40px;
  }
}
</style>
