module.exports = {
	outputDir: 'docs',
	pwa: {
		themeColor: '#209CEE',
		msTileColor: '#209CEE',
		iconPaths: {
			androidChrome192: 'img/icons/android-chrome-192x192.png',
			androidChrome512: 'img/icons/android-chrome-512x512.png',
			appleTouchIcon: 'img/icons/apple-touch-icon.png',
			favicon16: 'img/icons/favicon-16x16.png',
			favicon32: 'img/icons/favicon-32x32.png',
		},
		workboxOptions: {
			exclude: ['CNAME']
		}
	},
};
