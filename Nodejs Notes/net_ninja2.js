// Clients and Servers
// client----------------------------------------server
//  ip                   socket                    ip
// socket is a connection in which the info is sent
// how a client make request a server and how a server can return a response to the client

// create a server
// step 1: we will write code to create a server here
// step 2: we will go to the browser and make a request to that server
var http = require('http');
var server = http.createServer((request, response) => {
	// whenever we sent a request to this server, this callback function is gonna fire
	// request object comes loaded with the request that have been made from the client
	// response object is something that we can use to send a response back
	// we can request along with headers too
	// we can return response along with headers too
	// set a response
	// first we will set headers in response by writeHead method
	// headers contain status-code, content type, etc.,
	response.writeHead(200, { 'Content-Type': 'text/plain' }); // we set plain text here
	// normally we will set content type as html
	// to send the response we use end method
	response.end('hey ninjas');
	// text inside end is printed on the web browser
	// we will output the request
	console.log('request was made from: ', request.url);
});

// we need to set a port to listen to the server, otherwise we can't access the server in browser
server.listen(3000);
console.log('all set');
