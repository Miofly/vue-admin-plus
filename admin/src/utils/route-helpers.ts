import {
  cloneDeep,
  delObjAttrNotExist,
  isBoolean,
  isEmptyObject,
  isUrl,
  omit,
  pick,
  recursionFilterTree,
  upperCamelCase,
  upperFirst
} from '@vft/utils';
import { type Component } from 'vue';
import type { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router';
import { createRouter, createWebHashHistory, type Router } from 'vue-router';
import type { AsyncComponent, RouteItemExtendMeta, RouteRecordItem } from './types';

/**
 * @description 对传入的某个路由进行处理，主要是对路由的 matched 参数进行了一遍处理
 * 只保留了 meta name path 三个属性
 * @author wfd
 * @date 2021/9/22 16:12
 * @param route
 */
export function getRawRoute(route: RouteLocationNormalized): RouteLocationNormalized {
  // 传入的路由 route 参数是否存在
  if (!route) return route;
  // 解构出 route 中的 matched 与其他的参数
  const { matched, ...opt } = route;
  return {
    ...opt,
    matched: (matched
      ? matched.map((item) => ({
          meta: item.meta,
          name: item.name,
          path: item.path
        }))
      : undefined) as RouteRecordNormalized[]
  };
}

export function getRouteKeyAttrs(route: RouteLocationNormalized) {
  if (!route) return route;
  return pick(route, ['path', 'fullPath', 'name', 'meta', 'params', 'query', 'hash']);
}

/**
 * @description import.meta.glob 获取的路由组装
 */
export const generateRouteModuleList = (modules: ModulesDefaultType) => {
  const _routeModuleList: RouteRecordItem[] = [];
  /** 获取 modules 目录下文件中定义的路由 */
  Object.keys(modules).forEach((key) => {
    const mod = modules[key]?.default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeAddName(modList);
    _routeModuleList.push(...modList);
  });
  return _routeModuleList;
};

/**
 * @description 给路由自动添加 name 名称
 * @example
 * @returns
 * @param route
 * @param name
 * @param isChildren
 */
export function routeAddName(route: RouteRecordItem[], name = '', isChildren = false) {
  route.forEach((item) => {
    if (!item.name) {
      if (item.path.startsWith('/')) {
        let _path = item.path;
        if (_path?.includes(':')) {
          _path = _path.split(':')[0];
        }
        item.name = upperCamelCase(_path.split('/').map(upperFirst).join(''));
      } else {
        if (!isUrl(item.path)) {
          item.name = upperCamelCase(name + upperFirst(item.path));
        }
      }
    }

    if (isChildren && item.component) {
      item.component = getViewComponent(item.name!, item.component as AsyncComponent);
    }
    if (item.children?.length) {
      routeAddName(item.children, item.name, true);
    }
  });
}

export function getViewComponent(name: string, asyncComponent: AsyncComponent) {
  return () => setViewComponentName(name, asyncComponent);
}

export async function setViewComponentName(name: string, asyncComponent: AsyncComponent) {
  const component = (await asyncComponent()) as { default: Component };
  Object.assign(component.default, { name });
  return component;
}

/** 路由 children path 路径拼接 */
export function joinParentPath(routes: RouteRecordItem[], parentPath = '') {
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    if (!(route.path.startsWith('/') || isUrl(route.path))) {
      route.path = route.path ? `${parentPath === '/' ? '/' : parentPath + '/'}${route.path}` : parentPath;
    }
    if (route?.children?.length) {
      joinParentPath(route.children, route.meta?.hidePathForChildren ? parentPath : route.path);
    }
  }
}

/** 根据数组第一项生成 redirect */
export function generateRouteRedirect(route: RouteRecordItem) {
  if (route?.children?.length) {
    if (!route.component && !route.redirect) {
      route.redirect = route?.children[0].path;
    }
    for (const item of route?.children) {
      generateRouteRedirect(item);
    }
  }
}

/** 生成路由 list */
export function generateRoutes(path, title, children, attrs?: Partial<RouteItemExtendMeta>) {
  const _attrs = pick(attrs, ['component']);
  const noInMeta = ['name', 'redirect', 'component'];
  const meta_attrs = omit(attrs, noInMeta);

  joinParentPath(children, path);

  const _routes = {
    path,
    // redirect: attrs?.redirect ? attrs.redirect : _redirect,
    children: generateChildRoutes(children, attrs?.dirName, attrs?.isIndex),
    ..._attrs,
    meta: {
      title,
      ...meta_attrs
    }
  };

  generateRouteRedirect(_routes as RouteRecordItem);

  return _routes;
}

/**
 * @description 生成子路由 list
 * @author wfd
 * @date 2023/1/2 20:07
 * @param routes
 * @param dirName
 * @param isIndex
 */
export function generateChildRoutes(routes, dirName, isIndex) {
  const noInMeta = ['path', 'title', 'name', 'children', 'component', 'redirect'];

  return routes.map((item) => {
    const meta_item = omit(item, noInMeta);

    const _path = item.path.includes('/') ? item.path.split('/') : [item.path];

    let compPath = item.path.includes('/:') ? item.path.split('/:')[0] : item.path;

    if (item.hideParPath) {
      const compPaths = compPath.split('/');
      const deleteNum = isBoolean(item.hideParPath) ? 1 : item.hideParPath;
      compPaths.splice(compPaths.length - (deleteNum + 1), deleteNum);
      compPath = compPaths.join('/');
    }

    const comp = item.component
      ? item.component
      : (!item.generateComp && item.children?.length) || isUrl(item.path)
      ? null
      : () => import(`@/${dirName}${item?.isIndex || (!isBoolean(item?.isIndex) && isIndex) ? compPath + '/index' : compPath}.vue`);

    const route_item = {
      ...pick(item, ['path', 'redirect']),
      component: comp,
      children: item.children?.length ? generateChildRoutes(item.children, dirName, isIndex) : null,
      meta: {
        ...meta_item,
        title: item?.title || _path[_path.length - 1]
      }
    };

    delObjAttrNotExist(route_item, true);

    return route_item;
  });
}

