// import test from './common/content'
// const test = require('../../common/content')
// const picture = require('./logo.png')
// console.log(picture)
// test()
import avatar from './logo.png'
import path from 'path'
import header from './header.vue'
import './index.scss'

let img = new Image()
img.src = avatar;
img.classList.add('avatar')

let root = document.getElementById('root')
root.append(img)