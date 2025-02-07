// import a specific object

var p1 = require('./myself');
var myfun = require('./myfunctions');

console.log(p1.obj);

console.log(p1.obj.name);
console.log(p1.obj.mobile);
console.log(p1.obj.email);

myfun.f1()
myfun.f2()

console.log(myfun.name)