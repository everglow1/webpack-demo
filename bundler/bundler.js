const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser'); // babel解析工具 解析代码
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

// 对入口文件进行分析
const moduleAnalyser = function(filename) {
	const content = fs.readFileSync(filename, 'utf-8')
	const ast = parser.parse(content, {
		sourceType: 'module'
	});

	const dependencies = {}; // 入口文件依赖存储
	traverse(ast, {
		ImportDeclaration({ node }) {
			const dirname = path.dirname(filename)
			const newFile = './' + path.join(dirname, node.source.value)
			dependencies[node.source.value] = newFile
		}
	});

	const { code } = babel.transformFromAst(ast, null, {
		presets: ['@babel/preset-env']
	})
	return {
		filename,
		dependencies,
		code
	}
}

// 依赖图谱
const makeDependenicesGraph = function(entry) {
	const entryModule = moduleAnalyser(entry)
	const graphArray = [entryModule]
	for(let i = 0; i < graphArray.length; i++) {
		const item = graphArray[i]
		const { dependencies } = item
		if(dependencies) {
			for(let j in dependencies) {
				graphArray.push(moduleAnalyser(dependencies[j]))
			}
		}
	}

	const graph = {}
	graphArray.forEach((item) => {
		graph[item.filename] = {
			dependencies: item.dependencies,
			code: item.code
		}
	})

	return graph
}

const generateCode = function(entry) {
	const graph = JSON.stringify(makeDependenicesGraph(entry))
	return `
		(function(graph) {
			function require(module) {

				function localRequire(relaivePath) {
					return require(graph[module].dependencies[relaivePath])
				};

				var exports = {};

				(function(require, exports, code) {
					eval(code)
				})(localRequire, exports, graph[module].code)
				return exports
			};

			require('${entry}')
		})(${graph})
	`
}

const code = generateCode('./src/index.js')
console.log('=========================================\n', code)
