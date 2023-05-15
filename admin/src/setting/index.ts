import type { ProjectConfig } from '@/setting';
// Todo
// import { VriException } from 'vft';
const setting: ProjectConfig = {
  theme: 'light',
  themeColor: '#2196f3',
  themeColorPalette: ['#2196f3', '#3eaf7c', '#fb9b5f', '#f26d6d'],
  name: 'Vft',
  logo: {
    src: import.meta.env.VITE_PUBLIC_PATH + 'assets/logo.png',
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
  openPageLoading: false,
  openNProgress: true,
  openKeepAlive: true,
  canEmbedIFramePage: true,
  sideMenu: {
    defaultIcon: 'ico-mingcute:menu-line',
    showChildIcon: false
  },
  defaultScrollDom: '.layout-content',
  contentMinWidth: 1280,
  sideMenuWidth: 260,
  sideMenuCollapseWidth: 55,
  pageLoadingIcon: 'ico-icomoon-free:spinner2',
  responseParams: {
    code: 'code',
    message: 'msg',
    data: 'data',
    successCode: 200
  }
};


export default setting;

export * from './types';
