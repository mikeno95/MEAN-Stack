// config/routes.js

var messages = require("./../controller/messages")
var comments = require("./../controller/comments")

module.exports = function(app) {
	app.get('/', function(req,res) {
		messages.index(req,res); 
	});
	app.post('/message/create', function(req,res) {
		messages.create(req,res);
	});	
	app.post('/comment/:id', function(req,res) {
		comments.create(req,res);
	});
}