module.exports = {
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule
		.use('vue-svg-loader')
		.loader('vue-svg-loader');

		config.module.rule('md')
		.test(/\.md/)
		.use('vue-loader')
		.loader('vue-loader')
		.end()
		.use('vue-markdown-loader')
		.loader('vue-markdown-loader/lib/markdown-compiler')
		.options({
			raw: true,
			preventExtract: true,
			preset: 'default',
			breaks: true,
			preprocess: function(markdownIt, source) {
				// do any thing
				return source;
			},
			use: [
				/* markdown-it plugin */
				require('markdown-it-anchor'),
				/* or */
				// [require('markdown-it-xxx'), 'this is options']
			]
		})
	},
  };