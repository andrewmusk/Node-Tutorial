const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');



app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log',log+ '\n', (err) => {
		if (err)
		{
			console.log('Unable to append to server');
		}
	})
	next();
});

app.use((req,res,next)=> {
	res.render('maintenance.hbs');
})

app.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
})

app.get('/',(req,res) => {
	//res.send('<h1>Hello Express! This is Andrew Musk</h1>');
	res.render('home.hbs', {
		pageTitle: 'Welcome Home',
		currentYear: new Date().getFullYear(),
		welcomeMessage: "Welcome to my website"
	});
});

app.get('/about',(req,res) => {
	//res.send('<h1>Hello Express! This is Andrew Musk</h1>');
	res.render('about.hbs', {
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	});
});

app.get('/bad',(req,res) => {
	//res.send('<h1>Hello Express! This is Andrew Musk</h1>');
	res.send({
		error: "THis is not a good thing"
	});
});


app.listen(3000, () => {
	console.log("Server is up and running");
});