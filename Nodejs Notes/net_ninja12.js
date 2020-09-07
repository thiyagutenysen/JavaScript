// Query Strings
// it is an additional data added to http request with name and value pair after a question mark.
// eg., mysite.com/blog/news?page=2
// name-value pair --- page=2
// we need to parse the request and pull out the data
// response method of express has inbuit method response.query which parses the request and retrieves the query automatically into an json object type

var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/contacts', (req, res) => {
	console.log(req.query);
	res.render('contacts');
});

app.listen(3000);