/**
 * @description get router unique key
 * @author wfd
 * @date 2023/1/31 08:52
 * @param {RouteLocationNormalized} routeRecord
 */
export function getRouterKeyPath(routeRecord: RouteLocationNormalized): string {
  if (routeRecord.meta?.currentActivePath) {
    return routeRecord.meta.currentActivePath as string;
  }
  if (routeRecord.meta.tabCount !== 1 && ((routeRecord.params && !isEmptyObject(routeRecord.params)) || (routeRecord.query && !isEmptyObject(routeRecord.query) && routeRecord.meta.isMoreTabPage))) {
    return routeRecord.fullPath || routeRecord.path;
  } else {
    return routeRecord.path;
  }
}

export function filterHasRoleRoutes(routes: RouteRecordItem[], roleList?) {
  return roleList?.length
    ? recursionFilterTree(routes, (route) => {
        const { meta } = route;
        const { roles } = meta || {};
        if (!roles) return true;
        return roleList.some((role) => roles.includes(role));
      })
    : routes;
}

// --------- not use ---------- //

export function flatMultiLevelRoutes(routeModules: RouteRecordItem[]) {
  /** 对当前传入的路由先进行深拷贝 */
  const modules: RouteRecordItem[] = cloneDeep(routeModules);
  for (let index = 0; index < modules.length; index++) {
    /** 获取每一个路由元素 */
    const routeModule = modules[index];

    /**
     * 如果不是多级路由则终止本次循环，进入下一次循环
     * 不是多级路由则不需要将路由进行提升，如果是则进入到 promoteRouteLevel 函数中
     */
    if (!isMultipleRoute(routeModule)) {
      continue;
    }
    promoteRouteLevel(routeModule);
  }
  return modules;
}

/**
 * @description 判断当前路由元素是否超过两级
 * @author wfd
 * @date 2021/9/11
 * @param routeModule 传入的路由元素
 */
function isMultipleRoute(routeModule: RouteRecordItem) {
  /**
   * 判断传入的路由元素是否存在 或者 是否有 children 属性 或者 children 属性的 长度 > 0
   * 如果上述有任何一个条件满足则直接返回 false
   */
  if (!routeModule || !Reflect.has(routeModule, 'children') || !routeModule.children?.length) {
    return false;
  }

  /** 获取传入元素下 children 属性对应的值 */
  const children = routeModule.children;

  let flag = false;
  for (let index = 0; index < children.length; index++) {
    /** 获取 children 下的每一个元素 */
    const child = children[index];
    /** 如果 child 下也含有 children 元素，则返回 true，且中断循环 */
    if (child.children?.length) {
      flag = true;
      break;
    }
  }
  return flag;
}

/** 路由提升函数 */
function promoteRouteLevel(routeModule: RouteRecordItem) {
  /** 使用 vue-router 来拼接路由菜单，临时创建一个路由，主要是为了使用其中的 router.getRoutes() 方法 */
  let router: Router | null = createRouter({
    routes: [routeModule as unknown as RouteRecordNormalized],
    history: createWebHashHistory()
  });

  /**
   * 通过 路由的 getRoutes 方法获取每一级路由
   * 会得到当前路由的所有路由路径拼接的一个数组，
   */
  const routes = router.getRoutes();

  addToChildren(routes, routeModule.children || [], routeModule);
  /** 路由转换结束后将 router 置位 null 释放内存，因为用不到了 */
  router = null;
  /** 通过 lodash omit 方法删除 routeModule.children 下每一项的 children 属性  */
  // @ts-ignore
  routeModule.children = routeModule.children?.map((item) => omit(item, 'children'));
}

/**
 * @description 将所有子路由添加到二级路由
 * @author wfd
 * @date 2021/9/11
 * @param routes router.getRoutes() 下所有的路由
 * @param children
 * @param routeModule
 */
function addToChildren(routes: RouteRecordNormalized[], children: RouteRecordItem[], routeModule: RouteRecordItem) {
  for (let index = 0; index < children.length; index++) {
    /** children 下的每一个路由元素 */
    const child = children[index];
    /**
     * 根据 name 匹配元素,获取到 router.getRoutes() 中对应的路由
     * 由此可见，如何有三级路由如果没有配置路由名称，路由中将不会存在此路由
     */
    const route = routes.find((item) => item.name === child.name);
    /** 如果没有匹配到终止本次循环，进入下一次循环再匹配 */
    if (!route) {
      continue;
    }

    routeModule.children = routeModule.children || [];

    /**
     * 通过 route.name 匹配 判断 routeModule.children 是否含有此 route,如果不存在则把当前 route push 到 routeModule.children 中
     * 此判断执行的时机：当 children 为一级路由下的 children 时，此函数不会执行
     * 当 children 为二级路由下的 children 时，会执行，为什么？因为 routeModule.children 一直都是二级路由的 children
     * 二级路由的 children 去匹配 三级路由的 name 肯定会匹配不上，所以这时会把三级路由中的 route 通过 push 到 二级路由的 children 中
     */
    if (!routeModule.children.find((item) => item.name === route.name)) {
      routeModule.children?.push(route as unknown as RouteRecordItem);
    }
    /** 如果当前的子路由也就是 child 下面还有 子路由也就是还有 children，则再次执行一遍此函数 */
    if (child.children?.length) {
      /** 与第一次执行此函数相比，只是把 children 换成了 child.children */
      addToChildren(routes, child.children, routeModule);
    }
  }
}
