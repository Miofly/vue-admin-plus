import { basicRoutes, getViewComponent, routeAddName, type RouteRecordItem } from '@vft/router';
import { generateRouteModuleList } from '@vft/router';
import { recursion } from '@vft/utils';
import autoGenerateRoutes from '~pages';
import LOGIN_PAGE from '@/views/user/login/index.vue';

/** 404 具体页面标题 */
export const PAGE_NOT_FOUND_NAME = 'PageNotFound';

export const LINK_HOME = '/';
export const LINK_LOGIN = '/login';
export const LINK_REG = '/register';
export const LINK_FORGOT = '/forgot';
export const LINK_ERROR = '/exception';
export const LINK_AGREEMENT_USER = '/agreement/user';
export const LINK_AGREEMENT_PRIVACY = '/agreement/privacy';

/** basic layout */
export const LAYOUT = () => import('@/layouts/index.vue');

/** user related pages */
export const REG_PAGE = () => import('@/views/user/reg/index.vue');
export const FORGOT_PAGE = () => import('@/views/user/forgot/index.vue');
export const AGREEMENT_USER_PAGE = () => import('@/views/user/agreement/user.vue');
export const AGREEMENT_PRIVACY_PAGE = () => import('@/views/user/agreement/privacy.vue');

export const HOME_PAGE = () => import('@/views/home/index.vue');

export const ERROR_PAGE = () => import('@/views/sys/error-log/index.vue');
export const EXCEPTION_COMPONENT = () => import('@/views/sys/exception/Exception.vue');

const { ROOT_ROUTE, LOGIN_ROUTE, FORGOT_ROUTE, REG_ROUTE, PAGE_NOT_FOUND_ROUTE, ERROR_LOG_ROUTE } = basicRoutes({
  baseLayout: LAYOUT,
  rootCfg: {
    children: [
      {
        component: getViewComponent('HomePage', HOME_PAGE),
        path: '',
        name: 'HomePage',
        meta: {
          affix: true,
          order: 1,
          title: '系统主页'
        }
      }
    ]
  },
  loginCfg: { component: LOGIN_PAGE, path: LINK_LOGIN },
  forgotCfg: { component: FORGOT_PAGE, path: LINK_FORGOT },
  regCfg: { component: REG_PAGE, path: LINK_REG },
  notFoundCfg: {
    name: PAGE_NOT_FOUND_NAME,
    children: [{ name: PAGE_NOT_FOUND_NAME, component: EXCEPTION_COMPONENT }]
  },
  errorCfg: { children: [{ component: ERROR_PAGE }] },
  exceptionCfg: { children: [{ component: ERROR_PAGE }] }
});

export { PAGE_NOT_FOUND_ROUTE, ERROR_LOG_ROUTE, ROOT_ROUTE };

const AGREEMENT_USER_ROUTE = {
  path: LINK_AGREEMENT_USER,
  component: AGREEMENT_USER_PAGE,
  meta: {
    title: '用户协议'
  }
};

const AGREEMENT_PRIVACY_ROUTE = {
  path: LINK_AGREEMENT_PRIVACY,
  component: AGREEMENT_PRIVACY_PAGE,
  meta: {
    title: '隐私政策'
  }
};

const USERS_ROUTES: RouteRecordItem[] = [LOGIN_ROUTE, REG_ROUTE, FORGOT_ROUTE, AGREEMENT_USER_ROUTE, AGREEMENT_PRIVACY_ROUTE];

recursion(USERS_ROUTES, (item: RouteRecordItem) => {
  item.meta.hideTab = true;
  item.meta.hideInMenu = true;
  item.meta.hasTokenToRoot = true;
});

export const ERROR_WHITE_ROUTE_NAME_LIST: string[] = [ERROR_LOG_ROUTE.children![0].name!];

routeAddName(autoGenerateRoutes);

const modules: ModulesDefaultType = import.meta.glob('./routes/**/*.ts', { eager: true });
export const modulesRoutes = [...generateRouteModuleList(modules)];

console.log(modulesRoutes, 7777);

export const ASYNC_ROUTES = [...autoGenerateRoutes, ...modulesRoutes];

const IGNORE_AUTH_ROUTES: RouteRecordItem[] = [PAGE_NOT_FOUND_ROUTE, ...USERS_ROUTES];

IGNORE_AUTH_ROUTES.forEach((item => {
  item.meta.ignoreAuth = true;
}));

export const routes = [ROOT_ROUTE, ...IGNORE_AUTH_ROUTES];
