var http = require('http');
var logModule = require('../localModules/Log.js');
var helloworld = require('../localModules/HelloWorld.js');
var msg = require('../localModules/SimpleMsg.js');
var objFun = require('../localModules/objectFun.js');
var obj = require('../localModules/object.js');
var anonyFun = require('../localModules/anonyFun.js');
var person = require('../localModules/FunClass.js');
var hello = require('../localModules');

// If we give only localmodules path, it will search for a package.json/index.js
console.log('Message : ' + hello);
console.log('\n');

// export function as class
var pers = new person('Chandrakala', 'D');
console.log('export function class : ' + pers.fullName());
console.log('\n');

// export anonymous function
anonyFun('export anonymous function : ' + ' Hello Chaand');
console.log('\n');

// export object
console.log('export object : ' + obj.FirstName + ' ' + obj.LastName);
console.log('\n');

// export object with function
objFun.objectFun.info('export object with function : ' + 'chandu');
console.log('\n');

//export message (with name)
console.log('export object : ' + msg.message);
console.log('\n');

// export literal
console.log('export literal : ' + helloworld);
console.log('\n');


// export object with function
console.log('export object with function:');
logModule.info('1. Info');
logModule.warning('2. Warning');
logModule.error('3. Error');


// start core module server
var server = http.createServer(function(req, res){
    console.log(res);
});


// listening port
server.listen(3000);