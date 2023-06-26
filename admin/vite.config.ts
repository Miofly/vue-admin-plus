import { BASE_LAYOUT, PAGE_DIR, ROUTER_PAGES } from './src/router/auto-routes';
import { createViteConfig } from 'vite-config-common';
import { CompResolver } from 'vft';

export default createViteConfig({
	customConfig: {
		optimizeDeps: [
      '@vft/use',
      'vft/es/components/avatar/style/index',
      'vft/es/components/aside/style/index',
      'vft/es/components/backtop/style/index',
      'vft/es/components/button/style/index',
      'vft/es/components/checkbox/style/index',
      'vft/es/components/clamp/style/index',
      'vft/es/components/clamp-toggle/style/index',
      'vft/es/components/col/style/index',
      'vft/es/components/color-picker/style/index',
      'vft/es/components/config-provider/style/index',
      'vft/es/components/container/style/index',
      'vft/es/components/date-picker/style/index',
      'vft/es/components/dialog/style/index',
      'vft/es/components/divider/style/index',
      'vft/es/components/empty/style/index',
      'vft/es/components/footer-layout/style/index',
      'vft/es/components/form/style/index',
      'vft/es/components/form-item/style/index',
      'vft/es/components/full-screen/style/index',
      'vft/es/components/header-layout/style/index',
      'vft/es/components/horizontal-menu/style/index',
      'vft/es/components/icon/style/index',
      'vft/es/components/icon-text/style/index',
      'vft/es/components/iframe-layout/style/index',
      'vft/es/components/image/style/index',
      'vft/es/components/input/style/index',
      'vft/es/components/link/style/index',
      'vft/es/components/list-cell/style/index',
      'vft/es/components/logo/style/index',
      'vft/es/components/main/style/index',
      'vft/es/components/menu/style/index',
      'vft/es/components/message/style/index',
      'vft/es/components/modal/style/index',
      'vft/es/components/multiple-tabs/style/index',
      'vft/es/components/overlay/style/index',
      'vft/es/components/pagination/style/index',
      'vft/es/components/popconfirm/style/index',
      'vft/es/components/popover/style/index',
      'vft/es/components/radio/style/index',
      'vft/es/components/router-view-content/style/index',
      'vft/es/components/row/style/index',
      'vft/es/components/search/style/index',
      'vft/es/components/select/style/index',
      'vft/es/components/side-menu/style/index',
      'vft/es/components/skeleton/style/index',
      'vft/es/components/super-form/style/index',
      'vft/es/components/switch/style/index',
      'vft/es/components/table/style/index',
      'vft/es/components/tabs/style/index',
      'vft/es/components/tooltip/style/index',
      'vft/es/components/verify-code/style/index'
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
        './src/utils'
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
	}
});
