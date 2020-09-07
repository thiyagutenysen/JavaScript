//using templates for the whole applicattion
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
	res.render('index');
});
app.get('/contacts', (req, res) => {
	res.render('contacts');
});
app.get('/profile/:name', (req, res) => {
	var data = {
		age: 29,
		job: 'beyblader',
	};
	res.render('profile', { person: req.params.name, data: data });
});
app.get('/hobbies/:name', (req, res) => {
	var hobby = {
		age: 29,
		hobbies: ['sleeping', 'f1', 'coding'],
	};
	res.render('hobby', { person: req.params.name, data: hobby });
});
app.listen(3000);
