export const PAGE_DIR = 'src/views';

export const BASE_LAYOUT = '/src/layouts/index.vue';

const ROUTER_PAGES = [
  {
    dir: 'business/demo',
    baseRoute: 'demo',
    title: '相关 demo 功能'
  },
  {
    dir: 'comp/docs',
    baseRoute: 'comp-docs',
    title: '组件文档',
    isMd: true,
    isApi: true,
    tabKey: 'api',
    isAlonePage: true,
    isMoreTabPage: true
  },
  {
    dir: 'comp/demo',
    baseRoute: 'comp-demo',
    title: 'demo示例',
    tabKey: 'comp-demo',
    isAlonePage: true,
    levelRouterDirList: [
      { path: 'table', title: '表格' }
    ]
  }
];

export {
  ROUTER_PAGES
};
