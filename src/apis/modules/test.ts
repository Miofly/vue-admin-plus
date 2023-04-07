import { request } from '@/apis';
import { objAddPrefix } from '@vft/utils';

const prefixUrl = '';

const Api = {
  table: '/table'
};

objAddPrefix(Api, prefixUrl);

/** 获取首页配置 */
export const getTableData = (params?) =>
  request.get(
    {
      url: Api.table,
      params
    }
  );

