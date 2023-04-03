// eslint-disable-next-line
/// <reference types="vite-plugin-router-pages/dist" />

export {};

declare global {
  /** 用户信息 */
  interface UserInfo {
    uid?: string;
    /** 手机号 */
    phone?: string;
    /** 昵称 */
    username?: string;
    /** 真实姓名 */
    realName?: string;
    sex?: string;
    /** 头像 */
    avatar?: string;
    level?: number;
    /** vip 是否过期 */
    vipExpirationDate?: string;
    businessCardUrl?: string;
    company?: string;
    companyAddress?: string;
    job?: string;
    industry?: string;
    noPassReason?: string;
    inviteCode?: string;
    myInviteCode?: string;
    /** 注册时间 */
    registerTime?: string;
    email?: string;
    editNickNameStatus?: number;
    certifiedStatus?: number;
  }

  type OrderType = 'desc' | 'asc';

  interface PageProps {
    /** 页码 */
    pageNum?: number;
    /** 返回的个数限制 */
    pageSize?: number;
  }
}

declare module '~pages' {
  import type { RouteRecordRaw } from 'vue-router';
  const routes: RouteRecordRaw[];
  export default routes;
}
