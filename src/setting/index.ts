import type { ProjectConfig } from '@/setting';
// Todo
// import { VriException } from 'vft';

const setting: ProjectConfig = {
  theme: 'light',
  name: 'Vft',
  logo: {
    src: '/assets/logo.png',
    title: 'Vft'
  },
  errorHandle: {
    status: false,
    tabTitle: '页面异常'
    // exceptionComp: VriException
  },
  multiTabsSetting: {
    show: true,
    canDrag: true
  },
  openPageLoading: true,
  openNProgress: true,
  openKeepAlive: true,
  canEmbedIFramePage: true,
  sideMenu: {
    defaultIcon: 'ico-mingcute:menu-line',
    showChildIcon: false
  },
  defaultScrollDom: '.layout-content',
  contentMinWidth: 1080,
  pageLoadingIcon: 'ico-icomoon-free:spinner2'
};

export default setting;

export * from './types';
