export const PAGE_DIR = 'src/views';

export const BASE_LAYOUT = '/src/layouts/index.vue';

const isDev = process.env.NODE_ENV === 'development';

const ROUTER_PAGES = [
  {
    dir: 'business/demo',
    baseRoute: 'demo',
    title: '相关 demo 功能',
    // levelRouterDirList: [
    //   { path: 'axios', title: '请求库' },
    // ]
  }
];

export {
  ROUTER_PAGES
};
