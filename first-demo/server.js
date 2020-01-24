// node 
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.dev.config');
const compiler = webpack(config);  // 使用配置文件，webpack方法随时编译。

const app  = express();

app.use(webpackDevMiddleware(compiler, {
	// publicPath: config.output.publicPath
}));

app.listen(3000, () => {
	console.log('server is running...')
});