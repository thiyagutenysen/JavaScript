// get parameters from the URL
var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('this is home page');
});

// parameter retrieving
// http://localhost:3000/profile/123
// if we type the above url
// we will get 123 and print it out
app.get('/profile/:id', (req, res) => {
	res.send('You have requested for the profile with id: ' + req.params.id);
	// normally this is used to get the id from url then retrieve the profile with this id on mongodb
	// and return it
});

app.listen(3000);
