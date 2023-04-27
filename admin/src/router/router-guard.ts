import { LINK_HOME, LINK_LOGIN, PAGE_NOT_FOUND_ROUTE } from '@/router/constants';
import { usePermissionStoreWithOut } from '@/store/modules/permission';
import { useUserStoreWithOut } from '@/store/modules/user';
import { createIframeGuard } from '@vft/router';
import { useMultipleTabWithOut } from '@vft/store';
import { createPermissionGuard, createProgressGuard, createPageGuard } from '@vft/router';
import type { Router } from 'vue-router';
import setting from '@/setting';
import pinia from '../store';
import { useTabs } from '@vft/store';

export function setupRouterGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  const tabStore = useMultipleTabWithOut(pinia);
  const { refreshPage } = useTabs(router);

  const { openNProgress, openPageLoading, defaultScrollDom } = setting;

  createIframeGuard(router);
  createPageGuard(router, defaultScrollDom, openPageLoading, tabStore, refreshPage);
  openNProgress && createProgressGuard(router, openNProgress, tabStore);
  createPermissionGuard({
    router,
    userStore,
    permissionStore,
    homePath: LINK_HOME,
    loginPath: LINK_LOGIN,
    notFoundRoute: PAGE_NOT_FOUND_ROUTE
  });
}
