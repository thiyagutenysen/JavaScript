// Express guys - welcome
// - easy and flexible routing system
// - integrates with many templating engines
// - contains a middleware framework

// import express
var express = require('express');

// express gives us a function
// we will fire up the express function
var app = express();

// how do we route
// how do we respond to requests ?
// the below types are the diiferent types of request that will be made
// now app has the following HTTP methods
// 1. GET
// 2. POST
// 3. DELETE
// 4. PUT
// how we respond
// - GET - app.get('route',fun())
// - POST - app.post('route',fun())
// - DELETE - app.delete('route',fun())
app.get('/', (req, res) => {
	res.send('this is a very simple example of express'); // .send is an express method
});
app.get('/contacts', (req, res) => {
	res.send('this is a very simple contacts page'); // .send is an express method
});
// listen to a port
app.listen(3000);
