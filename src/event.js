// 1.
// var event = require('events');

// var em = new event.EventEmitter();

//Subscribe FirstEvent
// em.on('firstEvent', function(data){
//     console.log('First Subscriber : ' + data);
// });

// Raising FirstEvent
// em.emit('firstEvent', 'This is my firtst event emmiter');
// console.log("Server starting...");


// 2.
// var event = require('events').EventEmitter;

// var em  = new event();

// //Subscribe FirstEvent
// em.addListener('FirstEvent', function(data){
//     console.log('Subscriber : ' + data);
// });

// //Subscribe SecondEvent
// em.on('SecondEvent', function(data){
//     console.log('Subscriber : ' + data);
// });

// // Raising FirstEvent
// em.emit('FirstEvent', "I am using 'Listener' to subscribe an event.");

// // Raising SecondEvent
// em.emit('SecondEvent', "I am using 'on' to subscibe an event.");






// 3.  Return EventEmitter from a function
// var event = require('events').EventEmitter;

// function LoopProcessor(num){
//     var em = new event();

//     setTimeout(function(){
//         for(var i=0; i<num; i++){
//             em.emit('Before', i);
//                 console.log('Process number   : ' +i);
//             em.emit('After', i);
//         }
//     }, 2000);

//     return em;
// }

// var lp = new LoopProcessor(3);

// lp.on('Before', function(data){
//     console.log('Before Subscribe : ' + data);
// });

// lp.on('After', function(data){
//     console.log('After Subscribe  : ' + data);
// });





// Extend EventEmitter Class
var event = require('events').EventEmitter;
var util = require('util');

function LoopProcessor(num){

    var em = this;

    setTimeout(function(){

        for(var i=0; i<num; i++){
            em.emit('Before', i);
                console.log('Process Number : ' +i);
            em.emit('After', i);
        }

    }, 2000);

    return this;

}

util.inherits(LoopProcessor, event);

var lp = new LoopProcessor(4);

lp.on('Before', function(data){
    console.log('Process Before : ' + data);
});

lp.on('After', function(data){
    console.log('Process After  : ' + data);
});
























