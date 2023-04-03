import { setupRouterGuard } from '@/router/router-guard';
import { createVueRouter } from '@vft/router';
import type { App } from 'vue';

/** 引入基础路由 */
import { routes } from './constants';

console.log(routes, '8888');

export const router = createVueRouter(routes, false);

export async function setupRouter(app: App<Element>) {
  app.use(router);
  setupRouterGuard(router);
  await router.isReady();
}
