# 认识 Node.js
- Node 是一个服务器端 JavaScript 解释器
- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境
- Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
- Node.js 的包管理器 npm，是全球最大的开源库生态系统
- Node.js 是一门动态语言，运行在服务端的 Javascript

# 环境搭建
- [下载安装文件](https://nodejs.org/en/download/)
- 下载完后进行安装，建议安装到默认路径，注意不要有中文路径
- 配置环境变量
- 在命令窗口中输入 node -v，如果正常显示版本号则表示安装成功

# REPL(交互式解释器)
在命令窗口输入 node 后回车，便可进入到 REPL 模式，在这个模式里可以输入 Javascript 的脚本语法，node 会自动将语法执行。类似于在浏览器的开发人员工具的控制台。不同的在于 REPL 是在服务端解析 Javascript，而控制台是在客户端解析 Javascript。按 CTRL + C 可退出 REPL 模式。

# 运行 Node.js
REPL 只适用于一些简单的 Javascript 语法，对于稍复杂的程序，可以直接写到 js 文件当中。在前端可以直接在 html 页面中通过 script 标签引入 js 然后在浏览器运行，则可以通过浏览器来解析 js 文件。在 node 环境下，可通过命令窗口输入命令： node *.js ，便可直接执行 js 文件。

# 模块
模块系统是 Node.js 最基本也是最常用的。一般情况模块可分为四类：
1. 原生模块
2. 文件模块
3. 第三方模块
4. 自定义模块

## 自定义模块
1. 创建模块(b.js)
```javascript
//b.js
function FunA(){
    return 'Tom';
}
//暴露方法 FunA
module.exports = FunA;
```
2. 加载模块(a.js)
```javascript
//a.js
var FunA = require('./b.js');//得到 b.js => FunA
var name = FunA();// 运行 FunA，name = 'Tom'
console.log(name); // 输出结果
```

### module.exports
module.exports 就 Node.js 用于对外暴露，或者说对外开放指定访问权限的一个对象。如上面的案例，如果没有这段代码
```javascript
module.exports = FunA;
```
那么 require('./b.js') 就会为 undefined。
一个模块中有且仅有一个 module.exports，如果有多个那后面的则会覆盖前面的。

### exports
exports 是 module 对象的一个属性，同时它也是一个对象。在很多时候一个 js 文件有多个需要暴露的方法或是对象，module.exports 又只能暴露一个，那这个时候就要用到 exports:
```javascript
function FunA(){
    return 'Tom';
}

function FunB(){
    return 'Sam';
}

exports.FunA = FunA;
exports.FunB = FunB;
```
```javascript
//FunA = exports,exports 是一个对象
var FunA = require('./b.js');
var name1 = FunA.FunA();// 运行 FunA，name = 'Tom'
var name2 = FunA.FunB();// 运行 FunB，name = 'Sam'
console.log(name1);
console.log(name2);
```
当然在引入的时候也可以这样写
```javascript
//FunA = exports,exports 是一个对象
var {FunA, FunB} = require('./b.js');
var name1 = FunA();// 运行 FunA，name = 'Tom'
var name2 = FunB();// 运行 FunB，name = 'Sam'
console.log(name1);
console.log(name2);
```