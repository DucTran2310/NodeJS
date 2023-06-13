// Modules
// CommonJS - every file is module (by default)
// `module`: Đây là một biến toàn cục cho phép bạn xuất và nhập các module Node.js. 
// Mỗi file JavaScript trong Node.js được xem như một module, 
// và các biến và hàm được xuất từ một module có thể được nhập vào các module khác.

const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

console.log('names:', names)
console.log('data:', data)

sayHi('QTV')
sayHi(names.adStar)
sayHi(data.singlePerson.name)