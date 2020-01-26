const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: {
		// loadsh: './src/loadsh.js',
		main: './src/index.js',
		// sub: './src/index.js'
	},
	output: {
		// 可方放dnd地址
		// publicPath: '/',
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
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
		new CleanWebpackPlugin()
	],
	optimization: {
		// 同步代码分割
		splitChunks: {
			chunks: "all",
			minSize: 0,
			minChunks: 1,  // 只使用了1次就分割
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			// 缓存组，比如引入了jquery和loadsh, 配置之后会生成一个文件.
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,  // 优先级越大，越高。
					filename: 'vendors.js'  // 打包的文件名字
				},
				default: {
					// minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,  // 如果一个模块已经被打包，就使用原先被打包的
					filename: 'common.js'
				},
			}
		}
	}
}