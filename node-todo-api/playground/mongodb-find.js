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

	db.collection('Todos').find().toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) => {
		console.log('Unable to find database ' ,err);
	});

	//client.close();
});