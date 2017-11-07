var cats = require('./../controllers/cats'); 

module.exports = function(app) {
	app.get('/', function(req,res) {
		cats.index(req,res);
	})
	app.get('/cat/new', function(req,res) {
		cats.new(req,res); 
	})
	app.post('/cat', function(req,res) {
		cats.create(req,res);
	}); 
	app.get('/cat/:id', function(req,res) {
		cats.show(req,res);
	})
	app.get('/cat/edit/:id', function(req,res) {
		cats.edit(req,res);
	})
	app.post('/cat/:id', function(req,res) {
		cats.update(req,res)
	})
	app.post('/cat/destroy/:id', function(req,res){
		cats.destroy(req,res)
	})
}