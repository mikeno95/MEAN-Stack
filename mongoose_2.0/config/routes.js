var cats = require('./../controllers/cats'); // require cat.js in controller

module.exports = function(app) {
	app.get('/', function(req,res) { // root route
		cats.index(req,res);
	})
	app.get('/cat/new', function(req,res) { // displaying 'add cat' page
		cats.new(req,res); 
	})
	app.post('/cat', function(req,res) { // creating new cat
		cats.create(req,res);
	}); 
	app.get('/cat/:id', function(req,res) { // displaying specific cat
		cats.show(req,res);
	})
	app.get('/cat/edit/:id', function(req,res) { // displaying edit page for specific cat
		cats.edit(req,res);
	})
	app.post('/cat/:id', function(req,res) { // updating specific cat
		cats.update(req,res)
	})
	app.post('/cat/destroy/:id', function(req,res){ // destroying specific cat 
		cats.destroy(req,res)
	})
}