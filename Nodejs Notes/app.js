console.log('hello world from nodejs');
// modules in nodejs is js files

// importing case 1
const moduleapp = require('./moduleapp'); // import files
console.log(moduleapp); // outputs that it contains function sum
console.log(moduleapp(1, 1)); // this acts as add(1,1)

// importing case 2
const moduleapp2 = require('./moduleapp2');
console.log(moduleapp2);
console.log(moduleapp2.sum(1, 1));
console.log(moduleapp2.PI);
console.log(new moduleapp2.SomeClass());

// importing case 3
const moduleapp3 = require('./moduleapp3');
console.log(moduleapp3);
console.log(moduleapp3.sum(1, 1));
console.log(moduleapp3.PI);
console.log(new moduleapp3.SomeClass());

// event module and EventEmitter class
// event driven programming

//initialisation
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// set listener
// EventEmitter - class
// eventEmitter - object
// tutorial - event
eventEmitter.on('tutorial', () => {
	console.log('tutorial event has occured');
});
// emit the tutorial event to trigger the above function
eventEmitter.emit('tutorial');
// add parameters to the function
eventEmitter.on('tutorial1', (num1, num2) => {
	console.log('tutorial1 event has occured');
	console.log(num1 + num2);
});
eventEmitter.emit('tutorial1', 1, 2);
// working with class that inherits from EventEmitter class
class person extends EventEmitter {
	constructor(name) {
		super(); // super allows us to use this keyword
		this._name = name;
	}
	get name() {
		return this._name;
	}
}
// create an object of above class
let pedro = new person('Chella');
// pedro obtains property of both person and EventEmitter class
// therefore pedro is also an EventEmitter instance
// we can add listner to pedro
pedro.on('name', () => {
	console.log('my name is ' + pedro.name);
});
pedro.emit('name');

// we will work with read line module

// import readline module
const readline = require('readline');
// create instance of readline module
// below code creates an input sector in the terminal
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });
// create 2 random numbers between 1 and 10
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;
// use rl to get input from user and print it out
// rl.question(`what is ${num1} + ${num2}? \n`, (input) => {
// 	if (input.trim() == answer) {
// 		console.log('correct');
// 		rl.close(); // close the reading sector in terminal
// 		// the above line emits close event
// 	} else {
// 		rl.setPrompt('Incorrect response try again \n'); // prompt is set for rl
// 		rl.prompt(); // prompt is displayed
// 		rl.on('line', (input2) => {
// 			// this listener with 'line' as event is called when u give input in terminal until input sector is closed
// 			// line event is trigerred whenever u give input in screen
// 			if (input2.trim() == answer) {
// 				console.log('correct');
// 				rl.close();
// 			} else {
// 				rl.prompt();
// 			}
// 		});
// 	}
// });
// // readline is actually a eventlistener class
// rl.on('close', () => {
// 	console.log('close event is emitted');
// });

// working with file system module

//import file system module
const fs = require('fs');
// let us create a file
// we use writeFile method which requires 3 argument
// 1. file name, 2. what we wanna write to that file, 3. callback function with error as parameter
// callback fun is trigerred automatically.
// callback function parameter is set to true if there is an error, or true if not
fs.writeFile(
	'example.txt',
	'this is an example for creating a file',
	(error) => {
		if (error) {
			console.log(error);
		} else {
			console.log('File is successfully created');
		}
	}
);
// read the file
fs.readFile('example.txt', 'utf8', (error, file) => {
	if (error) {
		console.log(error);
	} else {
		console.log(file);
	}
});
// renaming the file
fs.rename('example.txt', 'example2.txt', (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('successfully renamed the file');
	}
});
// the problem i found from above three functions is all are asynchronous
// above 3 functions runs at the same time, whichever finishes first prints the output
// to solve the above problem we should write one function inside the callback function of the other
// example write read function inside callback of write

// append data to the file
// add data at the end of the file
fs.appendFile('example2.txt', 'some data being appended', (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('successfully appended data');
	}
});
// delete the file
fs.unlink('example2.txt', (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('successfully deleted the file');
	}
});

// we will work with folders now

// create a folder
// delete the folder
fs.mkdir('new_folder', (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('folder is successfully created');
		fs.rmdir('new_folder', (error) => {
			if (error) {
				console.log(error);
			} else {
				console.log('successfully deleted the folder');
			}
		});
	}
});
// in the above code if the folder name already exists it returns error
// it doesn't happen the same way for files.
// rmdir only works when the folder is empty

// how to delete all the files inside a folder
// we use readdir and unlink
// i created a example_folder
// added two files inside it
// fs.readdir('example_folder', (error, files) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(files);
// 		for (let file of files) {
// 			fs.unlink('./example_folder/' + file, (error) => {
// 				if (error) {
// 					console.log('files cannot be deleted');
// 				} else {
// 					console.log('successfully deleted a file');
// 				}
// 			});
// 		}
// 		fs.rmdir('example_folder', (error) => {
// 			if (error) {
// 				console.log(error);
// 			} else {
// 				console.log('successfully delete the example_folder');
// 			}
// 		});
// 	}
// });

// working with readable and writable streams
// create instance for read Stream
// readStream already inherits eventEmitter class
const readStream = fs.createReadStream('./text_example.txt', 'utf8');
// create instance for write Stream
// if the file didn't exist already it creates that file
const writeStream = fs.createWriteStream('write_example.txt');
// read readStream
//whenever readstream listener detects data it invokes data event
// when data event is invoked callback function is called
readStream.on('data', (chunk) => {
	console.log(chunk);
	writeStream.write(chunk);
});
// why u should use streams
// we can do the same above code with readFile and WriteFile
// when the reading dile is too large readFile and writeFile outputs error
// large readFile and writeFile tend to hold the whole file content in single variable
// we need to break files into chunks inorder to read big files, that's where streams come in.

// Pipes and pipe chaining
// pipe is shorthand version of read and write stream
const read_stream = fs.createReadStream('./text_example.txt', 'utf8');
const write_stream = fs.createWriteStream('write_example2.txt');
readStream.pipe(write_stream); // copies readStream content and pastes it to writeStream
// let's introduce pipe chaining
// let's import zlib which is a compression library
const zlib = require('zlib');
// we will use transferStream to manipulate the file
// here we will manipulate it into a compressed file
const gzip = zlib.createGzip(); //this return a transfer stream
const write_stream2 = fs.createWriteStream('write_stream3.txt.gz'); // we have to add .gz extension here
// we will compress read_stream into gzip
// then we will put that into write_stream2
read_stream.pipe(gzip).pipe(write_stream2);
// let us unzip or decompress the files
// const gunzip = zlib.createGunzip();
// const read_stream2 = fs.createReadStream('write_stream3.txt.gz');
// const write_stream3 = fs.createWriteStream('write_stream4.txt');
// // // let's uncompress
// read_stream2.pipe(gunzip).pipe(write_stream3);
// // error : the above code outputs error ------------------------------- need to look

// Creating a HTTP Server
// import http module
const http = require('http');
// create server
// request - is what user requests
const server = http.createServer((request, response) => {
	if (request.url === '/') {
		// only if the url is root
		// set the response
		response.write('hello world from node.js');
		// send the response
		response.end();
	} else {
		response.write('using some other domain');
		response.end();
	}
});
// what port should the server listen to
server.listen('3000');
// when we type localhost:3000 in chrome we would see our message in post
// normally website html page is sent back as response

// serving static files with http and file system modules
