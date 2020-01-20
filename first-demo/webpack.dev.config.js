const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundledd.js',
		path: path.resolve(__dirname + '/dist')
	},
}