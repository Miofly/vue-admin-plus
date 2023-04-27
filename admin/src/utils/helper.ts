import { cacheHelper } from '@vft/utils';
import { name, version } from '../../package.json';
import { setTargetScrollTop as _setTargetScrollTop } from '@vft/utils';
import { router } from '@/router';
import setting from '@/setting';

/** 项目名称+版本 */
export const storagePrefixName = name + '_' + version + '_';

export const { ls, ss, lsNoKey, ssNoKey, lsEncrypt, ssEncrypt } = cacheHelper(storagePrefixName);

export function setTargetScrollTop (scrollTop = 0) {
  const { getInfos } = useRouterHelper(router);
  _setTargetScrollTop(getInfos?.scrollDom || setting.defaultScrollDom, scrollTop);
}

