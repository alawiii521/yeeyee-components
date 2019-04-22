const withLess = require('@zeit/next-less');

module.exports = withLess({
	cssModules: true,
	cssLoaderOptions: {
		localIdentName: '[folder]___[name]__[local]___[hash:base64:5]',
	},
	webpack: (config, { dev }) => {
		if (dev) {
			config.module.rules.push({
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			});
		}
		return config;
	},
});
