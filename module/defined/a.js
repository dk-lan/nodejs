var FunA = require('./b.js');//得到 b.js => FunA
var name = FunA();// 运行 FunA，name = 'Tom'
console.log(name); // 输出结果

// var FunA = require('./b.js');
// var name1 = FunA.FunA();// 运行 FunA，name = 'Tom'
// var name2 = FunA.FunB();// 运行 FunB，name = 'Sam'
// console.log(name1);
// console.log(name2);