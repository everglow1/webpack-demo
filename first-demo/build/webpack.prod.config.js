const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const prodConfig = {
	mode: 'production',
	// mode: 'development',
	// cheap只带列信息，
	// devtool: 'cheap-module-eval-source-map', // 打包出错，映射源代码错误位置 cheap业务代码。 module其它模块错误也映射
	devtool: 'cheap-module-source-map', // source-map原理
}

module.exports = merge(baseConfig, prodConfig);