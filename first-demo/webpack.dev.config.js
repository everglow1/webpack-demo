const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'images/',
					limit: 2048000,
					publicPath: 'assets',
					emitFile: true
				}
			}
		},
		{
			test: /\.vue$/,
			use: {
				loader: 'file-loader'
			}
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname + '/dist')
	},
}