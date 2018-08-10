//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } ,(error,client) => {
	if(error) {
		return console.log("Unable to connect to MongoDb server");
	}
	console.log("Connected to MongoDB server");
	const db = client.db('TodoApp');

	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if(err) {
			return console.log("error inserting todo");
		}
		console.log(JSON.stringify(result.ops,undefined, 2));
	});

	db.collection('Users').insertOne({
		name: 'Andrew',
		age: 20,
		location: 'SF'
	}, (error, result) => {
		if(error)
		{
			return console.log("there was an error", error);
		}
		console.log(result.ops[0]._id);
	});

	client.close();
});