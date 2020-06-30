# 模块化开发

### ES Modules 特性：
1. ESM 自动采用严格模式，忽略‘use strict’ (严格模式：this->undefind,非严格模式 :this->window)
2. 每个ES module 都是运行在单独的私有作用域中
3. ESM 是通过CORS的方式请求外部JS模块（服务端支持CORS）
4. ESM 的script标签会延迟执行脚本

### 模块化系统：ESModules,CommonJS
1. ES Modules中可以导入CommonJs
2. CommonJs中不可以导入ES Modules
3. Common JS始终只会导出一个默认成员
4. 注意import不是解构对象导出
固定语法：
export{foo,boo} import{foo,boo} 
export default {}//对象








