// 分析loader的一个插件
const loaderUtils = require('loader-utils')

module.exports = function(source) {

	const options = loaderUtils.getOptions(this)

	// this.query参数
	// console.log(this.query)
	// return source.replace('dell', options.name)


	// const result = source.replace('dell', options.name)
	// this.callback(null, result)

	// 异步的loader
	const callback = this.async()
	setTimeout(() => {
		const result = source.replace('dell', options.name)
		callback(null, result)
	}, 1000);

}