import { router } from '@/router';
import { generateRoutes as _generateRoutes } from './route-helpers';
import { encryptByBase64 } from '@vft/utils';

export function generateRoutes (path, title, children, attrs?) {
  return _generateRoutes(path, title, children, {
    component: () => import('@/layouts/index.vue'),
    ...attrs,
    dirName: 'views/' + attrs?.dirName
  });
}


/** 跳转 iframe */
export function jumpIframe(url, title, type) {
  const { go } = useRouterHelper(router);
  
  go('LINK_DYNAMIC_URL' + '/' + encryptByBase64(['excel', 'word'].includes(type) ? '' + 'OFFICE_PREVIEW' + url : url) + '/' + title);
}
