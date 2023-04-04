import { useUserStoreWithOut } from '@/store/modules/user';
import { createAxios, RequestCanceler } from '@vft/request';
import { cloneDeep } from '@vft/utils';

/** 默认 Pc header */
const CLIENT_PARAM = { client: 'PC' };

const { VITE_USE_MOCK, VITE_API_PREFIX, VITE_MOCK_API_PREFIX } = import.meta.env;

export const request = createAxios({
  headers: {
    ...CLIENT_PARAM
  },
  requestOptions: {
    apiUrl: VITE_USE_MOCK === 'true' ? VITE_MOCK_API_PREFIX : VITE_API_PREFIX,
    errorMessageCustom: true,
    ignoreCancelToken: false,
    responseParams: {
      code: 'code',
      message: 'msg',
      data: 'data'
    },
    getTokenFunction: () => {
      const userStore = useUserStoreWithOut();
      return userStore.getToken;
    },
    errorFunction: async (err) => {
      const userStore = useUserStoreWithOut();
      console.log('Request Error', err);
      const { code, msg } = err.response?.data || {};
      // request cancel
      if (err.message !== 'canceled' && err?.code !== 'ERR_CANCELED') {
        Message.error(msg || err.message);
      }

      if (err?.response?.status === 401) {
        if ([100002, 100000].includes(code)) {
          // 到登录页面
          // userStore.resetGoLogin();
        } else {
          await userStore.logout();
        }

        // VriMessage.error(msg);
        // const cancelRequest = new RequestCanceler();
        // const pendMap = cloneDeep(cancelRequest.getAllPending());
        // cancelRequest.removeAllPending();
        // await userStore.resetGoLogin();
        // pendMap.forEach(item => {
        //   item.config.url = item.config.url!.replace(import.meta.env.VITE_API_PREFIX, '');
        //   // @ts-ignore
        //   request[item.config.method!](item.config, item.config.requestOptions);
        // });
      }
    },
    unauthorizedFunction: async(msg) => {
      Message.error(msg);
      const cancelRequest = new RequestCanceler();
      const pendMap = cloneDeep(cancelRequest.getAllPending());
      cancelRequest.removeAllPending();
      // await userStore.resetGoLogin();
      // pendMap.forEach(item => {
      //   item.config.url = item.config.url!.replace(import.meta.env.VITE_API_PREFIX, '');
      //   // @ts-ignore
      //   request[item.config.method!](item.config, item.config.requestOptions);
      // });
    }
  }
});
