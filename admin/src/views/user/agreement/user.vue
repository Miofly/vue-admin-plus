<script lang="ts" setup>
import { LINK_HOME } from '@/router/constants';
import setting from '../../../setting';
import SlideLeftBar from './../components/slide-left-bar.vue';

interface Props {
	isInnerPage?: boolean
}

const {
  isInnerPage
} = defineProps<Props>();

const headerProps = computed(() => {
  return {
    logoCfg: {
      logo: setting.logo.src,
      title: setting.logo.title,
      jumpPath: LINK_HOME
    }
  };
});
</script>

<template>
  <div class="outWrapper">
    <div class="mainContent">
      <slide-left-bar v-if="!isInnerPage"  :tabindex="1"/>
      <div class="rightWrapper">
        <div class="headBg">
          <div>待替换的系统名称文字用户协议</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vft-layout-header {
  height: 40px !important;
}

.outWrapper {
  height: calc(100% - 40px);
  overflow-y: auto;

  .mainContent {
    height: auto;
    padding-top: 18px;
    display: flex;
    margin-left: auto;
    margin-right: auto;


    .rightWrapper {
      margin-bottom: 10px;
      background-color: rgb(255, 255, 255);
      border-radius: 4px;
      border: 1px solid rgb(243, 243, 243);
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      margin-left: 10px;
      position: relative;
      padding: 0 32px;


      .headBg {
        background-size: cover;
        border-bottom: 1px solid #efefef;
        display: flex;
        height: 57px;
        line-height: 57px;
        padding-left: 32px;
        margin-left: -32px;
        margin-right: -32px;

        .icon {
          margin-right: 8px;
          color: #0171f6;
        }
      }

      .mainWrapper {
        span, p {
          font-size: 14px !important;
          line-height: 24px !important;
        }
      }
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1320px) {
    .mainContent {
      padding-left: 45px;
      padding-right: 45px
    }
  }

  @media screen and (max-width: 1279px) {
    .mainContent {
      padding-left: 24px;
      padding-right: 24px;
      width: 1226px
    }
  }

  @media screen and (min-width: 1321px) and (max-width: 1464px) {
    .mainContent {
      padding-left: 45px;
      padding-right: 45px
    }
  }

  @media screen and (min-width: 1465px) {
    .mainContent {
      width: 1320px
    }
  }
}


</style>
