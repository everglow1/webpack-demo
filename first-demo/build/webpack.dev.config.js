const webpack = require('webpack');
const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 可视化打包文件


const devConfig = {
	// mode: 'production',
	mode: 'development',
	// cheap只带列信息，
	devtool: 'cheap-module-eval-source-map', // 打包出错，映射源代码错误位置 cheap业务代码。 module其它模块错误也映射
	// devtool: 'cheap-module-source-map', // source-map原理
	// devserver打包的代码不会在目录下， 在电脑内存中。增加打包速度。 方便在开发环境调试代码，只在dev-server环境下有效
	devServer: {
		overlay: true,  // 浏览器页面提示
		contentBase: './dist',
		open: true,  // 自动打开浏览器
		port: 8080,
		hot: true,  // 开启热更新， css改变就不刷新页面,只变化对应css
		// 解决路由上的一些问题。比如路由访问不到list。但是前端有llist，可访问前端的list，线上环境需要后端nginx或者aphce配置。前端无法解决
		historyApiFallback: true,  
		// hotonly: true,
		// 跨域代理, 请求api 会请求 http://localhost:3000
		proxy: {
			// "/api": "http://localhost:3000",
			'/react': {
				target: 'http://www.dell-lee.com',
				secure: false,  // 对https接口请求
				pathRewrite: {
					'header.json': 'demo.json'
				}
			}
		}
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
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
		new webpack.HotModuleReplacementPlugin(),
		// new BundleAnalyzerPlugin()
	],
	optimization: {
		usedExports: true
	},
}

module.exports = devConfig;