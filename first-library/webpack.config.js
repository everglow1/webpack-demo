const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	externals: ['lodash'],  // 忽略，不打包
	// externals: {
	// 	lodash: {
	// 		commonjs: 'lodash'
	// 	}
	// },
	output: {
		filename: 'library.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'library',  // script标签引模块， 全局引入模块
		libraryTarget: 'umd',  // umd通用模块引入都可 es module  commonjs  amd
	}
}