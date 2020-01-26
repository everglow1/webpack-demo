const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
	// mode: 'production',
	mode: 'development',
	// cheap只带列信息，
	devtool: 'cheap-module-eval-source-map', // 打包出错，映射源代码错误位置 cheap业务代码。 module其它模块错误也映射
	// devtool: 'cheap-module-source-map', // source-map原理
	// devserver打包的代码不会在目录下， 在电脑内存中。增加打包速度。 方便在开发环境调试代码
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
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		usedExports: true
	},
}

module.exports = merge(baseConfig, devConfig);