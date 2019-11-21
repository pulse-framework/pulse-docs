module.exports = {
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule
		.use('vue-svg-loader')
		.loader('vue-svg-loader')
		.end();
		config.module.rule('md')
		.test(/\.md/)
		.use('vue-loader')
		.loader('vue-loader')
		.end()
	},
	configureWebpack: {
		devtool: 'source-map'
	}
  };