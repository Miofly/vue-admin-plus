import { BASE_LAYOUT, PAGE_DIR, ROUTER_PAGES } from './src/router/auto-routes';
import { createViteConfig } from 'vite-config-common';
import { CompResolver } from 'vft';

export default createViteConfig({
	customConfig: {
		optimizeDeps: [
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
			'vft/es/components/back-top/style/index',
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
			'vft/es/components/md-code-demo/style/index'
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
