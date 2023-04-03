import { setupRouter } from '@/router';
import pinia from '@/store';
import { createApp } from 'vue';
import App from './App.vue';
import { initApplication } from './init-application';
import './styles';

import XEUtils from 'xe-utils';
import { VXETable, Table } from 'vxe-table';
import zhCN from 'vxe-table/lib/locale/lang/zh-CN';
import 'vxe-table/es/table/style.css';
import 'vxe-table/es/icon/style.css';
// 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
});


(async () => {
  const app = createApp(App);
  app.use(pinia);
  await setupRouter(app);
  app.use(Table);
  initApplication(app);
  app.mount('#app');
})();

// nextTick(() => {
//   pwa.register();
// });
