import { BASE_LAYOUT, PAGE_DIR, ROUTER_PAGES } from './src/router/auto-routes';
import { createViteConfig } from 'vite-config-common';
import { CompResolver } from 'vft';
import dynamicImport from 'vite-plugin-dynamic-import';

export default createViteConfig({
	customConfig: {
		optimizeDeps: [
      '@vft/use',
      'vft/es/components/iframe-layout/style/index',
      'vft/es/components/router-view-content/style/index',
      'vft/es/components/side-menu/style/index',
      'vft/es/components/md-container/style/index',
      'vft/es/components/md-container/style/index',
      'vft/es/components/icon-text/style/index',
      'vft/es/components/link/style/index',
      'vft/es/components/md-vue-playground/style/index',
      'vft/es/components/md-code-tabs/style/index',
      'vft/es/components/pagination/style/index',
      'vft/es/components/icon/style/index',
      'vft/es/components/search/style/index',
      'vft/es/components/footer-layout/style/index',
      'vft/es/components/full-screen/style/index',
      'vft/es/components/overlay/style/index',
      'vft/es/components/header-layout/style/index',
      'vft/es/components/multiple-tabs/style/index',
      'vft/es/components/empty/style/index',
      'vft/es/components/tag/style/index',
      'vft/es/components/popover/style/index',
      'vft/es/components/avatar/style/index',
      'vft/es/components/menu/style/index',
      'vft/es/components/menu-item/style/index',
      'vft/es/components/sub-menu/style/index',
      'vft/es/components/color-picker/style/index',
      'vft/es/components/list-cell/style/index',
      'vft/es/components/dialog/style/index',
      'vft/es/components/md-code-demo/style/index',
      'vft/es/components/backtop/style/index',
      'vft/es/components/container/style/index',
      'vft/es/components/main/style/index',
      'vft/es/components/aside/style/index',
      'vft/es/components/tree/style/index',
      'vft/es/components/select/style/index',
      'vft/es/components/option/style/index',
      'vft/es/components/row/style/index',
      'vft/es/components/col/style/index',
      'vft/es/components/tabs/style/index',
      'vft/es/components/table/style/index',
      'vft/es/components/tab-pane/style/index',
      'vft/es/components/horizontal-menu/style/index',
      'vft/es/components/date-picker/style/index'
		],
		pwaCfg: {
			manifest: {
				name: 'Vue Admin Plus',
				short_name: 'vue admin plus'
			},
			devOptions: {
				enabled: false
			}
		},
		autoImportOption: {
			imports: [
				{
					'vft': ['Message']
				}
			],
      dirs: [
        './src/utils',
      ]
		},
		autoComponentsOption: {
			resolvers: [
				CompResolver({
					importStyle: 'sass',
					directives: true
				})
			]
		},
		pageRouterOption: {
			basePageDir: PAGE_DIR,
			baseLayout: BASE_LAYOUT,
			dirs: ROUTER_PAGES,
			extensions: ['vue', 'md']
		},
		scssVarsData: '@use "src/styles/vars.scss" as *;'
	},
  proViteConfig: {
    plugins: [
      dynamicImport({
        filter(id) {
          if (id.includes('/node_modules/@vft/router')) {
            return true;
          }
        }
      })
    ]
  }
});
