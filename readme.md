#### plugin

- 在webpack运行到某个时刻，做一些事情。（有点像生命周期函数）

#### sourceMap

- 一个映射关系，能对应到src目录下到文件的第几行。

#### 热更新

1. 命令行：webpack --watch
2. webpack 配置文件 devserver选项。
3. node脚本写监听文件

#### presets

- babel 顺序从下至上。


#### tree shaking

- 去除无用的内容。（只支持es模块的引入, 因为它的底层是一个静态引入的方式）
- development模式不支持
- 自带 （production 模式下）
- sideEffects： 去除不需要tree shaking的模块


#### 代码分割: 和webpack无关

- 业务逻辑做一个文件，类库之类的做一个文件
- 合理的代码分割可以使代码运行效率更高
- 同步代码分割：webpack配置optimization.splitChunks
- 异步（import）代码分割：自动
- 底层使用了splitChunksPlugin插件

#### 懒加载 lazy load  chunk

- 可在首页做一个单独的分割， 在详情页什么的做一个代码分割，再在路由切换时，把对应代码加载
- 每一个文件都是一个chunk

#### 代码性能

- 重点考虑代码利用率
- 一般只有异步的代码才能提高打包的性能，同步的代码只能提高一个缓存，实际上对性能影响不大。
- 懒加载
- 魔法注释 webpackPrefetch: true | webpackPreload: true， 

#### css代码分割

- mini-css-extract-plugin插件，与style-loader不能共用 ，该插件只能线上使用。