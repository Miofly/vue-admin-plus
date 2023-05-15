<template>
  <div>
    <div class="sideWrapperInner">
      <ul class="navWrapper">
        <li>
          <a :class="{active:tabindex===1}" @click="goUser">用户协议</a>
        </li>
        <li>
          <a :class="{active:tabindex===2}" @click="goPrivacy">隐私政策</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { router } from '@/router';
import { LINK_AGREEMENT_USER, LINK_AGREEMENT_PRIVACY } from '@/router/constants';
interface Props {
  tabindex: number
}

const { tabindex } = defineProps<Props>();
const { go } = useRouterHelper();
const goUser = () => {
  // location.href = '/agreement/user'
  go(LINK_AGREEMENT_USER);
};
const goPrivacy = () => {
  // location.href = '/agreement/privacy'
  go(LINK_AGREEMENT_PRIVACY);

};
</script>

<style scoped lang="scss">
.sideWrapperInner {
  background-color: #ffffff;
  border: 1px solid rgba(242, 242, 242, 1);
  border-radius: 4px;
  width: 290px;
  flex: 0 0 auto;

  .navWrapper {
    padding: 0;
    margin: 0;
    font-size: 16px;

    li {
      position: relative;
      cursor: pointer;

      & > a {
        display: block;
        padding: 20px 40px;
        box-sizing: border-box;
        color: #141414;

        &.active {
          background-color: rgba(247, 251, 255, 0.63);
          color: #0171f6;
        }
      }
    }
  }
}

</style>
