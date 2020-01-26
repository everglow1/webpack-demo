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

import { add } from './math'

add(1,10)