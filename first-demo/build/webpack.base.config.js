const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = {
	entry: {
		// loadsh: './src/loadsh.js',
		main: './src/index.js',
		// sub: './src/index.js'
	},
	output: {
		// 可方放dnd地址
		// publicPath: '/',
		// filename: '[name].js',
		// chunkFilename: '[name].chunk.js',
		// path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'imports-loader?this=>window'
					}
				],
			},
			{
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
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin(),
		// 垫片
		new webpack.ProvidePlugin({
			$: 'jquery',
			_: 'lodash'
		})
	],
	performance: false,  // 不提示性能上的问题
	optimization: {
		usedExports: true,
		// 同步代码分割
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 1,  // 模块只使用了1次就分割
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '.',
			name: true,
			// 缓存组，比如引入了jquery和loadsh, 配置之后会生成一个文件.
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,  // 优先级越大，越高。
					// filename: 'vendors.js'  // 打包的文件名字
					name: 'vendors'  // 打包的文件名字
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,  // 如果一个模块已经被打包，就使用原先被打包的
					// filename: 'common.js',
					name: 'common.js'
				},
			}
		}
	}
}