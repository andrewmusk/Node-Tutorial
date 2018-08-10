var db = require('./db.js')

module.exports.handleSignup = (email,password) => {
	//check for email
	db.saveUser({
		email,password
	});
	//send email
};