<script lang="ts" setup>
import { usePageTitle } from '@/use';
import { generateCssVars } from '@vft/utils';
import MainContainer from '../components/main.vue';
import { LoginTabEnum, pageCfg, tabStyle } from '../config';
import LoginWithPhone from './login-with-phone.vue';
import LoginWithPwd from './login-with-pwd.vue';

usePageTitle();

let activeName = ref(LoginTabEnum.TAB_USER);
</script>

<template>
  <main-container>
    <vft-tabs :style="generateCssVars(tabStyle, 'tabs')" v-model="activeName">
      <vft-tab-pane :label="pageCfg.loginText" :name="LoginTabEnum.TAB_USER">
        <login-with-pwd :activeName="activeName" />
      </vft-tab-pane>
      <vft-tab-pane :label="pageCfg.phoneText" :name="LoginTabEnum.TAB_PHONE">
        <login-with-phone :activeName="activeName" />
      </vft-tab-pane>
    </vft-tabs>
  </main-container>
</template>
