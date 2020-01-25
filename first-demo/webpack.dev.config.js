const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map', // 打包出错，映射源代码错误位置 cheap业务代码。 module其它模块错误也映射
	// devtool: 'cheap-module-source-map', // source-map原理
	entry: {
		main: './src/index.js',
		// sub: './src/index.js'
	},
	// devserver打包的代码不会在目录下， 在电脑内存中。增加打包速度。
	devServer: {
		contentBase: './dist',
		open: true,  // 自动打开浏览器
		port: 8080,
		hot: true,  // 开启热更新， css改变就不刷新页面,只变化对应css
		// hotonly: true,
		// 跨域代理, 请求api 会请求 http://localhost:3000
		proxy: {
			"/api": "http://localhost:3000"
		}
	},
	output: {
		// 可方放dnd地址
		publicPath: '/',
		filename: '[name].js',
		path: path.resolve(__dirname + '/dist')
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				// options: {
				// 	// @babel/preset-env 语法的转化
				// 	// presets: [['@babel/preset-env', {
				// 	// 	targets: {
				// 	// 		chrome: '67'
				// 	// 	},
 				// 	// 	useBuiltIns: 'usage'
				// 	// }]]
				// 	// "plugins": [["@babel/plugin-transform-runtime", {
				// 	// 	"absoluteRuntime": false,
				// 	// 	"corejs": 2,
				// 	// 	"helpers": true,
				// 	// 	"regenerator": true,
				// 	// 	"useESModules": false,
				// 	// 	"version": "7.0.0-beta.0"
				// 	// }]]
				// }
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
		},
		{
			test: /\.css$/,
			// loader的执行顺序是从上到下，从右到左。
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'postcss-loader',
			]
		}
	]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	
}