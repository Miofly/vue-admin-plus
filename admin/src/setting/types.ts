import { type Component } from 'vue';

// Todo add docs
export interface ProjectConfig {
  theme: string;
  themeColor: string;
  themeColorPalette: string[];
  name: string;
  logo: {
    src: string;
    title: string;
  };
  errorHandle: {
    status: boolean;
    tabTitle: string;
    exceptionComp?: Component;
  };
  multiTabsSetting: {
    show: boolean;
    canDrag: boolean;
  };
  openPageLoading: boolean;
  openNProgress: boolean;
  openKeepAlive: boolean;
  canEmbedIFramePage: boolean;
  sideMenu: {
    defaultIcon: string;
    showChildIcon: boolean;
  };
  defaultScrollDom: string;
  pageLoadingIcon: string;
  contentMinWidth: number;
  sideMenuWidth: number;
  sideMenuCollapseWidth: number;
}
