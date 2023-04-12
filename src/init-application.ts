import { PWA_INSTALL, THEME_COLOR } from '@/constants';
import { router } from '@/router';
import { ERROR_WHITE_ROUTE_NAME_LIST } from '@/router/constants';
import setting from '@/setting';
import pinia from '@/store';
import { useUserStore } from '@/store/modules/user';
import { useSetting } from '@/use';
import { ls } from '@/utils';
import { setCssVar, addLight } from '@vft/utils';
import { primaryColor, setPrimaryColorCssvars } from 'vft';
import { registerClickOut, setupPermissionDirective } from '@vft/directives';
import { initPwa, setupErrorHandle } from '@vft/store';
import type { LoadingBinding, VftLoading } from 'vft';
import { createLoadingDirective, VftMdContainer } from 'vft';
import type { App, Directive } from 'vue';
// table
import XEUtils from 'xe-utils';
import { VXETable, Table, Grid } from 'vxe-table';
import zhCN from 'vxe-table/lib/locale/lang/zh-CN';
import 'vxe-table/es/table/style.css';
import 'vxe-table/es/icon/style.css';

export function initApplication(app: App<Element>) {
  app.component('VftMdContainer', VftMdContainer);
  initPwa(pinia, PWA_INSTALL);
  initDirective(app);
  initTable(app);
  const { getThemeColor } = useSetting();

  if (getThemeColor.value) {
    setCssVar('primary-color', getThemeColor.value, '', 'vft');
    setPrimaryColorCssvars(getThemeColor.value);
  }
  // setupErrorHandle(app, router, setting.errorHandle.tabTitle, ERROR_WHITE_ROUTE_NAME_LIST);
}

export function initTable(app) {
  VXETable.setup({
    i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
  });

  app.use(Table);
  app.use(Grid);
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
