import { request } from '@/apis';
import { objAddPrefix } from '@vft/utils';

const prefixUrl = '';

const Api = {
  table: '/table',
  common: '/common'
};

interface TableProps {
  page: number
  pageSize?: number
}

objAddPrefix(Api, prefixUrl);

/** 表格测试 */
const getTableData = (params: TableProps) =>
  request.get(
    {
      url: Api.table,
      params
    }
  );

const commonTestApi = () =>
  request.get(
    {
      url: Api.common
    }
  );

export {
  commonTestApi,
  getTableData
};
