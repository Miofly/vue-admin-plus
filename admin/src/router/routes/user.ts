import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

export const LINK_PROFILE = '/profile';
export const LINK_PROFILE_INDEX = '/profile/index';
export const LINK_PROFILE_ACCOUNT = LINK_PROFILE + '/account';
export const LINK_PROFILE_SYSTEM_SETTING = LINK_PROFILE + '/system-setting';

export const PROFILE_LIST = [
  {
    title: '账号设置',
    path: LINK_PROFILE_ACCOUNT,
    currentActivePath: LINK_PROFILE_INDEX,
    hideTab: true,
    isIndex: true
  },
  {
    title: '系统设置',
    path: LINK_PROFILE_SYSTEM_SETTING,
    currentActivePath: LINK_PROFILE_INDEX,
    hideTab: true,
    isIndex: true
  }
];

const list: RouteItemExtendMeta[] = [
  {
    title: '我的',
    path: 'index',
    generateComp: true,
    hideSide: true,
    sideWidth: 210,
    // redirect: LINK_PROFILE_ACCOUNT,
    children: PROFILE_LIST,
    // hideScroll: true,
    scrollDom: '.profile-con'
  }
];

export default generateRoutes(LINK_PROFILE, '我的', list, {
  dirName: 'user'
});
