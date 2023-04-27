/**
 * export {}; 为了表示这是一个，esmodule模块， 否则ts会按照，namespace模式解析
 */
import { type RouteMetaBasic } from '@vft/router';

declare module 'vue-router' {
  interface RouteMeta extends RouteMetaBasic {
    /** 当前路由所属菜单索引 */
    menuIndex?: string | number;
    subMenuIndex?: string | number;
  }
}
