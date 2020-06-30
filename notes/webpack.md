# webpack

## webpack打包、打包过程、打包结果分析

## webpack资源模块的加载－Loader
Loader 负责资源文件从输入到输出的转换，工作管道特性。
style-loader,css-loader,babel-loader  
file-loader ,url-loader(dataURL形式):小文件使用，减少请求次数

### 加载器
1. 编译转换类 css-loader -> js模块
2. 文件操作类 file-loader -> 拷贝到输出目录，导出文件路径
3. 代码检查类 eslint-loader -> 检查

### webpack模块加载方式
1. 遵循es modules标准的import 声明
2. 遵循Common js 标准的require函数
3. 遵循AMD 标准define函数和 require函数
4. 样式代码中的@import指令和url函数
5. HTML代码中图片标签的src属性



## webpack的插件机制－Plugin
自动清除输出目录插件(clean-webpack-plugin)
自动生成HTML文件（html-webpack-plugin）:index.html,配置多页面

### plugin－钩子机制
一个函数或者是一个包含apply方法的对象  


## webpack周边生态（Dev Server, HMR , Proxy）

### webpack-dev-server
1. 提供用于开发HTTP server，集成［自动编译］和［自动刷新浏览器］等功能   
2. 将打包结果暂存在内存里，开启一个http server,浏览器从内存中读 
3. 所有webpack打包文件，会作为开发服务器资源文件。

### HMR(模块热替换)



## webpack高级特性（Tree-shaking, sideEffects）
生产优化  
1. tree-shaking：生产模式自动开启
2. 合并模块(Scope Hoisting)
```
optimization:{
    usedExports:true,
    concatenateModules:true,
    splitChunks:{
        chunks:'all'
    },
    minimize:true
}
```
3. 代码分割：  
多入口打包  
动态导入(模块按需加载，模块会自动分包)


## webpack实现原理（AST语法树）


加载资源：
wenpack模块加载方式：
1. 遵循ES Modules标准的import声明
2. 遵循CommonJS标准的require函数
3. 遵循AMD标准的define函数和require函数
4. ＊样式代码中的@import指令合url函数
5. ＊html代码中图片标签的src属性


