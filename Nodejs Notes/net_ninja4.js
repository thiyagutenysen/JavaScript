// Serve a html file

var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
	console.log('requested url is: ' + req.url);
	var myHtmlPage = fs.createReadStream('./index.html', 'utf8');
	res.writeHead(200, { contentType: 'text/html' });
	myHtmlPage.pipe(res);
});

server.listen('3000');
