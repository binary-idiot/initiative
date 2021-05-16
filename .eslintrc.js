module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	ignorePatterns: ['**/components/icons/**/*.vue', '!**/components/icons/IconBase.vue'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'linebreak-style': ['warn', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
		'prefer-destructuring': ['error', { object: true, array: false }],
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		"object-curly-newline": ["error", {
			"ObjectExpression": "always",
			"ObjectPattern": { "multiline": true },
			"ImportDeclaration": "never",
			"ExportDeclaration": { "multiline": true}
		}],
	
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
};
