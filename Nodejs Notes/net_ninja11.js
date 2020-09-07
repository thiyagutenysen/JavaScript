// serving Middleware and static files
// we add a assets folder inside nodejs notes folder
// we create a style.css file inside that folder
// add the link to that css inside index.ejs file to style the index page
// when we look at the browser, css file isn't loaded to see any styles in the index home page
// its bcz when we load the home page
// it makes a request to css file and we haven't routed that request.
// what i can do is create different handlers for these requests.
// it is cumbersome and not effective
// there's a simple method
// middle ware is the code that runs between request and response
// we will use prebuilt middle wares given by express to solve the above problem
// general location of middleware
// app.get('/', (req, res) => {
// 	// anything that goes here is middleware
// 	res.render('index');
// });

// first we will look at middle ware offered by nodejs
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// instead of writing code between every hanler
// we will use app.use and pass a path argument
// whenever a request from the below handlers have the same path or routing as mentioned in app.use
// if it doesn't have any routing ie., any argument then it is gonna fire on every request made on server
// it will run the code between app.use first and move on to the request handler's code
//https://www.youtube.com/watch?v=-lRgL9kj_h0&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=28
//

// we will look at express exaple
app.use('/assets', express.static('assets'));
// express.static requires a folder as an argument
// the above function is fired when the reuest from user calls a handler which has or calls /assets further
// express.static - it's gonna serve whatever we requested on assets folder

app.get('/', (req, res) => {
	//----- this is a hanler
	res.render('index');
});
app.get('/contacts', (req, res) => {
	//------ this is a handler
	res.render('contacts');
});

app.listen(3000);
