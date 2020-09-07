// we are gonna learn streams and buffers
// to get quick idea how the syntax will be checkout app.js
// streams allows to transfer a whole data by dividing them into small chunks and transfering each chunk at once
// this is how we get base page of youtube first and later the content(video-pictures)
// What is buffer
// - Temporary storage spot for a chunk of data that is being transferred from one place to another.
// stream and buffer increases the perfomances of websites
// writable stream - allow nodejs to write data to a file chunk by chunk
// readable stream - allow nodejs to read data chunk by chunk
// duplex - can read and write data chunk by chunk
// readFile methode actually grabs the whole data at once which is not very useful
// to know the syntax of read stream snd write stream look at app.js

// there is a shorter syntax that does all the things above is 'pipes'
// instead of listening and storing the buffer in chunk and then using writestream to write we can use pipe straight away.
// to know the syntax of pipe see app.js

// so how to use above methods effeciently to send a file to a browser to show
var http = require('http');
var fs = require('fs');

var server = http.createServer((request, response) => {
	console.log('requested url: ' + request.url);
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	var myReadStream = fs.createReadStream('./ninja_stream.txt', 'utf8');
	// response inherits the property of write stream
	myReadStream.pipe(response);
	// we should not use end here
	// if we use response.end(); - nothing is shown in the browser?
	//deva answer to above question: The browser calls the server via a TCP connection,
	//this connection is alive as long you don't call end,
	//so it sends the data,
	//when you call end it closes the connection,
	//that's all
});

server.listen(3000);
