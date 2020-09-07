// serving json file

var http = require('http');
var fs = require('fs');

var myObj = {
	name: 'Rayuga',
	job: 'beyblader',
	age: '19',
	bit_beast: 'dragon',
};
var server = http.createServer((req, res) => {
	console.log('requested url is: ' + req.url);
	res.writeHead(200, { contentType: 'application/json' });
	// we will send the data through end method
	// but end method only accepts string or a buffer
	// we will convert the object into a string
	res.end(JSON.stringify(myObj));
});

server.listen('3000');

// why do we wanna send a json object
// during a process our webpage might request for json and this json is used by frontend javascript to make changes in the website
// it includes routing which we will study next
