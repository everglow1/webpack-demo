const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path')

const prodConfig = {
	mode: 'production',
	// mode: 'development',
	// cheap只带列信息，
	// devtool: 'cheap-module-eval-source-map', // 打包出错，映射源代码错误位置 cheap业务代码。 module其它模块错误也映射
	devtool: 'cheap-module-source-map', // source-map原理
	output: {
		filename: '[name].[contenthash].js',  // 线上代码使用hash，防止浏览器缓存
		chunkFilename: '[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				// loader的执行顺序是从上到下，从右到左。
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
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
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
              hmr: process.env.NODE_ENV === 'development',
            },
					},
					// 'style-loader', 
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
	optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
}

module.exports = prodConfig;