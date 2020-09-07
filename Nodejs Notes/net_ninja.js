// about Global Objects
// https://nodejs.org/docs/latest-v8.x/api/globals.html
// in frontend we use window but in node we use global objects which provides a lot of methods like console
console.log('Hello_world');
// set time out method, which fires a function after set time, 3000- 3secs
setTimeout(() => {
	console.log('3 seconds have passed');
}, 3000);
// set interval
// this function is called every set time, 2000- 2secs
var timer = setInterval(() => {
	console.log('2 seconds have passed');
}, 2000);
// stop the above function call
setTimeout(() => {
	console.log('10 seconds have passed');
	clearInterval(timer);
}, 10000);
// these global objects or methods can be used any where in the file
// our current directory path
console.log(__dirname);
// our current directory path with file
console.log(__filename);
// future coverage of global objects are
// require, exports.

// What is function expressions

// this is normal function
function normal() {
	console.log('this is a normal function');
}
normal();

// function expression
var expression = function () {
	console.log('this is a function expression');
};
expression();
// function expression is mainly used to pass one function to the another

function callFunction(fun) {
	fun();
}
callFunction(expression);
// we can pass normal function too but ideally we prefer function expressions
callFunction(normal);
// If you want to create an anonymous function or assign a function to a prototype or as a property of some other object you need a Function Expression.

// module, require(), exports()
// the above methods are well written in app.js
// see app.js

// event Module
// basics on how to write our own listener and how to invoke it by our emitter are well written in app.js
var events = require('events');
var util = require('util');
const { fstat } = require('fs');

// create object constructor
// we have inherited event listener on person
// person can use eventEmitter methods like on, emit, etc.,
var person = function (name) {
	this.name = name;
};
// inherit eventEmitter
util.inherits(person, events.EventEmitter);
// we will create new objects now
var james = new person('james');
var harry = new person('harry');
var rayuga = new person('rayuga the dragon emperor');
var people = [james, harry, rayuga];
// set listener event speak on each object
people.forEach((person) => {
	person.on('speak', (message) => {
		console.log(person.name + ' said: ' + message);
	});
});
// emit events
james.emit('speak', 'hey dude');
rayuga.emit('speak', 'he cant be defeated');

// reading files
var fs = require('fs');
// normal files system is well written in app.js
// we will learn how to read and write files synchrnously rather than default asynchronous
// for asynchronous method we need a callback function to proceed
// whereas in synchronous method we do not need a callback function.
var read_file = fs.readFileSync('net_ninja_txt.txt', 'utf8');
console.log(read_file);
// write file
fs.writeFileSync('write_net_ninja.txt', read_file);

// create and delete directory synchronously
//fs.mkdirSync('ninja');
//fs.rmdirSync('ninja');
