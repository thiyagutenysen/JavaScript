// Post request
// Post requests, ask the server to accept/store data which is enclosed in the body of the request
// often used when submitting the form
// we will add a form in contacts page
// we will style that form in css
// we will add extra two attributes to the form in contacts.ejs page
// we will add method='POST' action='/contacts'
// when we click on the submit button of the form it makes a post request
// we need additional middle ware to handle post request
// we will install body-parser package from npm
var body_parser = require('body-parser');
var urlencodedParser = body_parser.urlencoded({ extended: false });
var express = require('express');
var app = express();

// set template engine to ejs
app.set('view engine', 'ejs');
// middleware - serve static files
app.use('/assets', express.static('assets'));

// route or handle home page
app.get('/', (req, res) => {
	res.render('index');
});

// route contacts page
app.get('/contacts', (req, res) => {
	res.render('contacts');
});

// routing for post request in contacts page
app.post('/contacts', urlencodedParser, (req, res) => {
	// urlencodedParser is same as middle ware
	// this will fire the middleware code on line 12
	// when the submit button inside contacts page is clicked
	// it triggers the method post
	// which triggers the action /contacts which is a post request
	// urlencodedparser middleware sends the details filled inside the form to req variable of this callback function
	// which can be accessed by req.body
	console.log(req.body);
	// above log prints the form as a json object

	res.send('successfully submitted ur form');
});

app.listen(3000);
