import { ASYNC_ROUTES, ERROR_LOG_ROUTE, routes } from '@/router/constants';
import { useUserStore } from '@/store/modules/user';
import type { MenuType, RouteRecordItem } from '@vft/router';
import { filterHasRoleRoutes, joinParentPath } from '@vft/router';
import { arrSort, cloneDeep, recursion, recursionFilterTree, treeMap } from '@vft/utils';
import { defineStore } from 'pinia';
import pinia from '../';
import setting from '../../setting';

interface PermissionState {
  /** 路由是否已动态添加 */
  isDynamicAddedRoute: boolean;
  // 前端菜单列表
  menuList: MenuType[];
}

/**
 * @description 权限的全局状态管理
 * @author wfd
 * @date 2021-07-12 15:10:07
 */
export const usePermissionStore = defineStore({
  id: 'app-permission',
  persist: {
    paths: ['menuList']
  },
  state: (): PermissionState => ({
    isDynamicAddedRoute: false,
    menuList: []
  }),
  getters: {
    getMenuList(): MenuType[] {
      return this.menuList;
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    }
  },
  actions: {
    setMenuList(list: MenuType[]) {
      this.menuList = list;
    },
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },
    resetState(): void {
      this.isDynamicAddedRoute = false;
      this.menuList = [];
    },
    async buildRoutesAction(): Promise<RouteRecordItem[]> {
      const userStore = useUserStore();
      const asyncRoutes: RouteRecordItem[] = filterHasRoleRoutes(ASYNC_ROUTES, userStore.getRoleList);
      this.generateMenuList([...asyncRoutes, ...routes]);
      asyncRoutes.push(ERROR_LOG_ROUTE);
      return asyncRoutes;
    },
    generateMenuList(routes) {
      function transformRouteToMenu(routes: RouteRecordItem[]) {
        // 借助 lodash 深拷贝
        const cloneRouteList = cloneDeep(routes);

        const routeList = recursionFilterTree(cloneRouteList, (item) => {
          return !item.meta?.hideInMenu;
        });

        recursion(routeList, (item: RouteRecordItem) => {
          if (item.meta?.hideChildrenInMenu && item.children?.length) {
            item.children = undefined;
            if (item.redirect) {
              item.path = item.redirect as string;
            }
          }
        });

        joinParentPath(routeList);

        // 提取树指定结构
        const list: MenuType[] = treeMap(routeList, {
          conversion: (node: RouteRecordItem) => {
            return {
              ...(node.meta || {}),
              meta: node.meta,
              path: node.path
            };
          }
        });
        // 路径处理
        return cloneDeep(list);
      }

      const menuList = transformRouteToMenu(routes);

      recursion(
        menuList,
        (item: MenuType) => {
          item.icon = item.icon || setting.sideMenu.defaultIcon;
        },
        setting.sideMenu.showChildIcon ? 'children' : ''
      );

      arrSort(menuList, 'order', true, 'children');

      this.setMenuList(menuList);
    }
  }
});

export function usePermissionStoreWithOut() {
  return usePermissionStore(pinia);
}
