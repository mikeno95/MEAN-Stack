// config/routes.js

var messages = require("./../controller/messages") // connects to messages controller
var comments = require("./../controller/comments") // connects to comments controller

module.exports = function(app) {
	app.get('/', function(req,res) { // root route
		messages.index(req,res); // invoke index function from messages
	});
	app.post('/message/create', function(req,res) { // post route to create messages
		messages.create(req,res); // invoke create function from messages
	});	
	app.post('/comment/:id', function(req,res) { // post route to create comments
		comments.create(req,res); // invoke create function from comments
	});
}