import { request } from '@/apis';
import { objAddPrefix } from '@vft/utils';

const prefixUrl = '';

const Api = {
  table: '/table'
};

interface TableProps {
  page: number
  pageSize?: number
}

objAddPrefix(Api, prefixUrl);

/** 获取首页配置 */
export const getTableData = (params: TableProps) =>
  request.get(
    {
      url: Api.table,
      params
    }
  );
