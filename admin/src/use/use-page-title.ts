import setting from '@/setting';


/** 自定义网页标题 */
export function usePageTitle(title?) {
  const { getTitle } = useRouterHelper();

  useTitle(title ? title : getTitle + ' - ' + setting.name);
}
