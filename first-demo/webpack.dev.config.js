const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
			test: /\.(eot|ttf|svg|woff|woff2)$/,
			use: {
				loader: 'file-loader'
			}
		},
		{
			test: /\.scss$/,
			// loader的执行顺序是从上到下，从右到左。
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				}, 
				'sass-loader',
				'postcss-loader',
			]
		}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin()
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname + '/dist')
	}
}