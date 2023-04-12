<script setup lang="ts">
import UsernameInfo from './modules/username-info.vue';
import PhoneInfo from './modules/phone-info.vue';
import PasswordInfo from './modules/password-info.vue';
</script>

<template>
  <div class="profile-account-container">
    <username-info/>
    <phone-info/>
    <password-info/>
  </div>
</template>

<style lang="scss">
.profile-account-container {
  margin-top: 15px;
  padding: 30px 0 0 50px;
  width: 700px;

  .item {
    height: 50px;
    font-size: 14px;
    border-bottom: getCssVar('border');
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .desc {
        color: getCssVar('text-regular-color');
        width: 100px;
      }
    }
  }
}
</style>
