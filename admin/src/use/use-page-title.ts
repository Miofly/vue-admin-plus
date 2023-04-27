import setting from '@/setting';
import { useRouterHelper } from '@vft/router';

/** 自定义网页标题 */
export function usePageTitle(title?) {
  const { getTitle } = useRouterHelper();

  useTitle(title ? title : setting.name + '-' + getTitle);
}
