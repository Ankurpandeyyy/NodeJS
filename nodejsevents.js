const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull' , () => {
    console.log('turn off motor!');
    setTimeout(() => {
        console.log("please off it");
    },3000)
});

console.log("Script is running");
myEmitter.emit('waterfull');