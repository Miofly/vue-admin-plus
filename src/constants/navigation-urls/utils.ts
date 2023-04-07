import { arrSort, cloneDeep, getModulesDefaultContent } from '@vft/utils';
import { NAVIGATION_URLS } from './index';
import type { All_URL_LIST_TYPE, TITLE_PATH_TYPE, UrlListProps } from './types';

export function addPathTitle(list: TITLE_PATH_TYPE[]) {
  const _list: TITLE_PATH_TYPE[] = [];
  if (list?.length) {
    for (const item of list) {
      const infos = { title: item[0]!, path: item[1]! };
      if (item[2]) {
        Object.assign(infos, { roles: item[2] });
      }
      _list.push(infos);
    }
  }
  return _list;
}

export const getList = (list) => {
  const _list = getModulesDefaultContent(list) as UrlListProps[];

  _list.forEach((item) => {
    item.list = addPathTitle(item.list);
    return item;
  });

  return arrSort(_list, 'order');
};

export const getAllUrlList = () => {
  const allList: All_URL_LIST_TYPE = [];
  const _list = cloneDeep(NAVIGATION_URLS);
  for (const item of _list) {
    for (const sub_item of item.list as All_URL_LIST_TYPE) {
      sub_item.category = [item.category];
      allList.push({ ...sub_item, sourceType: 'url' });
    }
  }

  return allList;
};
