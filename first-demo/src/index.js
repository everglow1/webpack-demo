// // import './index.scss';

// // let root = document.getElementById('root');

// // root.innerHTML = '<div class="iconfont iconplant-1"></div>';
// // console.log('22222')
// // console.log('11111')
// import counter from "./counter"
// import number from "./number"

// // import "./style.css";
// // let btn = document.createElement('button');
// // btn.innerHTML = '新增';
// // document.body.appendChild(btn);

// // btn.onclick = function () {
// // 	let div = document.createElement('div');
// // 	div.innerHTML = 'item';
// // 	document.body.appendChild(div);
// // }
// counter()
// number()

// // 只更新对应的文件。
// console.log('module.hot', module.hot)
// if(module.hot) {
// 	module.hot.accept('./number', () => {
// 		document.body.removeChild(document.getElementById('number'))
// 		number();
// 	})
// }

// 直接引入不实用作为一个库的开发。
// import "@babel/polyfill";

// const arr = [
// 	new Promise(() => {}),
// 	new Promise(() => {})
// ]
// arr.map(item => {
// 	console.log(item)
// })
// console.log(111)
// console.log(3333)
// console.log(444)

// import "@babel/polyfill";
// import  React, { Component } from 'react';
// import  ReactDom from 'react-dom';

// class App extends Component {
// 	render() {
// 		return <div>Hello World</div>
// 	}
// }
// ReactDom.render(<App/>, document.getElementById('root'));

// import { add } from './math'

// add(1,10)

// 第一种方式
// 当页面业务逻辑发生变化时，加载2mb的内容

// import _ from 'lodash';  // 1mb
// import {add} from './math'
// import counter from "./counter";

// add(1,2)
// counter()

// // 业务代码 2mb
// console.log(_.join(['a', 'b', 'c'], '===='))
// console.log(_.join(['a', 'b', 'c']))
// 打包文件很大，加载时间很长。

// 第二种方式
// main.js被拆成loadsh.js main.js
// 当页面业务逻辑发生变化时，只要加载main.js即可

// code splitting 代码分割



// function getComponent() {
// 	return import(/* webpackChunkName: "loadsh" */'lodash').then(({ default: _ }) => {
// 		let element = document.createElement('div');
// 		element.innerHTML = _.join(['Dell', 'Lee'], '-');
// 		return element;
// 	})
// }

// async function getComponent() {
// 	const { default: _ } = await import(/* webpackChunkName: "loadsh" */'lodash');
// 	const element = document.createElement('div');
// 	element.innerHTML = _.join(['Dell', 'Lee'], '-');
// 	return element;
// }

// document.addEventListener('click',  () => {
// 	getComponent().then(ele => {
// 		document.body.appendChild(ele);
// 	})
// })
// getComponent().then(ele => {
// 	document.body.appendChild(ele);
// })

// document.addEventListener('click',  () => {
// 	import(/* webpackPrefetch: true */ './click').then(({default: _}) => {
// 		_()
// 	})
// })


// import './style.css'
// import './style1.css'

// console.log('hello world')

// import _ from 'lodash';
// import $ from 'jquery';
// import { ui } from './jquery.ui';

// ui();
// const dom = $('div');
// dom.html(_.join(['dell', 'lee'], '-'));
// $('body').append(dom);
// console.log(1111)


// console.log(this)
// const library = require('yzj-library')
// // import * as library from 'yzj-library'
// // console.log('library', library)
// console.log(library)

// import axios from 'axios'

// axios.get('/react/api/header.json').then((res) => {
// 	console.log('res', res)
// }).catch(error => {
// 	console.log('error', error)
// })

// function test(dd) {
// 	console.log(dd)
// }
// test('dd')
// console.log(111111)


import  React, { Component } from 'react';
import  ReactDom from 'react-dom';
import Child from 'delll';
import _ from 'lodash';

class App extends Component {
	render() {
		return (
			<div>
				<div>{_.join(['this', 'is', 'app'], ' ')}</div>
				<Child />
			</div>
			)
	}
}
ReactDom.render(<App/>, document.getElementById('root'));
