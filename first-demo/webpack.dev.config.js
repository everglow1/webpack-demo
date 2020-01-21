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
					// publicPath: 'assets',
					emitFile: true
				}
			}
		},
		{
			test: /\.scss$/,
			// loader的执行顺序是从上到下，从右到左。
			use: [ 'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				}, 
				'sass-loader', 
				'postcss-loader'
			]
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname + '/dist')
	}
}