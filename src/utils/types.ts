import type { Component } from 'vue';
import type { RouteComponent, RouteLocationNormalized, RouteMeta, RouteRecordRaw } from 'vue-router';

export type AsyncComponent = () => Promise<Component>;

type Lazy<T> = () => Promise<T>;

/**
 * @description 路由文件的类型定义
 * @author wfd
 * @date 2021/10/11 10:58
 */
export type RouteRecordItem = RouteRecordRaw & {
  path: string;
  /** 路由名称 */
  name?: string;
  /** 路由的 meta 配置 */
  meta: RouteMeta & RouteMetaBasic;
  /** 对应的路由组件 */
  component?: RouteComponent | Lazy<RouteComponent> | string;
  /** 子路由 */
  children?: RouteRecordItem[];
  /** 完整访问路径 */
  fullPath?: string;
  redirect?: string;
};

export type MenuType = {
  path?: RouteRecordItem['path'];
  meta: RouteMeta;
  children?: MenuType[];
  title: string;
  icon?: string;
} & Record<string, any>;

export interface RouteMetaBasic {
  /** 菜单排序，只对第一级有效 */
  order?: number;
  /** 路由title  一般必填 */
  title: string;
  /** 白名单路由无需校验 */
  ignoreAuth?: boolean;
  /** 是否忽略KeepAlive缓存 */
  ignoreKeepAlive?: boolean;
  /** 是否固定标签 */
  affix?: boolean;
  /** 图标，也是菜单图标 */
  icon?: string;
  /** 内嵌iframe的地址 */
  frameSrc?: string | string[];
  /** 是否为 iframe 页面 */
  isIframe?: boolean;
  /** 当前路由不再菜单显示 */
  hideInMenu?: boolean;
  /** 隐藏侧边栏 */
  hideSide?: boolean;
  /** 最多可以打开的动态路由的个数配合 realPath */
  tabCount?: number;
  /** 动态路由对应路径 需要全路径 */
  realPath?: string;
  /** 外部链接打开的方式 */
  linkTarget?: TargetContext;
  /** 脱离 layout 的页面 */
  isAlonePage?: boolean;
  /** 当前路由不再标签页显示 */
  hideTab?: boolean;
  /** hideTab 时高亮的 tab 路由路径 */
  currentActivePath?: string;
  /** currentActivePath 路由的来源路由 */
  hideActiveRoute?: RouteLocationNormalized;
  /** 隐藏所有子菜单 */
  hideChildrenInMenu?: boolean;
  /** 隐藏父级滚动条，由业务页面自行配置 */
  hideScroll?: boolean;
  /** 当前页面的滚动元素名称 */
  scrollDom?: string;
  /** hash 是否用于当前页面跳转 */
  hashJumpReplace?: boolean;
  /** 生成路由时是否隐藏上一级 path */
  hideParPath?: boolean | number;
  /** 自定义内容区最小宽度 */
  contentMinWidth?: number;
  /** 用于 scrollDom 自定义时，且路径是动态的页面， */
  isMoreTabPage?: boolean
  /** 在本路由页面打开的 tab 放置到最后 */
  addTabInEnd?: boolean
  /** 可以访问的角色，只在权限模式为Role的时候有效 */
  roles?: string[];
  /** 表示当前路由一定是异步路由 */
  isAsyncRoute?: boolean;
  /** 有 token 后访问此路由应该返回主页面 */
  hasTokenToRoot?: boolean
  /** 自定义侧边栏宽度 */
  sideWidth?: number
}

export type RouteItemExtendMeta = {
  path: string;
  /** 对应的路由组件 */
  component?: RouteComponent | Lazy<RouteComponent> | string;
  /** 子路由 */
  children?: RouteItemExtendMeta[];
  redirect?: string;
  isIndex?: boolean;
  generateComp?: boolean;
  dirName?: string;
} & Partial<RouteMetaBasic>;
