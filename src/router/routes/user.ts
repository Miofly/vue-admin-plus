import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

export const LINK_PROFILE = '/profile';
export const LINK_PROFILE_INDEX = '/profile/index';
export const LINK_PROFILE_ACCOUNT = LINK_PROFILE + '/account';
export const LINK_PROFILE_MESSAGE = LINK_PROFILE + '/message';
export const LINK_PROFILE_PUSH = LINK_PROFILE + '/push';
export const LINK_PROFILE_COLLECTION = LINK_PROFILE + '/collection';
export const LINK_PROFILE_PROTOCOL = LINK_PROFILE + '/privacy-policy';
export const LINK_PROFILE_PRIVACY_POLICY = LINK_PROFILE + '/user-agreement';
export const LINK_PROFILE_ABOUT = LINK_PROFILE + '/about';

export const PROFILE_LIST = [
  {
    title: '账号信息',
    path: LINK_PROFILE_ACCOUNT,
    currentActivePath: LINK_PROFILE_INDEX,
    hideTab: true,
    isIndex: true
  },
  {
    title: '消息',
    path: LINK_PROFILE_MESSAGE,
    currentActivePath: LINK_PROFILE_INDEX,
    hideTab: true,
    isIndex: true
  },
  {
    title: '推送设置',
    path: LINK_PROFILE_PUSH,
    currentActivePath: LINK_PROFILE_INDEX,
    hideTab: true,
    isIndex: true
  },
  {
    title: '收藏',
    path: LINK_PROFILE_COLLECTION,
    currentActivePath: LINK_PROFILE_INDEX,
    hideTab: true,
    isIndex: true
  },
  {
    title: '用户协议',
    path: LINK_PROFILE_PRIVACY_POLICY,
    currentActivePath: LINK_PROFILE_INDEX,
    hideTab: true,
    isIndex: true
  },
  {
    title: '隐私政策',
    path: LINK_PROFILE_PROTOCOL,
    currentActivePath: LINK_PROFILE_INDEX,
    hideTab: true,
    isIndex: true
  },
  {
    title: '关于我们',
    path: LINK_PROFILE_ABOUT,
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
