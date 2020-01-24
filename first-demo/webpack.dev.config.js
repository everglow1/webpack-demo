const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map', // 打包出错，映射源代码错误位置 cheap业务代码。 module其它模块错误也映射
	// devtool: 'cheap-module-source-map', // source-map原理
	entry: {
		main: './src/index.js',
		// sub: './src/index.js'
	},
	output: {
		// 可方dnd地址
		// publicPath: 'https://www.cdn.com',  
		filename: '[name].js',
		path: path.resolve(__dirname + '/dist')
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
	
}