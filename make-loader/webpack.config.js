const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolveLoader: {
		modules: ['node_modules', './loaders']
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: [
					{
						loader:  'replaceLoader'
					},
					{
						loader: path.resolve(__dirname, './loaders/replaceLoaderAsync.js'),
						options: {
							name: 'lee'
						}
					}
				]
			}
		]
	}
}