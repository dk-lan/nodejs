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