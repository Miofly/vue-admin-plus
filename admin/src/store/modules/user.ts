import { router } from '@/router';
import { LINK_HOME, LINK_LOGIN } from '@/router/constants';
import { cleanPiniaStorage } from '@/store';
import { usePermissionStore } from '@/store/modules/permission';
import { getUserInfo, loginByPw, loginBySms, logout, register } from '@/views/user/apis';
import { defineStore } from 'pinia';
import { type RouteRecordRaw } from 'vue-router';
import pinia from '../';
import { cloneDeep } from 'lodash';

/** 登录注册类型 */
export type LoginOrRegType = 'login' | 'loginPhone' | 'reg';

/** 用户状态数据 */
interface UserState {
  /** 用户信息 */
  userInfo: Nullable<UserInfo>;
  roleList: string[];
  /** 用户 token */
  token?: string;
  /** 刷新的 token */
  refreshToken?: string;
}

export const useUserStore = defineStore({
  id: 'app-user',
  persist: true,
  state: (): UserState => ({
    // 用户信息
    userInfo: null,
    roleList: [],
    // token 信息
    token: undefined
  }),
  getters: {
    // 获取用户信息
    getUserInfo(): UserInfo {
      return this.userInfo || ({} as UserInfo);
    },
    // 获取 token
    getToken(): string {
      return this.token as string;
    },
    getRoleList(): string[] {
      return this.roleList?.length ? this.roleList : [];
    }
  },
  actions: {
    // 设置用户 token
    setToken(info: string | undefined) {
      this.token = info ? info : '';
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
    },
    setRoleList(roleList: string[]) {
      this.roleList = roleList;
    },
    async loginOrReg(params, loginType: LoginOrRegType = 'login') {
      try {
        const isLogin = loginType === 'login';
        const isReg = loginType === 'reg';

        // 调用登录接口
        const data = isLogin ? await loginByPw(params) : isReg ? await register(params) : await loginBySms(params);

        if (data.code === 200) {
          if (isReg) {
            Message.success({
              message: '注册成功，登录中...',
              duration: 2000
            });
          }
          const { token } = data.data;
          this.setToken(token);
          return this.afterLoginAction(isReg);
        } else {
          return Promise.reject(data);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async afterLoginAction(isReg?: boolean) {
      if (!this.getToken) return null;
      const userInfo = await this.getUserInfoAction();
      const permissionStore = usePermissionStore();

      if (!permissionStore.isDynamicAddedRoute) {
        const routes = await permissionStore.buildRoutesAction();
        routes.forEach((route) => {
          router.addRoute(route as unknown as RouteRecordRaw);
        });
        permissionStore.setDynamicAddedRoute(true);
      }

      async function goHomePage() {
        await router.replace(LINK_HOME);
      }

      const { query } = router.currentRoute.value;

      if (query?.redirect) {
        await router.replace(query.redirect as string);
      } else {
        if (isReg) {
          setTimeout(async () => {
            await goHomePage();
          }, 1000);
        } else {
          await goHomePage();
        }
      }
      return userInfo;
    },
    async getUserInfoAction() {
      if (!this.getToken) return null;
      const userInfo = await getUserInfo();

      // Roles detail
      const { roles = [] } = userInfo;
      this.setRoleList(roles);

      this.setUserInfo(userInfo);
      return userInfo;
    },
    async logout () {
      const user_token = cloneDeep(this.token);
      this.token = '';
      await router.push(LINK_LOGIN).finally(() => {
        Message.success('退出成功');
        cleanPiniaStorage();
      });
    
      await logout(user_token!);
    }
  }
});

export function useUserStoreWithOut() {
  return useUserStore(pinia);
}
