// Template Engines
// it helps us to insert dynamic content into html pages through javascript in node.
// above is same as i learnt html DOM elements in front end javascript to insert html elements into html file by listening to an document event.
// but here we use template engine to do the same but in server.
// dom elements renders in browser
// template engine renders in server side
// while changing with dom elements if we haven't stored the changed file in database - if we refresh changes won't be seen.
// in template engines we take care of all that

// there are many template engines available
// we will use ejs engine
var express = require('express');
var app = express();

// we will tell express that we wanna use ejs as our view engine
app.set('view engine', 'ejs');
// now express knows ejs is set as template engine
// by default when we request some views or template it's gonna look for the ./view folder, that's the default behaviour
// we will create a view folder now

// routing
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html'); // for sendFile path must be absolute
});
// routing according to user
app.get('/profile/:name', (req, res) => {
	var data = {
		age: 29,
		job: 'beyblader',
	};
	// res.render syntax is used for ejs templates
	// first argument is template file name
	// we don't need to specify folder as views, res automatically finds it
	// 2nd argument is customer specific data which u have to render in preset template html file
	// 2nd argument type is javascript object
	res.render('profile', { person: req.params.name, data: data });
});

// we are not limited to send some names variables, we can send javascript code and html code too
// we will write the javascript code on ejs file
app.get('/hobbies/:name', (req, res) => {
	var hobby = {
		age: 29,
		hobbies: ['sleeping', 'f1', 'coding'],
	};
	res.render('hobby', { person: req.params.name, data: hobby });
});
app.listen(3000);

// let's move on to partial templates
// partial template helps us to include a particular element on html everywhere
// like creating nav bar once and placing it in every page
// we have created a folder named nav.ejs under views folder
// we have created nav.ejs file in partials folder
// we have created nav.ejs now
// we will include the nav in profile.ejs
// we will instert <% include partials/nav.ejs %> into the right place in profile.ejs
// we need to include foldername/file.ejs between <% and do not use <%=

// let's create partial template for index.html
// create index.ejs inside views folder
// dump all the code in index.html to index.ejs
// add ejs code to include nav in index.ejs
// do the same thing for contacts.html too
// let's do the above routing code using only ejs files in net_ninja10.js file
