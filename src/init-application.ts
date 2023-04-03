import { PWA_INSTALL } from '@/constants';
import { router } from '@/router';
import { ERROR_WHITE_ROUTE_NAME_LIST } from '@/router/constants';
import setting from '@/setting';
import pinia from '@/store';
import { useUserStore } from '@/store/modules/user';
import { primaryColor } from 'vft';
import { registerClickOut, setupPermissionDirective } from '@vft/directives';
import { initPwa, setupErrorHandle } from '@vft/store';
import type { LoadingBinding, VftLoading } from 'vft';
import { createLoadingDirective, VftMdContainer } from 'vft';
import type { App, Directive } from 'vue';

export function initApplication(app: App<Element>) {
  app.component('VftMdContainer', VftMdContainer);
  initPwa(pinia, PWA_INSTALL);
  initDirective(app);

  // setupErrorHandle(app, router, setting.errorHandle.tabTitle, ERROR_WHITE_ROUTE_NAME_LIST);
}

function initDirective(app) {
  const userStore = useUserStore();

  const vSpin: Directive<VftLoading, LoadingBinding> = createLoadingDirective({
    text: '加载中...',
    icon: { icon: setting.pageLoadingIcon, size: 26, color: primaryColor().value, rotate: true },
    rotate: true
  });

  app.directive('spin', vSpin);
  
  registerClickOut(app);
  
  setupPermissionDirective(
    app,
    computed(() => userStore.getRoleList)
  );
}
