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