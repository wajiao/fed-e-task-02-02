# 王姣姣｜Part2|模块二

## 简答题

### webpack的构建流程主要有哪些环节？如果可以尽可能详尽的描述webpack打包的整个过程。
webpack构建主要流程：  
安装webpack,webpack-cli包，配置webpack.config.js文件
```
    mode:'none' // none,production,development三种模式
    entry:'./src/main.js', // 项目打包入口文件
    output:{     
        filename:'bundle.js', // 项目打包输出文件
        path:path.join(__dirname,'dist') // 输出文件目录
    },
    // 配置相应的加载资源loader
    // 编译转换类：vue-loader,style-loader,  文件操作类:file-loader,  代码检查类 eslint-loader
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    }
    // 配置需要的插件功能plugin
    plugins:[
         new VueLoaderPlugin()
    ]
```

### Loader和Plugin有哪些不同？请描述一下开发Lodaer和Plugin的思路
Loader:负责资源文件从输入到输出的转换，工作管道特性。
Plugin:负责工程化的功能增强，通过钩子机制，添加处理功能。

loader开发思路：
```
module.exports = source =>{ //souce接收传入的资源
    // 进行source处理
    return '返回处理后的js环境结果'
}
```
plugin开发思路：
```
class myPlugin{
    apply(compiler){ //compiler对象:包含所有配置信息
        // apply方法启动插件
        compiler.hooks.emit.tap('myPlugin',compilation =>{ //compiler.hooks.emit.tap()挂载定义的插件
            //compilation:此次打包的上下文
            for(const name in compilation.assets){
                console.log(compilation.assets[name].source())  //获取文件名，文件资源
                ／／ 处理获取的文件资源
            }
        })
    }
}
```



