const path = require('path')
const webpack = require('webpack')

module.exports = {
	mode: 'production',
	entry: {
		vendors: ['react', 'react-dom', 'lodash'] 
	},

	output: {
		filename: '[name].dll.js',
		path: path.resolve(__dirname, '../dll'),
		library: '[name]'  // 把库用一个变量的形式暴露出去
	},
	plugins: [
		// 生成映射文件
		new webpack.DllPlugin({
			name: '[name]',
			path: path.resolve(__dirname, '../dll/[name].mainfest.json'),
		})
	]
}