const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		overlay: true,
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
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{ loader: 'ts-loader' }
				],
				exclude: /node-modules/ 
			},
			{
				test: /\.js$/,
				use: [ 'babel-loader', 'eslint-loader']
			}
		]
	}
}