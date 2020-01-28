const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		main: './src/index.tsx'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{ loader: 'ts-loader' }
				],
				exclude: /node-modules/ 
			}
		]
	}
}