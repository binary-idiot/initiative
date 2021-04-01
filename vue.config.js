module.exports = {
	outputDir: 'docs',
	pwa: {
		assetsVersion: '2',
		themeColor: '#ffffff',
		msTileColor: '#2d89ef',
		iconPaths: {
			androidChrome192: 'img/icons/android-chrome-192x192.png',
			androidChrome512: 'img/icons/android-chrome-512x512.png',
			appleTouchIcon: 'img/icons/apple-touch-icon.png',
			favicon16: 'img/icons/favicon-16x16.png',
			favicon32: 'img/icons/favicon-32x32.png',
			maskIcon: 'img/icons/safari-pinned-tab.svg',
			msTileImage: 'img/icons/mstile-144x144.png',
		},
		manifestOptions: {
			background_color: '#ffffff',
		},
		workboxOptions: {
			exclude: ['CNAME'],
			navigateFallback: 'index.html',
		},
	},
	css: {
		sourceMap: true,
		loaderOptions: {
			sass: {
				prependData: '@import "@/assets/styles/_vars.scss";',
			},
		},
	},
};
