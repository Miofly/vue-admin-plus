import { PWA_INSTALL } from '@/constants';
import setting from '@/setting';
import pinia from '@/store';
import { useUserStore } from '@/store/modules/user';
import { useSetting } from '@/use';
import { setCssVar } from '@vft/utils';
import type { LoadingBinding, VftLoading } from 'vft';
import { createLoadingDirective, primaryColor, setPrimaryColorCssvars, VftMdContainer } from 'vft';
import { registerClickOut, setupPermissionDirective } from '@vft/directives';
import { initPwa } from '@vft/store';
import type { App, Directive } from 'vue';
// table
import XEUtils from 'xe-utils';
import { Grid, Table, VXETable, Edit } from 'vxe-table';
import zhCN from 'vxe-table/lib/locale/lang/zh-CN';
import 'vxe-table/es/table/style.css';
// import 'vxe-table/es/icon/style.css';

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

export function initTable (app) {
  VXETable.setup({
    i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
  });

  app.use(Table);
  app.use(Grid);
  app.use(Edit);
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
