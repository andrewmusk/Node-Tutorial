const express = require('express');

var app = express();

app.get('/', (req,res) => {
	res.status(404).send({
		error: 'page not found',
		name: 'Todo App v1.0'
	});
});

app.get('/users', (req,res) => {
	res.send([{name: 'Andrew', age: 20},{name: 'Gabriele', age: '21'},{name: 'Quintin', age: '21'}]);
});

app.listen(3000);


module.exports.app = app;