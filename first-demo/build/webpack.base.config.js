const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');

const baseConfig = {
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
	resolve: {
		extensions: ['.js', '.jsx'], // 引入模块时，找对应结尾的文件
		mainFiles: ['index', 'child'], // 找文件时，默认找index，再找child，找不到报错
		// 别名
		alias: {
			delll: path.resolve(__dirname, '../src/child')
		}
	},
	module: {
		rules: [
			{ 
				test: /\.jsx?$/, // 问号表示x可有可无
				exclude: /node_modules/, 
				use: [
					{
						loader: 'babel-loader',
						// loader: 'eslint-loader'
					},
					// {
					// 	loader: 'imports-loader?this=>window'
					// }
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
		}),
		// 给生成的html文件里边添加内容
		new AddAssetHtmlWebpackPlugin({
			filepath: path.resolve(__dirname, '../dll/vendors.dll.js')
		}),
		// 通过映射文件
		new webpack.DllReferencePlugin({
			manifest: path.resolve(__dirname, '../dll/vendors.mainfest.json')
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

module.exports = (env) => {
	if(env && env.production) {
		return merge(baseConfig, prodConfig)
	} else {
		return merge(baseConfig, devConfig)
	}
}

