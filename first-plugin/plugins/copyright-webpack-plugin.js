class CopyrightWebpackPlugin {
	// constructor(options) {
	// 	console.log('插件被使用了！', options)
	// }

	// compiler: webpack的一个实例, 
	apply(compiler) {
		// 其中一种异步写法
		compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
			debugger; // 
			// 打包生成的内容在compilation.assets里边
			compilation.assets['copyright.txt'] = {
				source: function() {
					return 'copyright by dell lee'
				},
				size: function() {
					// return 21
				}
			}
			cb()
		})

		// 同步写法
		compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
			console.log(11111111)
		})
	}
}

module.exports = CopyrightWebpackPlugin