// Basic Routing
// until now whatever we type after localhost:3000/anything
// it serves the same page that we sent by response object
// but we don't want that
// if we type localhost:3000/home - we need to see home page
// if we type localhost:3000/contacts - we need to see contacts page
var http = require('http');
var fs = require('fs');
var myObj = [
	{
		name: 'rayuga',
		age: '19',
	},
	{
		name: 'jinga',
		age: '19',
	},
]; // practically these json objects are retrieved from mongodb database
// for teaching purpose we are defining it here
var server = http.createServer((req, res) => {
	console.log('requested url is: ' + req.url);
	if (req.url === '/home' || req.url === '/') {
		res.writeHead(200, { contentType: 'text/html' });
		fs.createReadStream('./index.html').pipe(res);
	} else if (req.url === '/contact') {
		res.writeHead(200, { contentType: 'text/html' });
		fs.createReadStream('./contacts.html').pipe(res);
	}
	// if we wanna send api
	else if (req.url === '/api/beys') {
		// this is api end point
		res.writeHead(200, { contentType: 'application/json' });
		res.end(JSON.stringify(myObj));
	} else {
		res.writeHead(404, { contentType: 'text/html' });
		fs.createReadStream('./404.html').pipe(res);
	}
});

server.listen('3000');

// we may think that there are lot of if else statements to write for routing purpose
// in future we are gonna learn express which is gonna make routing super simple

// About Package.json
// it contains all the information of our project mainly about what dependencies we use
// type: npm init ------- in the command line
// it will ask series of questions - fill it
// if we wanna download new package from npm and update the package.json file - we type
// npm install express -save ------------ in command line

// okay now if we downloaded someone's node project
// we find that the downloaded repository doesn't contain required dependencies listed in package.json file
// what do we do?
// do we install each dependency by npm install package_name
// we have a single command to install all dependencies at once
// be present in that folder in command line
// type: npm install
// that's it - done

// i have copied and pasted the series of questions asked by npm init
// (base) chella@chella-Inspiron-7460:~/Desktop/Coding/Nodejs Notes$ npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help json` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg> --save` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// name: (Nodejs Notes)
// Sorry, name can only contain URL-friendly characters and name can no longer contain capital letters.
// name: (Nodejs Notes) nodejs_notes
// version: (1.0.0)
// description: tutorial noted on nodejs
// entry point: (app.js)
// test command:
// git repository:
// keywords:
// author: chella
// license: (ISC)
// About to write to /home/chella/Desktop/Coding/Nodejs Notes/package.json:

// {
//   "name": "nodejs_notes",
//   "version": "1.0.0",
//   "description": "tutorial noted on nodejs",
//   "main": "app.js",
//   "dependencies": {
//     "express": "^4.17.1"
//   },
//   "devDependencies": {},
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "chella",
//   "license": "ISC"
// }

// Is this ok? (yes) yes
